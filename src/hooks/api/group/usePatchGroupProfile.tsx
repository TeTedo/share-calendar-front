import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupProfile = (groupId: number) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group-member/${groupId}`;

  return useMutation<IPatchGroupProfileResponse, Error, IPatchGroupImgRequest>({
    mutationFn: async (data: IPatchGroupImgRequest) =>
      await axios
        .patch(requestUri, data.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data),
  });
};
