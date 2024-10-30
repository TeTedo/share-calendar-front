import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useAddCategory = (groupId: number) => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/" + groupId + "/category";

  return useMutation<IAddCategoryResponse, Error, IAddCategoryRequest>({
    mutationFn: async (data: IAddCategoryRequest) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
