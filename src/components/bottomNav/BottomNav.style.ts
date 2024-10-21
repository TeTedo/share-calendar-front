import styled from "styled-components";

export const S_BottomNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;

  border-radius: 15px 15px 0 0;
  box-shadow: inset 0px 11px 8px -10px #ccc;
`;

export const S_BottomNavContainer = styled.div`
  & > img {
    width: 30px;
    height: 30px;
  }
`;
