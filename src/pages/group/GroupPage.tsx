import { AdMain } from "components/advertisement/AdMain";
import { GroupList } from "components/group/GroupList";
import { GroupListTop } from "components/group/GroupListTop";
import React from "react";
import { Style } from "./GroupPage.style";

export const GroupPage = () => {
  return (
    <Style.Wrapper>
      <GroupListTop name="그룹 목록" />
      <AdMain />
      <GroupList />
    </Style.Wrapper>
  );
};
