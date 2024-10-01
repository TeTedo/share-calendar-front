import { PAGE_URI } from "constants/pageUri";
import { useGoogleLogin } from "hooks/api/login/useGoogleLogin";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { memberState } from "state/recoil/memberState";
import { tokenState } from "state/recoil/tokenState";
import { TokenUtil } from "utils/tokenUtil";

export const GoogleLogin = () => {
  const setTokenState = useSetRecoilState(tokenState);
  const setMemberState = useSetRecoilState(memberState);

  const nav = useNavigate();

  const [queryString] = useSearchParams();
  const code = queryString.get("code")!;

  const { mutate: googleLoginHook } = useGoogleLogin();

  useEffect(() => {
    loginGoogleHandler();
  }, [code]);

  const loginGoogleHandler = () => {
    console.log("hihi");
    const data = { code };
    googleLoginHook(data, {
      onSuccess: (response: TLoginResponse) => {
        console.log(response);
        // token
        TokenUtil.setRefreshToken(response.token);
        setTokenState(response.token);

        // member
        setMemberState(response.member);
        nav(PAGE_URI.HOME);
      },
    });
  };

  return <div>구글 로그인 중입니다...</div>;
};
