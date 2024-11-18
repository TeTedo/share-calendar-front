import React from "react";
import { Style } from "./SettingCom.style";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { CancelBaseModal } from "components/modal/CancelBaseModal";
import { PatchMyInfoModal } from "components/modal/setting/PatchMyInfoModal";

export const MyInfo = () => {
  const memberRecoilValue = useRecoilValue(memberState);

  const { modal, confirmModal, setIsOpen, handleConfirmation, closeAllModals } =
    useBaseModal({
      children: [
        <PatchMyInfoModal
          member={memberRecoilValue}
          closeAllModals={() => closeAllModals()}
        />,
      ],
      isBackgroundBlack: true,
      isCenter: true,
      confirmationSteps: [
        <CancelBaseModal
          mainText="내정보 수정을 취소하시겠습니까?"
          onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
        />,
      ],
    });
  return (
    <>
      {modal}
      {confirmModal}
      <div onClick={() => setIsOpen(true)}>
        <Style.MyInfoWrapper>
          <Style.MyInfoLeft>
            <img src={memberRecoilValue.profileImg} alt="profile" />
            <div>{memberRecoilValue.name}</div>
          </Style.MyInfoLeft>
          <Style.MyInfoRight>
            <img src="icon/setting_icon.svg" alt="setting" />
          </Style.MyInfoRight>
        </Style.MyInfoWrapper>
      </div>
    </>
  );
};
