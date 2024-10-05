import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";

export const useMemberInfo = () => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/member/info";

  return useQuery({
    queryKey: ["/member/info"],
    queryFn: (): Promise<TMemberDto> =>
      axios.get(requestUri).then((response) => response.data),
  });
};
