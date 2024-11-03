import React from "react";
import { Style } from "./GroupManage.style";

interface IGroupMemberManageProps {
  groupMemberCount: number;
  groupMemberList: IGroupMemberDto[];
}
export const GroupMemberManage = ({
  groupMemberCount,
  groupMemberList,
}: IGroupMemberManageProps) => {
  return (
    <Style.GroupSetting>
      <Style.DetailContainer>
        <div>
          <div>그룹원({groupMemberCount}명)</div>
          <div></div>
        </div>
        <div></div>
      </Style.DetailContainer>

      {groupMemberList.map((groupMember, idx) => (
        <Style.GroupSettingDetail key={idx}>
          <Style.GroupLeft>
            <img src={groupMember.groupProfileImg} alt="프로필" />
            <div>{groupMember.groupNickname}</div>
          </Style.GroupLeft>
          <Style.GroupRight>
            <img src="/icon/detail_setting_icon.svg" alt="설정" />
          </Style.GroupRight>
        </Style.GroupSettingDetail>
      ))}

      {/* 그룹원 추가 */}
      <Style.GroupSettingDetail>
        <Style.GroupLeft>
          <img src="/icon/empty_profile_icon.svg" alt="프로필" />
          <div>
            멤버 추가{" "}
            <img
              src="/icon/group_plus_icon.svg"
              alt=""
              style={{ width: "12px", height: "12px" }}
            />
          </div>
        </Style.GroupLeft>
        <Style.GroupRight></Style.GroupRight>
      </Style.GroupSettingDetail>
    </Style.GroupSetting>
  );
};
