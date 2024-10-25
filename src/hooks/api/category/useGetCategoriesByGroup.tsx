import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoriesByGroup = (groupId: number) => {
  const axios = useAxiosCustom();
  const requestUri = "/api/v1/";

  return useQuery({
    queryKey: [groupId + "/categories"],
    queryFn: (): Promise<IGetCategoriesByGroup> =>
      axios
        .get(requestUri + groupId.toString() + "/categories")
        .then((response) => response.data),
  });
};
