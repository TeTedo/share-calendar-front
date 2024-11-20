import React, { Dispatch, SetStateAction } from "react";
import { CalendarProfileWrapper, Style } from "./CalendarProfile.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { EditGroupMemberModal } from "components/modal/calendar/EditGroupMemberModal";
import { CancelBaseModal } from "components/modal/CancelBaseModal";

interface ICalendarProfileProps {
  groupMember: IGroupMemberDto | null;
  currentGroup: IGroupDto | null;
  setGroupMember: Dispatch<SetStateAction<IGroupMemberDto | null>>;
}
export const CalendarProfile = ({
  groupMember,
  currentGroup,
  setGroupMember,
}: ICalendarProfileProps) => {
  const { modal, confirmModal, setIsOpen, handleConfirmation, closeAllModals } =
    useBaseModal({
      children: [
        <EditGroupMemberModal
          groupMember={groupMember!}
          currentGroup={currentGroup!}
          setGroupMember={setGroupMember}
          closeAllModals={() => closeAllModals()}
        />,
      ],
      closeCallBack: () => {},
      isBackgroundBlack: true,
      isCenter: true,
      confirmationSteps: [
        <CancelBaseModal
          mainText="그룹 프로필 수정을 취소하시겠습니까?"
          onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
        />,
      ],
    });

  return (
    <>
      {modal}
      {confirmModal}
      <CalendarProfileWrapper>
        <Style.LeftContainer>
          <img src={groupMember?.groupProfileImg} alt="프로필 이미지" />
          <div>{groupMember?.groupNickname}</div>
        </Style.LeftContainer>
        {groupMember?.groupRole !== "default" && (
          <Style.RightContainer onClick={() => setIsOpen(true)}>
            <img src="/icon/setting_icon.svg" alt="그룹 세팅" />
          </Style.RightContainer>
        )}
      </CalendarProfileWrapper>
    </>
  );
};
