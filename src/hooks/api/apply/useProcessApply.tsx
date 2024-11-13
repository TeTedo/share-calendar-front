import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useProcessApply = (groupUuid: string) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group-application/${groupUuid}/process`;

  return useMutation<IProcessApplyResponse, Error, IProcessApplyRequest>({
    mutationFn: async (data: IProcessApplyRequest) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
