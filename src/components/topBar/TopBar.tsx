import React from "react";
import { LeftContainer, RightContainer, TopBarWrapper } from "./TopBar.style";

export const TopBar = () => {
  return (
    <TopBarWrapper>
      <LeftContainer>Left</LeftContainer>
      <RightContainer>Right</RightContainer>
    </TopBarWrapper>
  );
};
