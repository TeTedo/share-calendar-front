import React from "react";
import { Style } from "./EditGroupMemberModal.style";

export const EditGroupMemberModal = () => {
  return (
    <Style.Wrapper>
      <Style.Top>그룹 프로필 수정하기</Style.Top>
      <Style.Body>
        <Style.ImgContainer></Style.ImgContainer>
        <Style.NameContainer></Style.NameContainer>
      </Style.Body>
    </Style.Wrapper>
  );
};
