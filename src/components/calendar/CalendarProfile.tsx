import React from "react";
import { CalendarProfileWrapper } from "./CalendarProfile.style";

interface ICalendarProfileProps {
  groupMember: IGroupMemberDto | null;
}
export const CalendarProfile = ({ groupMember }: ICalendarProfileProps) => {
  return <CalendarProfileWrapper>CalendarProfile</CalendarProfileWrapper>;
};
