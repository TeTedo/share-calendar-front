import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const usePatchMemberInfo = () => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/member`;

  return useMutation<IPatchMemberInfoResponse, Error, IPatchMemberInfoRequest>({
    mutationFn: async (data: IPatchMemberInfoRequest) =>
      await axios
        .patch(requestUri, data.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data),
  });
};
