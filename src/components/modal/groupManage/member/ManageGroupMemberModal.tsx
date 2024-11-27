import React from "react";
import { Style } from "./ManageGroupMemberModal.style";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

interface IManageGroupMemberModalProps {
  pos: { x: number; y: number };
  profile: IGroupMemberDto;
}

export const ManageGroupMemberModal = ({
  pos,
  profile,
}: IManageGroupMemberModalProps) => {
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

const _ModalMenu = [
  {
    id: 1,
    name: "관리자로 임명",
    role: ["MASTER"],
    onClick: () => {},
  },
  {
    id: 2,
    name: "내보내기",
    role: ["MASTER", "MANAGER"],
    onClick: () => {},
  },
];
