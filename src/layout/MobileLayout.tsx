import React from "react";
import {
  MobileLayoutContainer,
  MobileLayoutWrapper,
  OutletWrapper,
} from "./MobileLayout.style";
import { TopBar } from "components/topBar/TopBar";
import { Outlet } from "react-router-dom";
import { BottomNav } from "components/bottomNav/BottomNav";

export const MobileLayout = () => {
  return (
    <MobileLayoutWrapper>
      <MobileLayoutContainer>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <BottomNav />
      </MobileLayoutContainer>
    </MobileLayoutWrapper>
  );
};
