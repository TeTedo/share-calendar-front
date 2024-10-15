import React, { useEffect, useState } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { useMemberInfo } from "hooks/api/member/useMemberInfo";
import { useRefreshToken } from "hooks/api/token/useRefreshToken";
import { CalendarTopBar } from "components/calendar/CalendarTopBar";
import { AdMain } from "components/advertisement/AdMain";
import { Calendar } from "components/calendar/Calendar";
import { CalendarProfile } from "components/calendar/CalendarProfile";
import moment, { Moment } from "moment";

export const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState<Moment>(moment());

  return (
    <CalendarPageWrapper>
      <CalendarTopBar />
      <AdMain />
      <CalendarProfile />
      <Calendar currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
    </CalendarPageWrapper>
  );
};
