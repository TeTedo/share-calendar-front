import React from "react";
import { CalendarProfileWrapper, Style } from "./CalendarProfile.style";

interface ICalendarProfileProps {
  groupMember: IGroupMemberDto | null;
  groupMemberCount: number;
}
export const CalendarProfile = ({
  groupMember,
  groupMemberCount,
}: ICalendarProfileProps) => {
  return (
    <CalendarProfileWrapper>
      <Style.LeftContainer>
        <img src={groupMember?.groupProfileImg} alt="프로필 이미지" />
        <div>{groupMember?.groupNickname}</div>
      </Style.LeftContainer>
      <Style.RightContainer>
        <div>카테고리 목록</div>
        <Style.GroupCountContainer>
          <img src="/icon/person_icon.svg" alt="그룹 카운트" />
          <div>{groupMemberCount}</div>
        </Style.GroupCountContainer>
      </Style.RightContainer>
    </CalendarProfileWrapper>
  );
};
