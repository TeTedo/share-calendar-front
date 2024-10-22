import styled from "styled-components";

export const BaseModalWrapper = styled.div<{
  $isCenter: boolean;
  $isBackgroundBlack: boolean;
}>`
  position: fixed;
  display: flex;
  justify-content: ${(props) => (props.$isCenter ? "center" : "")};
  align-items: ${(props) => (props.$isCenter ? "center" : "")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.$isBackgroundBlack ? "rgba(0,0,0,0.3)" : "transparent"};
  z-index: 999;
`;
export const BaseModalContainer = styled.div``;
