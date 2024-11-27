import React from "react";
import { Style } from "../GroupManage.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { AddGroupMemberModal } from "components/modal/groupManage/member/AddGroupMemberModal";
import { GroupMemberDetail } from "./GroupMemberDetail";
import { useGetGroupMember } from "hooks/api/group/useGetGroupMember";

interface IGroupMemberManageProps {
  groupMemberList: IGroupMemberDto[];
  groupData: IGroupCategoryDto;
}
export const GroupMemberManage = ({
  groupMemberList,
  groupData,
}: IGroupMemberManageProps) => {
  const { data: groupProfile } = useGetGroupMember(groupData.group);

  const { modal: addGroupMemberModal, setIsOpen: openGroupMemberModal } =
    useBaseModal({
      children: [
        <AddGroupMemberModal
          group={groupData.group}
          setIsOpen={(isOpen: boolean) => openGroupMemberModal(isOpen)}
        />,
      ],
      closeCallBack: () => {},
      isBackgroundBlack: true,
      isCenter: true,
    });

  return (
    <>
      {addGroupMemberModal}
      <Style.GroupSetting>
        <Style.DetailContainer>
          <div>
            <div>그룹원({groupData.groupMemberCount}명)</div>
            <div></div>
          </div>
          <div></div>
        </Style.DetailContainer>

        {/* 그룹원 멤버 리스트 */}
        {groupProfile &&
          groupMemberList.map((groupMember, idx) => (
            <GroupMemberDetail
              key={idx}
              groupMember={groupMember}
              profile={groupProfile.groupMember}
              group={groupData.group}
            />
          ))}

        {/* 그룹원 추가 */}
        {groupData.group.groupType !== "DEFAULT" && (
          <Style.GroupSettingDetail onClick={() => openGroupMemberModal(true)}>
            <Style.GroupLeft>
              <img src="/icon/empty_profile_icon.svg" alt="프로필" />
              <div>
                멤버 추가
                <img
                  src="/icon/group_plus_icon.svg"
                  alt=""
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </Style.GroupLeft>
            <Style.GroupRight></Style.GroupRight>
          </Style.GroupSettingDetail>
        )}
      </Style.GroupSetting>
    </>
  );
};
