import React from "react";
import { CalendarProfileWrapper, Style } from "./CalendarProfile.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { EditGroupMemberModal } from "components/modal/calendar/EditGroupMemberModal";

interface ICalendarProfileProps {
  groupMember: IGroupMemberDto | null;
}
export const CalendarProfile = ({ groupMember }: ICalendarProfileProps) => {
  const { modal, setIsOpen } = useBaseModal({
    children: [<EditGroupMemberModal />],
    closeCallBack: () => {},
    isBackgroundBlack: true,
    isCenter: true,
  });

  return (
    <>
      {modal}
      <CalendarProfileWrapper>
        <Style.LeftContainer>
          <img src={groupMember?.groupProfileImg} alt="프로필 이미지" />
          <div>{groupMember?.groupNickname}</div>
        </Style.LeftContainer>
        <Style.RightContainer onClick={() => setIsOpen(true)}>
          <img src="/icon/setting_icon.svg" alt="그룹 세팅" />
        </Style.RightContainer>
      </CalendarProfileWrapper>
    </>
  );
};
