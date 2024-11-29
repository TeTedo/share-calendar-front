import React from "react";
import {
  ButtonCancel,
  ButtonConfirm,
  ButtonGroup,
  ModalWrapper,
  Question,
} from "./KickGroupMemberModal.style";
import { useDeleteGroupMember } from "hooks/api/group/useDeleteGroupMember";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useQueryClient } from "@tanstack/react-query";

interface IKickGroupMemberModalProps {
  closeAllModals: () => void;
  groupMember: IGroupMemberDto;
  group: IGroupDto;
}
export const KickGroupMemberModal = ({
  closeAllModals,
  groupMember,
  group,
}: IKickGroupMemberModalProps) => {
  const toast = useToastCustom();
  const { mutate } = useDeleteGroupMember({
    groupId: group.groupId,
    groupMemberId: groupMember.groupMemberId,
  });

  const queryClient = useQueryClient();

  const deleteMemberHandler = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          toast(
            `${groupMember.groupNickname}님을 내보냈습니다`,
            ToastType.SUCCESS
          );
          queryClient.invalidateQueries({
            queryKey: [["/group-members/" + group.groupId]],
          });
          closeAllModals();
        },
        onError: (e) => {
          console.log(e);
          toast("내보내기 실패! 다시 시도해주세요.", ToastType.ERROR);
        },
      }
    );
  };

  return (
    <ModalWrapper>
      <Question>{groupMember.groupNickname}님을 내보내시겠습니까?</Question>
      <ButtonGroup>
        <ButtonConfirm onClick={deleteMemberHandler}>확인</ButtonConfirm>
        <ButtonCancel onClick={closeAllModals}>취소</ButtonCancel>
      </ButtonGroup>
    </ModalWrapper>
  );
};
