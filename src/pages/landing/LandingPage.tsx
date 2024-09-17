import { GoogleLoginBtn } from "components/login/GoogleLoginBtn";
import { KakaoLoginBtn } from "components/login/KakaoLoginBtn";
import React from "react";
import { LandingPageWrapper, LoginBtnWrapper } from "./LandingPage.style";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <img src="" alt="Date Book Logo" />
      <LoginBtnWrapper>
        <GoogleLoginBtn />
        <KakaoLoginBtn />
      </LoginBtnWrapper>
    </LandingPageWrapper>
  );
};
