import React, { Dispatch, SetStateAction } from "react";
import { Style } from "./ListDetail.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { AddGroupModal } from "components/modal/group/AddGroupModal";
import { CancelAddGroupModal } from "components/modal/group/CancelAddGroupModal";

interface IListDetailAdd {}
export const ListDetailAdd = ({}: IListDetailAdd) => {
  const { modal, confirmModal, setIsOpen, handleConfirmation, closeAllModals } =
    useBaseModal({
      children: [<AddGroupModal closeAllModals={() => closeAllModals()} />],
      confirmationSteps: [
        <CancelAddGroupModal
          onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
        />,
      ],
      closeCallBack: () => {},
      isBackgroundBlack: true,
      isCenter: true,
    });

  return (
    <>
      {modal}
      {confirmModal}
      <Style.Wrapper onClick={() => setIsOpen(true)}>
        <Style.LeftContainer>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#E5E5E5",
            }}
          ></div>
          <div>그룹 추가</div>
        </Style.LeftContainer>
        <Style.RightContainer>
          <img
            src="/icon/plus_icon.svg"
            alt="추가"
            style={{ width: "18px", height: "18px" }}
          />
        </Style.RightContainer>
      </Style.Wrapper>
    </>
  );
};
