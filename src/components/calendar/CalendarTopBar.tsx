import React from "react";
import { S_CalendarTopBarWrapper, S_Container } from "./CalendarTopBar.style";
import { Moment } from "moment";

export const CalendarTopBar = ({ currentMonth }: { currentMonth: Moment }) => {
  return (
    <S_CalendarTopBarWrapper>
      <S_Container>
        <div>
          {currentMonth.year()}년 {currentMonth.month()}월
        </div>
        <div>1팀ㅇㅇ</div>
      </S_Container>
    </S_CalendarTopBarWrapper>
  );
};
