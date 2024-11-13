import React from "react";
import { Style } from "./InviteGroupModal.style";
import { useApplyGroup } from "hooks/api/apply/useApplyGroup";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";

interface IInviteGroupModalProps {
  groupCode: string;
  groupName: string;
  setIsOpen: (isOpen: boolean) => void;
}
export const InviteGroupModal = ({
  groupCode,
  groupName,
  setIsOpen,
}: IInviteGroupModalProps) => {
  const { mutate } = useApplyGroup(groupCode);

  const toast = useToastCustom();

  const applyGroupHandler = () => {
    mutate(
      {},
      {
        onSuccess: (response) => {
          toast(response.msg, ToastType.SUCCESS);
          sessionStorage.removeItem("groupCode");
          sessionStorage.removeItem("groupName");
          setIsOpen(false);
        },
        onError: () => {
          toast("다시 시도해주세요.", ToastType.ERROR);
        },
      }
    );
  };
  return (
    <Style.Wrapper>
      <Style.Title>
        <div>{groupName} 그룹에 초대되었습니다.</div>
        <div>그룹 코드 : {groupCode}</div>
        <div>그룹의 이름과 코드를 확인해주세요.</div>
      </Style.Title>

      <Style.BtnContainer>
        <div onClick={() => applyGroupHandler()}>가입 신청</div>
        <div onClick={() => setIsOpen(false)}>나중에</div>
      </Style.BtnContainer>
    </Style.Wrapper>
  );
};
