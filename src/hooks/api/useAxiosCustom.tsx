import axios from "axios";
import { BASE_URI_API } from "constants/apiUri";
import { axiosInstance } from "constants/axios";
import { PAGE_URI } from "constants/pageUri";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "state/recoil/tokenState";

export const useAxiosCustom = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const toast = useToastCustom();

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token.access}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            // Refresh access token
            const response = await axiosInstance.post("/refresh-token");
            const newAccessToken = response.data.accessToken;
            setToken(newAccessToken);
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            toast("로그인이 필요합니다.", ToastType.ERROR);
            setToken({ access: null });
            window.location.href = PAGE_URI.LANDING;
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when the component using this hook unmounts
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [token, setToken, toast]);

  return axiosInstance;
};
