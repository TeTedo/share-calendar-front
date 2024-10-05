import { useGoogleLogin } from "hooks/api/login/useGoogleLogin";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { memberState } from "state/recoil/memberState";
import { tokenState } from "state/recoil/tokenState";
import { TokenUtil } from "utils/tokenUtil";

export const GoogleLogin = () => {
  const setTokenState = useSetRecoilState(tokenState);
  const setMemberState = useSetRecoilState(memberState);

  const toast = useToastCustom();

  const nav = useNavigate();
  const [queryString] = useSearchParams();
  const code = queryString.get("code")!;

  const { mutate: googleLoginHook } = useGoogleLogin();

  useEffect(() => {
    loginGoogleHandler();
  }, [code]);

  const loginGoogleHandler = () => {
    const data = { code };
    googleLoginHook(data, {
      onSuccess: (response: TGoogleLoginResponse) => {
        // token
        TokenUtil.setRefreshToken(response.token);
        setTokenState(response.token);

        // member
        setMemberState(response.member);
        nav("/home");
        toast(response.member.name + "님 환영합니다.", ToastType.SUCCESS);
      },
      onError: (error) => {
        toast("로그인에 실패하였습니다\n" + error.message, ToastType.ERROR);
      },
    });
  };

  return <div>구글 로그인 중입니다...</div>;
};
