import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "constants/axios";
import React from "react";

export const useGoogleLogin = () => {
  const requestUri = "/api/v1/auth/google";

  return useMutation<IGoogleLoginResponse, Error, IGoogleLoginRequest>({
    mutationFn: async (data: IGoogleLoginRequest) =>
      await axiosInstance
        .post(requestUri, data)
        .then((response) => response.data),
  });
};
