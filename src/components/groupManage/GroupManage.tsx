import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Style } from "./GroupManage.style";
import { useGetAllGroupMembers } from "hooks/api/group/useGetAllGroupMembers";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { PAGE_URI } from "constants/pageUri";
import { CategoryManage } from "./manageDetail/CategoryManage";
import { GroupMemberManage } from "./manageDetail/GroupMemberManage";
import { groupCategoryState } from "state/recoil/groupCategoryState";
import { useRecoilValue } from "recoil";
import { ApplyManage } from "./manageDetail/ApplyManage";
import { GroupImg } from "./groupImg/GroupImg";
import { GroupIntroduce } from "./groupIntroduce/GroupIntroduce";

export const GroupManage = () => {
  const location = useLocation();
  const nav = useNavigate();
  const toast = useToastCustom();
  const initialState: IGroupCategoryDto = location.state;

  if (initialState === null) {
    toast("그룹을 다시 확인해주세요.", ToastType.ERROR);
    nav(PAGE_URI.GROUP);
  }

  const [groupData, setGroupData] = useState<IGroupCategoryDto>(initialState);
  const { data } = useGetAllGroupMembers(groupData.group);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const recoilGroupData = useRecoilValue(groupCategoryState);

  useEffect(() => {
    const updatedGroupData = recoilGroupData.find(
      (group) => group.group.groupId === groupData.group.groupId
    );
    if (updatedGroupData) {
      setGroupData(updatedGroupData);
    }
  }, [recoilGroupData, groupData]);

  return (
    <>
      <Style.Wrapper>
        {/* 상단 이미지 부분 */}
        <GroupImg group={groupData.group} setGroupData={setGroupData} />

        {/* 그룹 소개 */}
        <GroupIntroduce group={groupData.group} />

        {/* 세팅 선택 */}
        <Style.ChooseSettingWrapper>
          {["그룹원", "카테고리", "가입 신청"].map((name, i) => (
            <Style.SettingBtn
              onClick={() => setSelectedCategory(i)}
              $isSelected={selectedCategory === i}
              key={i}
            >
              {name}
            </Style.SettingBtn>
          ))}
        </Style.ChooseSettingWrapper>

        <Style.SettingWrapper>
          {/* 그룹원 세팅 */}
          {selectedCategory === 0 && data && (
            <GroupMemberManage
              groupData={groupData}
              groupMemberList={data.groupMemberList}
            />
          )}

          {/* 카테고리 세팅 */}
          {selectedCategory === 1 && (
            <CategoryManage
              categoryList={groupData.categoryList}
              groupId={groupData.group.groupId}
            />
          )}

          {/* 그룹 가입 신청 관리*/}
          {selectedCategory === 2 && (
            <ApplyManage groupUuid={groupData.group.groupUuid} />
          )}
        </Style.SettingWrapper>
      </Style.Wrapper>
    </>
  );
};
