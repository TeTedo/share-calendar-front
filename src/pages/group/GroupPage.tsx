import { AdMain } from "components/advertisement/AdMain";
import { GroupList } from "components/group/GroupList";
import { GroupListTop } from "components/group/GroupListTop";
import React from "react";

export const GroupPage = () => {


  return (
    <div>
      <GroupListTop name="그룹 목록" />
      <AdMain />
      <GroupList />
    </div>
  );
};
