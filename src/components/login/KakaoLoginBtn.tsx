import React from "react";
import { LoginBtnWrapper } from "./LoginBtn.style";

export const KakaoLoginBtn = () => {
  return (
    <LoginBtnWrapper
      style={{ border: ".1rem yellow solid", backgroundColor: "yellow" }}
    >
      <img src="/icon/kakao-icon.svg" alt="" />
      <div>카카오 로그인</div>
    </LoginBtnWrapper>
  );
};
