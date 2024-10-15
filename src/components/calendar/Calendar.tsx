import React, { Dispatch, SetStateAction, useState } from "react";
import { CalendarWrapper } from "./Calendar.style";
import moment, { Moment } from "moment";
import { CalendarDetail } from "./CalendarDetail";

export const Calendar = ({
  currentMonth,
  setCurrentMonth,
}: {
  currentMonth: Moment;
  setCurrentMonth: Dispatch<SetStateAction<Moment>>;
}) => {
  const [direction, setDirection] = useState("");

  const daysInMonth = (month: Moment) => {
    const startOfMonth = month.startOf("month");
    const endOfMonth = month.endOf("month");
    const days = [];
    let day = startOfMonth;

    while (day <= endOfMonth) {
      days.push(day);
      day = day.clone().add(1, "day");
    }

    return days;
  };

  const renderMonth = (month: Moment) => {
    return daysInMonth(month).map((day) => (
      <CalendarDetail
        key={day.format("YYYY-MM-DD")}
        day={day.date()}
        color="black"
        backgroundColor="white"
        fontSize="10px"
        list={[]}
      ></CalendarDetail>
    ));
  };

  const previousMonth = currentMonth.clone().subtract(1, "month");
  const nextMonth = currentMonth.clone().add(1, "month");

  return (
    <CalendarWrapper>
      <div>{renderMonth(previousMonth)}</div>
      <div>{renderMonth(currentMonth)}</div>
      <div>{renderMonth(nextMonth)}</div>
    </CalendarWrapper>
  );
};
