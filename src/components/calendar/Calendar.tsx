import React, { Dispatch, SetStateAction, useState } from "react";
import {
  S_CalendarWrapper,
  S_CalendarHeader,
  S_CalendarBody,
} from "./Calendar.style";
import moment, { Moment } from "moment";
import { CalendarDetail } from "./CalendarDetail";

export const Calendar = ({
  currentDate: currentDate,
  setCurrentDate: setCurrentDate,
}: {
  currentDate: Moment;
  setCurrentDate: Dispatch<SetStateAction<Moment>>;
}) => {
  const [direction, setDirection] = useState("");

  const nextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  // Go to the previous month
  const prevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const daysInMonth = (month: Moment) => {
    const startOfMonth = month.startOf("month").clone();
    const endOfMonth = month.endOf("month").clone();

    const startOfCalendar = startOfMonth.clone().startOf("week");
    const endOfCalendar = endOfMonth.clone().endOf("week");

    const days = [];
    let day = startOfCalendar;

    while (day <= endOfCalendar) {
      days.push(day.clone());
      day = day.clone().add(1, "day");
    }
    return days;
  };

  const renderDay = (month: Moment) => {
    return daysInMonth(month).map((day) => (
      <S_CalendarBody.Container>
        <CalendarDetail
          key={day.format("YYYY-MM-DD")}
          day={day.date()}
          color={day.isSame(currentDate, "month") ? "black" : "#ccc"}
          backgroundColor="white"
          fontSize="15px"
          list={[]}
        ></CalendarDetail>
      </S_CalendarBody.Container>
    ));
  };

  return (
    <S_CalendarWrapper>
      <S_CalendarHeader.Wrapper>
        {["일", "월", "화", "수", "목", "금", "토"].map((header) => (
          <S_CalendarHeader.Container>{header}</S_CalendarHeader.Container>
        ))}
      </S_CalendarHeader.Wrapper>

      <S_CalendarBody.Wrapper>{renderDay(currentDate)}</S_CalendarBody.Wrapper>
    </S_CalendarWrapper>
  );
};
