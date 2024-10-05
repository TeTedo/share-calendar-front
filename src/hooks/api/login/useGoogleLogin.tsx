import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";

export const useGoogleLogin = () => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/auth/google";

  return useMutation<TGoogleLoginResponse, Error, TGoogleLoginRequest>({
    mutationFn: async (data: TGoogleLoginRequest) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
