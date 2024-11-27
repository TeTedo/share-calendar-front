import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupMemberRole = ({
  groupId,
  groupMemberId,
}: {
  groupId: number;
  groupMemberId: number;
}) => {
  const axios = useAxiosCustom();

  const requestUri = `/api/v1/group-member/${groupId}/role/${groupMemberId}`;

  return useMutation<
    IPatchGroupMemberRoleResponse,
    Error,
    IPatchGroupMemberRoleRequest
  >({
    mutationFn: async () =>
      await axios
        .patch(requestUri, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data),
  });
};
