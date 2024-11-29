import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useDeleteGroupMember = ({
  groupId,
  groupMemberId,
}: {
  groupId: number;
  groupMemberId: number;
}) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group-member/${groupId}/${groupMemberId}`;

  return useMutation<
    IDeleteGroupMemberResponse,
    Error,
    IDeleteGroupMemberRequest
  >({
    mutationFn: async () =>
      await axios.delete(requestUri, {}).then((response) => response.data),
  });
};
