import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  CalendarTopBarWrapper,
  Container,
  MonthSelect,
} from "./CalendarTopBar.style";
import { Moment } from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

interface CalendarTopBarProps {
  currentDate: Moment;
  setCurrentGroup: Dispatch<SetStateAction<IGroupDto | null>>;
  setCurrentDate: Dispatch<SetStateAction<Moment>>;
}
export const CalendarTopBar = ({
  currentDate,
  setCurrentGroup,
  setCurrentDate,
}: CalendarTopBarProps) => {
  const groupCategoryList = useRecoilValue(groupCategoryState);

  const changeGroupHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectGroup = groupCategoryList.find(
      (groupCategory) =>
        groupCategory.group.groupId.toString() === event.target.value
    )!;

    setCurrentGroup(selectGroup.group);
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
        <select onChange={(e) => changeGroupHandler(e)}>
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
