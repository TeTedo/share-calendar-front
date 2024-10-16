import React from "react";
import { S_MobileLayoutWrapper, S_OutletWrapper } from "./MobileLayout.style";
import { Outlet } from "react-router-dom";

export const EmptyMobileLayout = () => {
  return (
    <S_MobileLayoutWrapper>
      <S_OutletWrapper>
        <Outlet />
      </S_OutletWrapper>
    </S_MobileLayoutWrapper>
  );
};
