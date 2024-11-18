import React from "react";
import { Style } from "./SettingCom.style";
import { MyInfo } from "./MyInfo";
import { SettingList } from "./SettingList";

export const SettingCom = () => {
  return (
    <Style.Wrapper>
      <MyInfo />
      <SettingList />
    </Style.Wrapper>
  );
};
