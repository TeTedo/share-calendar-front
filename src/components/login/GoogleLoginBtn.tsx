import React from "react";
import { S_LoginBtnWrapper } from "./LoginBtn.style";
import { GOOGLE_AUTH_LOGIN_URI } from "constants/apiUri";

/**
 * 공식문서 - 구글 OAuth 2.0
 * https://developers.google.com/identity/protocols/oauth2?hl=ko
 *
 * endpoint 호출 부분
 * https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#httprest
 */
export const GoogleLoginBtn = () => {
  const googleLoginHandler = () => {
    const googleAuthUri =
      GOOGLE_AUTH_LOGIN_URI +
      "?client_id=" +
      process.env.REACT_APP_GOOGLE_CLIENT_ID +
      "&" +
      "redirect_uri=" +
      process.env.REACT_APP_GOOGLE_REDIRECT_URI +
      "&" +
      "response_type=code&" +
      "access_type=offline&" +
      "include_granted_scopes=true&" +
      "state=state_parameter_passthrough_value&" +
      "scope=email profile";

    window.location.href = googleAuthUri;
  };

  return (
    <S_LoginBtnWrapper
      style={{ border: ".1rem black solid", backgroundColor: "white" }}
      onClick={googleLoginHandler}
    >
      <img src="/icon/google-icon.svg" alt="" />
      <div>구글 로그인</div>
    </S_LoginBtnWrapper>
  );
};
