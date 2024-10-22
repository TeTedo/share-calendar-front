import React, { useState } from "react";
import { CalendarDetailCom, ScheduleList } from "./CalendarDetail.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { CalendarModal } from "components/modal/calendar/CalendarModal";

interface CalendarDetailProp {
  date: moment.Moment;
  color: string; // #aaaaaa  형식으로 # 포함한 6 hex
  backgroundColor: string; // #aaaaaa  형식으로 # 포함한 6 hex
  fontSize: string; // 10rem 형식으로 rem 포함한 string
  scheduleList: IScheduleDetail[]; // TODO 안에 들어갈 목록 타입 정해지면 타입 교체
}

export const CalendarDetail = (props: CalendarDetailProp) => {
  const { modal, setIsOpen } = useBaseModal({
    children: (
      <CalendarModal date={props.date} scheduleList={props.scheduleList} />
    ),
    closeCallBack: () => {},
    isBackgroundBlack: true,
    isCenter: true,
  });

  return (
    <>
      {modal}
      <CalendarDetailCom.Wrapper
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <CalendarDetailCom.NumberWrapper $color={props.color}>
          {props.date.date()}
        </CalendarDetailCom.NumberWrapper>
        <ScheduleList.Wrapper>
          {props.scheduleList.map((schedule) => (
            <ScheduleList.Container
              $mainColor={schedule.category.categoryMainColor}
              $subColor={schedule.category.categorySubColor}
            >
              <div></div>
              <div>{schedule.scheduleName}</div>
            </ScheduleList.Container>
          ))}
        </ScheduleList.Wrapper>
      </CalendarDetailCom.Wrapper>
    </>
  );
};
