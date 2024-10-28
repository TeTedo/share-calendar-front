import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

export const useGetGroupMember = (group: IGroupDto | null) => {
  const axios = useAxiosCustom();
  const memberRecoil = useRecoilValue(memberState);
  const requestUri = "/api/v1/group-member/" + group?.groupId;

  return useQuery({
    queryKey: [memberRecoil.uuid + "/group-member/" + group?.groupId],
    queryFn: (): Promise<IGetGroupMemberResponse> =>
      axios.get(requestUri).then((response) => response.data),
    enabled: group !== null,
  });
};
