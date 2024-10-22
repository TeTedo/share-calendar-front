import React from "react";
import { CalendarTopBarWrapper, Container } from "./CalendarTopBar.style";
import { Moment } from "moment";

export const CalendarTopBar = ({ currentDate }: { currentDate: Moment }) => {
  return (
    <CalendarTopBarWrapper>
      <Container>
        <div>
          {currentDate.format("YYYY")}년 {currentDate.format("MM")}월
        </div>
        <div>1팀ㅇㅇ</div>
      </Container>
    </CalendarTopBarWrapper>
  );
};
