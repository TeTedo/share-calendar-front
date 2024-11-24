import React, { useState } from "react";
import { Style } from "../GroupManage.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { ManageGroupMemberModal } from "components/modal/groupManage/member/ManageGroupMemberModal";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

interface IGroupMemberDetailProps {
  groupMember: IGroupMemberDto;
}

interface IPos {
  x: number;
  y: number;
}
export const GroupMemberDetail = ({ groupMember }: IGroupMemberDetailProps) => {
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });
  const member = useRecoilValue(memberState);

  const { modal: manageMemberModal, setIsOpen: openManageMemberModal } =
    useBaseModal({
      children: [<ManageGroupMemberModal pos={pos} />],
      closeCallBack: () => {},
      isBackgroundBlack: false,
      isCenter: false,
    });

  const openMangeModalHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    setPos({ x, y });

    openManageMemberModal(true);
  };

  return (
    <>
      {manageMemberModal}
      <Style.GroupSettingDetail>
        <Style.GroupLeft>
          <img src={groupMember.groupProfileImg} alt="프로필" />
          <div>{groupMember.groupNickname}</div>
        </Style.GroupLeft>
        {member.role !== "GUEST" && (
          <Style.GroupRight onClick={openMangeModalHandler}>
            <img src="/icon/detail_setting_icon.svg" alt="설정" />
          </Style.GroupRight>
        )}
      </Style.GroupSettingDetail>
    </>
  );
};
