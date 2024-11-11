import React from "react";
import { Style } from "./GroupList.style";
import { GroupListDetail } from "./GroupListDetail";
import { GroupListDetailAdd } from "./GroupListDetailAdd";
import { useRecoilState } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

export const GroupList = () => {
  const [groupCategoryList, setGroupCategoryList] =
    useRecoilState(groupCategoryState);

  return (
    <Style.Wrapper>
      <Style.ListContainer>
        {/* 그룹 리스트 */}
        {groupCategoryList.map((groupCategory) => (
          <GroupListDetail
            groupCategory={groupCategory}
            key={groupCategory.group.groupId}
          />
        ))}
      </Style.ListContainer>

      {/* 그룹 추가버튼 */}
      <GroupListDetailAdd />
    </Style.Wrapper>
  );
};
