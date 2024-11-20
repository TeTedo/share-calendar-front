import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  CalendarTopBarWrapper,
  Container,
  MonthSelect,
} from "./CalendarTopBar.style";
import { Moment } from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";
import { scheduleState } from "state/recoil/scheduleState";

interface CalendarTopBarProps {
  currentDate: Moment;
  setCurrentGroup: Dispatch<SetStateAction<IGroupDto | null>>;
  setCurrentDate: Dispatch<SetStateAction<Moment>>;
  currentGroup: IGroupDto | null;
  setScheduleList: Dispatch<SetStateAction<IScheduleDto[]>>;
}
export const CalendarTopBar = ({
  currentDate,
  currentGroup,
  setCurrentGroup,
  setCurrentDate,
  setScheduleList,
}: CalendarTopBarProps) => {
  const groupCategoryList = useRecoilValue(groupCategoryState);
  const scheduleList = useRecoilValue(scheduleState);

  const changeGroupHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "0") {
      setCurrentGroup(null);
      setScheduleList(scheduleList);
      return;
    }

    const selectGroup = groupCategoryList.find(
      (groupCategory) =>
        groupCategory.group.groupId.toString() === event.target.value
    )!;

    setCurrentGroup(selectGroup.group);

    const newScheduleList = scheduleList.filter(
      (schedule) => schedule.group.groupId.toString() === event.target.value
    );

    setScheduleList(newScheduleList);
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const prevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };
  return (
    <CalendarTopBarWrapper>
      <Container>
        <MonthSelect>
          <div onClick={() => prevMonth()}> {"<"}</div>
          <div>
            {currentDate.format("YYYY")}년 {currentDate.format("MM")}월
          </div>
          <div onClick={() => nextMonth()}>{">"}</div>
        </MonthSelect>
        <select
          onChange={(e) => changeGroupHandler(e)}
          value={currentGroup?.groupId}
        >
          <option value={"0"}>{"전체"}</option>
          {groupCategoryList.map((groupCategory) => (
            <option
              key={groupCategory.group.groupId}
              value={groupCategory.group.groupId}
            >
              {groupCategory.group.groupName}
            </option>
          ))}
        </select>
      </Container>
    </CalendarTopBarWrapper>
  );
};
