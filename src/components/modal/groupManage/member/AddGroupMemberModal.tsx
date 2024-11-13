import React from "react";
import { Style } from "./AddGroupMemberModal.style";
import { useCopyCustom } from "hooks/useCopyCustom";

interface IGroupMemberModalProps {
  group: IGroupDto;
  setIsOpen: (isOpen: boolean) => void;
}

export const AddGroupMemberModal = ({
  group,
  setIsOpen,
}: IGroupMemberModalProps) => {
  const copy = useCopyCustom();

  const groupUuid = encodeURI(group.groupUuid);
  const groupName = encodeURI(group.groupName);
  const inviteUrl = `${process.env.REACT_APP_INVITE_URL}/${groupUuid}/${groupName}`;

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Title>링크를 보내 초대하기</Style.Title>
        <Style.LinkContainer>
          <Style.LinkRow>{inviteUrl}</Style.LinkRow>
          <Style.LinkBtn
            onClick={() => {
              copy(inviteUrl, "친구 초대 준비 완료!");
              setIsOpen(false);
            }}
          >
            복사하기
          </Style.LinkBtn>
        </Style.LinkContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};
