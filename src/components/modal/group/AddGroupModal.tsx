import React from "react";
import { Style } from "./AddGroupModal.style";

export const AddGroupModal = () => {
  return (
    <Style.Wrapper>
      <div>
        <div>그룹 대표 이미지</div>
        <input type="file" />
      </div>
      <div>
        <div>그룹 이름</div>
        <input type="text" />
      </div>
      <div>생성</div>
    </Style.Wrapper>
  );
};
