import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

export const useGetGroups = () => {
  const axios = useAxiosCustom();
  const memberRecoil = useRecoilValue(memberState);
  const requestUri = "/api/v1/groups";

  return useQuery({
    queryKey: [memberRecoil.uuid + "/groups"],
    queryFn: (): Promise<IGroupListDto> =>
      axios.get(requestUri).then((response) => response.data),
  });
};
