import React from "react";
import {
  S_LeftContainer,
  S_RightContainer,
  S_TopBarWrapper,
} from "./TopBar.style";

export const TopBar = () => {
  return (
    <S_TopBarWrapper>
      <S_LeftContainer>Left</S_LeftContainer>
      <S_RightContainer>Right</S_RightContainer>
    </S_TopBarWrapper>
  );
};
