import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { CalendarTopBarWrapper, Container } from "./CalendarTopBar.style";
import { Moment } from "moment";

interface CalendarTopBarProps {
  currentDate: Moment;
  groupList: IGroupListDto;
  setCurrentGroup: Dispatch<SetStateAction<IGroupDto | null>>;
}
export const CalendarTopBar = ({
  currentDate,
  groupList,
  setCurrentGroup,
}: CalendarTopBarProps) => {
  const changeGroupHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectGroup = groupList.groupList.find(
      (group) => group.groupId.toString() === event.target.value
    )!;

    setCurrentGroup(selectGroup);
  };
  return (
    <CalendarTopBarWrapper>
      <Container>
        <div>
          {currentDate.format("YYYY")}년 {currentDate.format("MM")}월
        </div>
        <select onChange={(e) => changeGroupHandler(e)}>
          {groupList.groupList.map((group) => (
            <option key={group.groupId} value={group.groupId}>
              {group.groupName}
            </option>
          ))}
        </select>
      </Container>
    </CalendarTopBarWrapper>
  );
};
