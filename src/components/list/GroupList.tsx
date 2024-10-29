import React from "react";
import { Style } from "./GroupList.style";
import { ListDetail } from "./ListDetail";
import { ListDetailAdd } from "./ListDetailAdd";
import { useRecoilState } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

export const GroupList = () => {
  const [groupCategoryList, setGroupCategoryList] =
    useRecoilState(groupCategoryState);

  return (
    <Style.Wrapper>
      {groupCategoryList.map((groupCategory) => (
        <ListDetail groupCategory={groupCategory} />
      ))}
      <ListDetailAdd />
    </Style.Wrapper>
  );
};
