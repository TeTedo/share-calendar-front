import React from "react";
import { Style } from "./AddGroupMemberModal.style";
import { useCopyCustom } from "hooks/useCopyCustom";

interface IGroupMemberModalProps {
  groupCode: string;
}

export const AddGroupMemberModal = ({ groupCode }: IGroupMemberModalProps) => {
  const copy = useCopyCustom();

  const inviteUrl = `${process.env.REACT_APP_INVITE_URL}/${groupCode}`;

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Title>링크를 보내 초대하기</Style.Title>
        <Style.LinkContainer>
          <Style.LinkRow>{inviteUrl}</Style.LinkRow>
          <Style.LinkBtn
            onClick={() => copy(inviteUrl, "친구 초대 준비 완료!")}
          >
            복사하기
          </Style.LinkBtn>
        </Style.LinkContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};
