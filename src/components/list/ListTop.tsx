import React from "react";
import { Style } from "./ListTop.style";

export const ListTop = () => {
  return (
    <Style.Wrapper>
      <div></div>
      <div>팀 목록</div>
      <div>
        <img src="/icon/alarm_icon.svg" alt="알람" />
      </div>
    </Style.Wrapper>
  );
};
