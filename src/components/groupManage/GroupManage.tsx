import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Style } from "./GroupManage.style";
import { useGetAllGroupMembers } from "hooks/api/group/useGetAllGroupMembers";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { PAGE_URI } from "constants/pageUri";
import { CategoryManage } from "./CategoryManage";
import { GroupMemberManage } from "./GroupMemberManage";
import { groupCategoryState } from "state/recoil/groupCategoryState";
import { useRecoilValue } from "recoil";

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
    <Style.Wrapper>
      {/* 상단 이미지 부분 */}
      <Style.TopContainer>
        <Style.ImgContainer>
          <img src={groupData.group.groupImg} alt="그룹 프로필" />
          <img src="/icon/modify_img_icon.svg" alt="수정" />
        </Style.ImgContainer>
      </Style.TopContainer>

      {/* 그룹 소개 */}
      <Style.GroupMainContainer>
        <Style.DetailContainer $backgroundColor="#f4f4f4">
          <div>
            <div>그룹명</div>
            <div>{groupData.group.groupName}</div>
          </div>
          <div>
            <div>그룹 코드</div>
            <div>{groupData.group.groupUuid}</div>
          </div>
        </Style.DetailContainer>
        <Style.DetailContainer>
          <div>
            <div>소개</div>
            <div>{groupData.group.groupName}</div>
          </div>
          <div></div>
        </Style.DetailContainer>
      </Style.GroupMainContainer>

      {/* 세팅 선택 */}
      <Style.ChooseSettingWrapper>
        <Style.SettingBtn
          onClick={() => setSelectedCategory(0)}
          $isSelected={selectedCategory === 0}
        >
          그룹원
        </Style.SettingBtn>
        <Style.SettingBtn
          onClick={() => setSelectedCategory(1)}
          $isSelected={selectedCategory === 1}
        >
          카테고리
        </Style.SettingBtn>
        <Style.SettingBtn
          onClick={() => setSelectedCategory(2)}
          $isSelected={selectedCategory === 2}
        >
          가입 신청
        </Style.SettingBtn>
      </Style.ChooseSettingWrapper>

      {/* 세팅 */}
      <Style.SettingWrapper>
        {/* 그룹원 세팅 */}
        {/* <Style.SettingTitle>그룹원 설정</Style.SettingTitle> */}
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
          <CategoryManage
            categoryList={groupData.categoryList}
            groupId={groupData.group.groupId}
          />
        )}
      </Style.SettingWrapper>
    </Style.Wrapper>
  );
};
