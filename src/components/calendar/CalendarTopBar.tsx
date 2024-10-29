import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CalendarTopBarWrapper, Container } from "./CalendarTopBar.style";
import { Moment } from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

interface CalendarTopBarProps {
  currentDate: Moment;
  setCurrentGroup: Dispatch<SetStateAction<IGroupDto | null>>;
}
export const CalendarTopBar = ({
  currentDate,
  setCurrentGroup,
}: CalendarTopBarProps) => {
  const groupCategoryList = useRecoilValue(groupCategoryState);

  const changeGroupHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectGroup = groupCategoryList.find(
      (groupCategory) =>
        groupCategory.group.groupId.toString() === event.target.value
    )!;

    setCurrentGroup(selectGroup.group);
  };
  return (
    <CalendarTopBarWrapper>
      <Container>
        <div>
          {currentDate.format("YYYY")}년 {currentDate.format("MM")}월
        </div>
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
