import { AdMain } from "components/advertisement/AdMain";
import { GroupListTop } from "components/group/GroupListTop";
import { SettingCom } from "components/setting/SettingCom";
import React from "react";
import { SettingPageWrapper } from "./SettingPage.style";

export const SettingPage = () => {
  return (
    <SettingPageWrapper>
      <GroupListTop name="설정" />
      <AdMain />
      <SettingCom />
    </SettingPageWrapper>
  );
};
