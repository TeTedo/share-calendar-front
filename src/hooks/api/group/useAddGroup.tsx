import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useAddGroup = () => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/group";

  return useMutation<IAddGroupResponse, Error, IAddGroupRequest>({
    mutationFn: async (data: IAddGroupRequest) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
