import React, { useEffect } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { useMemberInfo } from "hooks/api/member/useMemberInfo";

export const CalendarPage = () => {
  const { data } = useMemberInfo();
  console.log(data);
  return <CalendarPageWrapper>Calendar</CalendarPageWrapper>;
};
