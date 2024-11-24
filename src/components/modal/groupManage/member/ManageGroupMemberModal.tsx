import React from "react";
import { Style } from "./ManageGroupMemberModal.style";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

interface IManageGroupMemberModalProps {
  pos: { x: number; y: number };
}

export const ManageGroupMemberModal = ({
  pos,
}: IManageGroupMemberModalProps) => {
  const member = useRecoilValue(memberState);

  return (
    <Style.Wrapper $x={pos.x} $y={pos.y}>
      {_ModalMenu.map((menu) => (
        <>
          {menu.role.includes(member.role) && (
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
    role: ["Master"],
    onClick: () => {},
  },
  {
    id: 2,
    name: "내보내기",
    role: ["Master", "Manager"],
    onClick: () => {},
  },
];
