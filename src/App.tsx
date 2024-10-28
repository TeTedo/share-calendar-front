import { useMemberInfo } from "hooks/api/member/useMemberInfo";
import { useRefreshToken } from "hooks/api/token/useRefreshToken";
import { TanstackQueryProvider } from "provider/TanstackQueryProvider";
import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { Router } from "router/Router";
import { memberState } from "state/recoil/memberState";
import { tokenState } from "state/recoil/tokenState";

function AppContent() {
  const [redirected, setRedirected] = useState<boolean>(false);
  const location = useLocation();
  const [memberRecoil, setMemberRecoil] = useRecoilState(memberState);
  const setTokenState = useSetRecoilState(tokenState);
  const { mutate } = useRefreshToken();

  useEffect(() => {
    if (
      location.pathname === "/landing" ||
      location.pathname.includes("login") ||
      redirected
    )
      return;

    if (memberRecoil.uuid === "guest") {
      mutate(
        {},
        {
          onSuccess: (response) => {
            setTokenState(response.token);
            setMemberRecoil(response.member);
          },
          onError: () => {
            window.location.href = "/landing";
            setRedirected(true);
          },
        }
      );
    }
  }, [memberRecoil, location.pathname, redirected]);

  return <></>;
}

function App() {
  return (
    <RecoilRoot>
      <TanstackQueryProvider>
        <BrowserRouter>
          <AppContent />
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </TanstackQueryProvider>
    </RecoilRoot>
  );
}

export default App;
