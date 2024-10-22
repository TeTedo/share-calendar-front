import React from "react";
import {
  CalendarModalContainer,
  CalendarModalWrapper,
  ScheduleList,
} from "./CalendarModal.style";

export const CalendarModal = ({
  date,
  scheduleList,
}: {
  date: moment.Moment;
  scheduleList: IScheduleDetail[];
}) => {
  return (
    <CalendarModalWrapper>
      <CalendarModalContainer.Wrapper>
        <CalendarModalContainer.Header>
          {date.format("YYYY년 MM월 DD일")}
        </CalendarModalContainer.Header>
        <CalendarModalContainer.Body>
          <ScheduleList.Wrapper>
            {scheduleList.map((schedule) => (
              <ScheduleList.Container>
                {schedule.scheduleName}
              </ScheduleList.Container>
            ))}
          </ScheduleList.Wrapper>
        </CalendarModalContainer.Body>
      </CalendarModalContainer.Wrapper>
    </CalendarModalWrapper>
  );
};
