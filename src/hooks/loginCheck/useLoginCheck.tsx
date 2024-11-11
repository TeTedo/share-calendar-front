import { useRefreshToken } from "hooks/api/token/useRefreshToken";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberState } from "state/recoil/memberState";
import { tokenState } from "state/recoil/tokenState";

export const useLoginCheck = () => {
  const [redirected, setRedirected] = useState<boolean>(false);
  const location = useLocation();
  const nav = useNavigate();
  const [memberRecoil, setMemberRecoil] = useRecoilState(memberState);
  const [tokenRecoil, setTokenRecoil] = useRecoilState(tokenState);
  const { mutate } = useRefreshToken();

  return useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("invite") ||
      redirected
    )
      return;

    if (memberRecoil.uuid === "guest") {
      mutate(
        {},
        {
          onSuccess: (response) => {
            setTokenRecoil(response.token);
            setMemberRecoil(response.member);

            if (location.pathname === "/landing") {
              nav("/calendar");
            }
          },
          onError: () => {
            setRedirected(true);
            nav("/landing");
          },
        }
      );
    }
  }, [
    memberRecoil,
    location.pathname,
    redirected,
    mutate,
    setMemberRecoil,
    setTokenRecoil,
    nav,
  ]);
};
