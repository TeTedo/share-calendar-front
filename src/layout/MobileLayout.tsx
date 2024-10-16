import React from "react";
import {
  S_MobileLayoutContainer,
  S_MobileLayoutWrapper,
  S_OutletWrapper,
} from "./MobileLayout.style";
import { TopBar } from "components/topBar/TopBar";
import { Outlet } from "react-router-dom";
import { BottomNav } from "components/bottomNav/BottomNav";

export const MobileLayout = () => {
  return (
    <S_MobileLayoutWrapper>
      <S_MobileLayoutContainer>
        <S_OutletWrapper>
          <Outlet />
        </S_OutletWrapper>
        <BottomNav />
      </S_MobileLayoutContainer>
    </S_MobileLayoutWrapper>
  );
};
