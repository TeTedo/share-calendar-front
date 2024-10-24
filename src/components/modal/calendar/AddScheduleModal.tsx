import React from "react";
import { Style } from "./AddScheduleModal.style";

export const AddScheduleModal = ({
  closeAllModals,
  movePrevStep,
}: {
  closeAllModals: () => void;
  movePrevStep: () => void;
}) => {
  const verifyAddable: () => boolean = () => {
    return true;
  };

  const addScheduleHandler = () => {
    closeAllModals();
  };
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Header>새로운 일정 추가</Style.Header>
        <Style.Body>
          <Style.BodyTitle>그룹 이름</Style.BodyTitle>
          <Style.BtnWrapper>
            <Style.NextBtn onClick={() => movePrevStep()}>이전</Style.NextBtn>
            <Style.NextBtn
              $isSelected={verifyAddable()}
              onClick={() => addScheduleHandler()}
            >
              생성
            </Style.NextBtn>
          </Style.BtnWrapper>
        </Style.Body>
      </Style.Container>
    </Style.Wrapper>
  );
};
