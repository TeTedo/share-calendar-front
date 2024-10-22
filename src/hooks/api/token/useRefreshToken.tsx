import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useRefreshToken = () => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/auth/refresh-token";

  return useMutation<ITokenDto, Error, VoidFunction>({
    mutationFn: async () =>
      await axios.post(requestUri).then((response) => response.data),
  });
};
