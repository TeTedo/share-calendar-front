import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useChangeGroupImg = (groupUuid: string) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group/${groupUuid}/img`;

  return useMutation<IAddCategoryResponse, Error, IChangeGroupImgRequest>({
    mutationFn: async (data: IChangeGroupImgRequest) =>
      await axios
        .post(requestUri, data.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data),
  });
};
