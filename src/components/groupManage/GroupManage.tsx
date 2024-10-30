import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Style } from "./GroupManage.style";
import { useGetAllGroupMembers } from "hooks/api/group/useGetAllGroupMembers";

export const GroupManage = () => {
  const location = useLocation();
  const state: IGroupCategoryDto = location.state;

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
          그룹원 설정
        </Style.SettingBtn>
        <Style.SettingBtn
          onClick={() => setIsMemberSetting(false)}
          $isSelected={!isMemberSetting}
        >
          카테고리 설정
        </Style.SettingBtn>
      </Style.ChooseSettingWrapper>

      {/* 세팅 */}
      <Style.SettingWrapper>
        {/* 그룹원 세팅 */}
        {/* <Style.SettingTitle>그룹원 설정</Style.SettingTitle> */}
        {isMemberSetting && (
          <Style.GroupSetting>
            <Style.DetailContainer>
              <div>
                <div>그룹원({state.groupMemberCount}명)</div>
                <div></div>
              </div>
              <div></div>
            </Style.DetailContainer>

            {data?.groupMemberList.map((groupMember) => (
              <Style.GroupSettingDetail>
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
        )}

        {/* 카테고리 세팅 */}
        {/* <Style.SettingTitle>카테고리 설정</Style.SettingTitle> */}
        {!isMemberSetting && (
          <Style.CategorySetting>
            {state.categoryList.map((category) => (
              <Style.CategorySettingDetail>
                <Style.CategoryLeft $mainColor={category.categoryMainColor}>
                  <div></div>
                  <div>{category.categoryName}</div>
                </Style.CategoryLeft>
                <Style.CategoryRight>
                  <img src="/icon/detail_setting_icon.svg" alt="설정" />
                </Style.CategoryRight>
              </Style.CategorySettingDetail>
            ))}

            {/* 카테고리 추가 */}
            <Style.CategorySettingDetail>
              <Style.CategoryLeft>
                <div></div>
                <div>
                  카테고리 추가{" "}
                  <img
                    src="/icon/group_plus_icon.svg"
                    alt=""
                    style={{ width: "12px", height: "12px" }}
                  />
                </div>
              </Style.CategoryLeft>
              <Style.CategoryRight></Style.CategoryRight>
            </Style.CategorySettingDetail>
          </Style.CategorySetting>
        )}
      </Style.SettingWrapper>
    </Style.Wrapper>
  );
};
