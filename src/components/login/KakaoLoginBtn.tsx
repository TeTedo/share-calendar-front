import React from "react";
import { S_LoginBtnWrapper } from "./LoginBtn.style";

export const KakaoLoginBtn = () => {
  return (
    <S_LoginBtnWrapper
      style={{ border: ".1rem yellow solid", backgroundColor: "yellow" }}
    >
      <img src="/icon/kakao-icon.svg" alt="" />
      <div>카카오 로그인</div>
    </S_LoginBtnWrapper>
  );
};
