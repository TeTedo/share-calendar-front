import React, { useEffect } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { useMemberInfo } from "hooks/api/member/useMemberInfo";
import { useRefreshToken } from "hooks/api/token/useRefreshToken";

export const CalendarPage = () => {
  const { mutate } = useRefreshToken();

  useEffect(() => {
    mutate(() => {}, {
      onSuccess: (response) => {
        console.log(response);
      },
    });
  }, []);

  return <CalendarPageWrapper>Calendar</CalendarPageWrapper>;
};
