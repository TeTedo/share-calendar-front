import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";
import { useQuery } from "@tanstack/react-query";

export const useGetGroupsWithCategories = (tokenDto: ITokenDto) => {
  const axios = useAxiosCustom();
  const memberRecoil = useRecoilValue(memberState);
  const requestUri = "/api/v1/groups/categories";

  return useQuery({
    queryKey: [memberRecoil.uuid + "/groups"],
    queryFn: (): Promise<IGetGroupWithCategories> =>
      axios.get(requestUri).then((response) => response.data),
    enabled: tokenDto.access !== null,
  });
};
