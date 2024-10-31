import { AdMain } from "components/advertisement/AdMain";
import { GroupListTop } from "components/group/GroupListTop";
import { GroupManage } from "components/groupManage/GroupManage";
import React from "react";

export const GroupManagePage = () => {
  return (
    <div>
      <GroupListTop name="그룹 설정" />
      <AdMain />
      <GroupManage />
    </div>
  );
};
