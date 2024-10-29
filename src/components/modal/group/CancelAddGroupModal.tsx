import React from "react";
import { Style } from "./CancelAddGroupModal.style";

export const CancelAddGroupModal = ({
  onConfirm,
}: {
  onConfirm: (confirm: boolean) => void;
}) => {
  return (
    <Style.Wrapper>
      <div>그룹 생성을 취소하시겠습니까?</div>
      <button onClick={() => onConfirm(true)}>취소</button>
      <button onClick={() => onConfirm(false)}>계속 작성하기</button>
    </Style.Wrapper>
  );
};
