import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { GoogleLogin } from "./GoogleLogin";
import { KakaoLogin } from "./KakaoLogin";

/**
 * 로그인 콜백에 대한 고민 - 컴포넌트를 분리해서 google, kakao, 따로 만드는게 나을지..
 */
export const Login = () => {
  const param = useParams<{ platform: string }>();

  return (
    <>
      {param.platform === "google" ? (
        <GoogleLogin />
      ) : param.platform === "kakao" ? (
        <KakaoLogin />
      ) : (
        <div>지원하지 않는 로그인 형식입니다.</div>
      )}
    </>
  );
};
