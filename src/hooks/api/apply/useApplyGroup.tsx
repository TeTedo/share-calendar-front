import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useApplyGroup = (inviteCode: string) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group-application/${inviteCode}`;

  return useMutation<IApplyGroupResponse, Error, {}>({
    mutationFn: async (data: {}) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
