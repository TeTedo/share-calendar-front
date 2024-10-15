import styled from "styled-components";

export const MobileLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 700px) {
    background-color: black;
  }
`;

export const MobileLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

export const OutletWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`;
