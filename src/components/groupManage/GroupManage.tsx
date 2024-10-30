import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Style } from "./GroupManage.style";
import { useGetAllGroupMembers } from "hooks/api/group/useGetAllGroupMembers";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { PAGE_URI } from "constants/pageUri";
import { CategoryManage } from "./CategoryManage";
import { GroupMemberManage } from "./GroupMemberManage";

export const GroupManage = () => {
  const location = useLocation();
  const nav = useNavigate();
  const toast = useToastCustom();
  const state: IGroupCategoryDto = location.state;

  if (state === null) {
    toast("그룹을 다시 확인해주세요.", ToastType.ERROR);
    nav(PAGE_URI.GROUP);
  }

  const [isMemberSetting, setIsMemberSetting] = useState<boolean>(true);

  const { data } = useGetAllGroupMembers(state.group);

  return (
    <Style.Wrapper>
      {/* 상단 이미지 부분 */}
      <Style.TopContainer>
        <Style.ImgContainer>
          <img src={state.group.groupImg} alt="그룹 프로필" />
          <img src="/icon/modify_img_icon.svg" alt="수정" />
        </Style.ImgContainer>
      </Style.TopContainer>

      {/* 그룹 소개 */}
      <Style.GroupMainContainer>
        <Style.DetailContainer $backgroundColor="#f4f4f4">
          <div>
            <div>그룹명</div>
            <div>{state.group.groupName}</div>
          </div>
          <div>
            <div>그룹 코드</div>
            <div>{state.group.groupUuid}</div>
          </div>
        </Style.DetailContainer>
        <Style.DetailContainer>
          <div>
            <div>소개</div>
            <div>{state.group.groupName}</div>
          </div>
          <div></div>
        </Style.DetailContainer>
      </Style.GroupMainContainer>

      {/* 세팅 선택 */}
      <Style.ChooseSettingWrapper>
        <Style.SettingBtn
          onClick={() => setIsMemberSetting(true)}
          $isSelected={isMemberSetting}
        >
          그룹원
        </Style.SettingBtn>
        <Style.SettingBtn
          onClick={() => setIsMemberSetting(false)}
          $isSelected={!isMemberSetting}
        >
          카테고리
        </Style.SettingBtn>
      </Style.ChooseSettingWrapper>

      {/* 세팅 */}
      <Style.SettingWrapper>
        {/* 그룹원 세팅 */}
        {/* <Style.SettingTitle>그룹원 설정</Style.SettingTitle> */}
        {isMemberSetting && data && (
          <GroupMemberManage
            groupMemberCount={state.groupMemberCount}
            groupMemberList={data.groupMemberList}
          />
        )}

        {/* 카테고리 세팅 */}
        {!isMemberSetting && (
          <CategoryManage
            categoryList={state.categoryList}
            groupId={state.group.groupId}
          />
        )}
      </Style.SettingWrapper>
    </Style.Wrapper>
  );
};
