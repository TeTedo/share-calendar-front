import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useQuery } from "@tanstack/react-query";

export const useGetGroupApplication = (groupUuid: string) => {
  const axios = useAxiosCustom();
  const requestUri = `/api/v1/group-application/${groupUuid}`;

  return useQuery({
    queryKey: [`group-application/${groupUuid}`],
    queryFn: (): Promise<IGetGroupApplicationResponse> =>
      axios.get(requestUri).then((response) => response.data),
  });
};
