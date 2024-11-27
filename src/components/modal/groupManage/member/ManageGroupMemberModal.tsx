import React from "react";
import { Style } from "./ManageGroupMemberModal.style";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";
import { usePatchGroupMemberRole } from "hooks/api/group/usePatchGroupMemberRole";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";

interface IManageGroupMemberModalProps {
  pos: { x: number; y: number };
  profile: IGroupMemberDto;
  groupMember: IGroupMemberDto;
  group: IGroupDto;
  closeAllModals: () => void;
}

export const ManageGroupMemberModal = ({
  pos,
  profile,
  groupMember,
  group,
  closeAllModals,
}: IManageGroupMemberModalProps) => {
  const toast = useToastCustom();

  const { mutate: patchGroupMemberRole } = usePatchGroupMemberRole({
    groupMemberId: groupMember.groupMemberId,
    groupId: group.groupId,
  });

  const _ModalMenu = [
    {
      id: 1,
      name: "관리자로 임명",
      role: ["MASTER"],
      onClick: () => {
        patchGroupMemberRole(
          {},
          {
            onSuccess: () => {
              toast("관리자로 임명 성공!!", ToastType.SUCCESS);
              closeAllModals();
            },
            onError: () => {
              toast("요청 실패! 다시 시도해주세요.", ToastType.ERROR);
            },
          }
        );
      },
    },
    {
      id: 2,
      name: "내보내기",
      role: ["MASTER", "MANAGER"],
      onClick: () => {},
    },
  ];

  return (
    <Style.Wrapper $x={pos.x} $y={pos.y}>
      {_ModalMenu.map((menu) => (
        <>
          {menu.role.includes(profile.groupRole) && (
            <Style.MenuWrapper onClick={menu.onClick}>
              {menu.name}
            </Style.MenuWrapper>
          )}
        </>
      ))}
    </Style.Wrapper>
  );
};
