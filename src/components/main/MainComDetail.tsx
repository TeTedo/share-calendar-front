import React, { useState } from "react";
import { Style } from "./Main.style";

interface IMainDetailProps {
  groupingList: IGroupingScheduleDetail;
}
export const MainComDetail = ({ groupingList }: IMainDetailProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Style.DetailWrapper>
      <Style.TopWrapper onClick={() => setIsOpen(!isOpen)}>
        <Style.TopLeft>
          <img src={groupingList.groupImg} alt="groupImg" />
          <div>{groupingList.groupName}</div>
        </Style.TopLeft>
        <Style.TopRight>
          {isOpen ? (
            <img src="/icon/top_arrow_icon.svg" alt="arrow" />
          ) : (
            <img src="/icon/bottom_arrow_icon.svg" alt="arrow" />
          )}
        </Style.TopRight>
      </Style.TopWrapper>
      {isOpen &&
        Object.keys(groupingList.schedules).map((date) => (
          <Style.DetailBox key={date}>
            <Style.DetailBoxTop></Style.DetailBoxTop>
            {groupingList.schedules[date].map((schedule) => (
              <Style.ScheduleWrapper key={schedule.scheduleId}>
                <Style.ScheduleDetail
                  $backgroundColor={schedule.category.categoryMainColor}
                >
                  {schedule.scheduleName}
                </Style.ScheduleDetail>
              </Style.ScheduleWrapper>
            ))}
          </Style.DetailBox>
        ))}
    </Style.DetailWrapper>
  );
};
