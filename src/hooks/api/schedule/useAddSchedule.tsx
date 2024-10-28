import React from "react";
import { useAxiosCustom } from "../useAxiosCustom";
import { useMutation } from "@tanstack/react-query";

export const useAddSchedule = () => {
  const axios = useAxiosCustom();

  const requestUri = "/api/v1/schedule";

  return useMutation<IScheduleDto, Error, IAddScheduleRequest>({
    mutationFn: async (data: IAddScheduleRequest) =>
      await axios.post(requestUri, data).then((response) => response.data),
  });
};
