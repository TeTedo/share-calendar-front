import React from "react";
import { Style } from "./ListDetail.style";

interface IListDetailProps {
  groupCategory: IGroupCategoryDto;
}

export const ListDetail = ({ groupCategory }: IListDetailProps) => {
  return (
    <Style.Wrapper>
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
