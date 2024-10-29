import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useQuery } from "@tanstack/react-query";

export const useGetAllSchedules = (tokenDto: ITokenDto) => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/schedules";

  return useQuery({
    queryKey: ["/schedules"],
    queryFn: (): Promise<IGetAllSchedulesResponse> =>
      axios.get(requestUri).then((response) => response.data),
    enabled: tokenDto.access !== null,
  });
};
