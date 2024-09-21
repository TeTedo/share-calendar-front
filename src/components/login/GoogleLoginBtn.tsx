import React from "react";
import { LoginBtnWrapper } from "./LoginBtn.style";

export const GoogleLoginBtn = () => {
  return (
    <LoginBtnWrapper
      style={{ border: ".1rem black solid", backgroundColor: "white" }}
    >
      <img src="/icon/google-icon.svg" alt="" />
      <div>구글 로그인</div>
    </LoginBtnWrapper>
  );
};
