import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupImg = (groupUuid: string) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group/${groupUuid}/img`;

  return useMutation<IPatchGroupImgResponse, Error, IPatchGroupImgRequest>({
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
