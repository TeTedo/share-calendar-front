import React, { useEffect, useState } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { CalendarTopBar } from "components/calendar/CalendarTopBar";
import { AdMain } from "components/advertisement/AdMain";
import { Calendar } from "components/calendar/Calendar";
import { CalendarProfile } from "components/calendar/CalendarProfile";
import moment, { Moment } from "moment";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());

  return (
    <CalendarPageWrapper>
      <CalendarTopBar currentDate={currentDate} />
      <AdMain />
      <CalendarProfile />
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </CalendarPageWrapper>
  );
};
