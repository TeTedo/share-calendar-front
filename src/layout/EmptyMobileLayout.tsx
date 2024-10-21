import React from "react";
import { MobileLayoutWrapper, OutletWrapper } from "./MobileLayout.style";
import { Outlet } from "react-router-dom";

export const EmptyMobileLayout = () => {
  return (
    <MobileLayoutWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </MobileLayoutWrapper>
  );
};
