import React from "react";
import { CalendarDetailWrapper } from "./CalendarDetail.style";

interface CalendarDetailProp {
  day: number;
  color: string; // #aaaaaa  형식으로 # 포함한 6 hex
  backgroundColor: string; // #aaaaaa  형식으로 # 포함한 6 hex
  fontSize: string; // 10rem 형식으로 rem 포함한 string
  list: any[]; // TODO 안에 들어갈 목록 타입 정해지면 타입 교체
}

export const CalendarDetail = (props: CalendarDetailProp) => {
  return <CalendarDetailWrapper>{props.day}</CalendarDetailWrapper>;
};
