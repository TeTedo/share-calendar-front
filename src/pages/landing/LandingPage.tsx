import { GoogleLoginBtn } from "components/login/GoogleLoginBtn";
import { KakaoLoginBtn } from "components/login/KakaoLoginBtn";
import React from "react";
import { S_LandingPageWrapper, S_LoginBtnWrapper } from "./LandingPage.style";

export const LandingPage = () => {
  return (
    <S_LandingPageWrapper>
      <img src="" alt="Date Book Logo" />
      <S_LoginBtnWrapper>
        <GoogleLoginBtn />
        <KakaoLoginBtn />
      </S_LoginBtnWrapper>
    </S_LandingPageWrapper>
  );
};
