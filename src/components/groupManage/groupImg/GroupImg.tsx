import React, { Dispatch, SetStateAction } from "react";
import { Style } from "../GroupManage.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { CancelBaseModal } from "components/modal/CancelBaseModal";
import { GroupImgChangeModal } from "components/modal/groupManage/groupImg/GroupImgChangeModal";

interface IGroupImgProps {
  group: IGroupDto;
  setGroupData: Dispatch<SetStateAction<IGroupCategoryDto>>;
}

export const GroupImg = ({ group, setGroupData }: IGroupImgProps) => {
  const { handleConfirmation, modal, setIsOpen, confirmModal, closeAllModals } =
    useBaseModal({
      children: [
        <GroupImgChangeModal
          groupUuid={group.groupUuid}
          closeAllModals={() => closeAllModals()}
        />,
      ],
      isBackgroundBlack: true,
      isCenter: true,
      confirmationSteps: [
        <CancelBaseModal
          mainText="그룹 이미지 수정을 취소하시겠습니까?"
          onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
        />,
      ],
    });

  return (
    <>
      {modal}
      {confirmModal}
      <Style.TopContainer>
        <Style.ImgContainer onClick={() => setIsOpen(true)}>
          <img src={group.groupImg} alt="그룹 프로필" />
          <img src="/icon/modify_img_icon.svg" alt="수정" />
        </Style.ImgContainer>
      </Style.TopContainer>
    </>
  );
};
