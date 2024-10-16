import React, { Dispatch, SetStateAction, useState } from "react";
import {
  S_CalendarWrapper,
  S_CalendarHeader,
  S_CalendarBody,
} from "./Calendar.style";
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
    const startOfMonth = month.startOf("month").clone();
    const endOfMonth = month.endOf("month").clone();
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
      <S_CalendarBody.Container>
        <CalendarDetail
          key={day.format("YYYY-MM-DD")}
          day={day.date()}
          color="black"
          backgroundColor="white"
          fontSize="10px"
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

      <S_CalendarBody.Wrapper>
        {renderMonth(currentMonth)}
      </S_CalendarBody.Wrapper>
    </S_CalendarWrapper>
  );
};
