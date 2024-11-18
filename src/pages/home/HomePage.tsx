import { AdMain } from "components/advertisement/AdMain";
import { GroupListTop } from "components/group/GroupListTop";
import { MainCom } from "components/main/MainCom";
import React from "react";

export const HomePage = () => {
  return (
    <div>
      <GroupListTop name="메인" />
      <AdMain />
      <MainCom />
    </div>
  );
};
