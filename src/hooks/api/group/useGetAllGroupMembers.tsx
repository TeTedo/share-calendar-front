import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

export const useGetAllGroupMembers = (group: IGroupDto | null) => {
  const axios = useAxiosCustom();
  const requestUri = "/api/v1/group-members/" + group?.groupId;

  return useQuery({
    queryKey: ["/group-members/" + group?.groupId],
    queryFn: (): Promise<IGetAllGroupMemberResponse> =>
      axios.get(requestUri).then((response) => response.data),
    enabled: group !== null,
  });
};
