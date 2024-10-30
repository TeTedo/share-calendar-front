import React from "react";
import { Style } from "./GroupListDetail.style";
import { useNavigate } from "react-router-dom";
import { PAGE_URI } from "constants/pageUri";

interface IGroupListDetailProps {
  groupCategory: IGroupCategoryDto;
}

export const GroupListDetail = ({ groupCategory }: IGroupListDetailProps) => {
  const nav = useNavigate();

  const navGroupManageHandler = () => {
    nav(PAGE_URI.GROUP_MANAGE, { state: groupCategory });
  };

  return (
    <Style.Wrapper onClick={() => navGroupManageHandler()}>
      <Style.LeftContainer>
        <img src={groupCategory.group.groupImg} alt="그룹 프로필" />
        <div>{groupCategory.group.groupName}</div>
      </Style.LeftContainer>
      <Style.RightContainer>
        <Style.CountContainer>
          <img src="/icon/person_icon.svg" alt="인원 수" />
          <div>{groupCategory.groupMemberCount}</div>
        </Style.CountContainer>
        <img src="/icon/list_move_icon.svg" alt="" />
      </Style.RightContainer>
    </Style.Wrapper>
  );
};
