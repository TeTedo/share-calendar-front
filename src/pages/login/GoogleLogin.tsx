import { useGoogleLogin } from "hooks/api/login/useGoogleLogin";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const GoogleLogin = () => {
  const nav = useNavigate();
  const [queryString] = useSearchParams();
  const code = queryString.get("code")!;

  const { mutate: googleLoginHook } = useGoogleLogin();

  useEffect(() => {
    loginGoogleHandler();
  }, [code]);

  const loginGoogleHandler = () => {
    const data = { code };
    googleLoginHook(data);
  };

  return <div>구글 로그인 중입니다...</div>;
};
