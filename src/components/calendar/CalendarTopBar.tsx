import React from "react";
import { S_CalendarTopBarWrapper, S_Container } from "./CalendarTopBar.style";
import { Moment } from "moment";

export const CalendarTopBar = ({ currentDate }: { currentDate: Moment }) => {
  return (
    <S_CalendarTopBarWrapper>
      <S_Container>
        <div>
          {currentDate.format("YY")}년 {currentDate.format("MM")}월
        </div>
        <div>1팀ㅇㅇ</div>
      </S_Container>
    </S_CalendarTopBarWrapper>
  );
};
