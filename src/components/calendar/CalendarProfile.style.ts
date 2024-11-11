import styled from "styled-components";

export const CalendarProfileWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 22px;
  box-sizing: border-box;
`;

export const Style = {
  LeftContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    & > img {
      width: 40px;
      height: 40px;
    }
  `,
  RightContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    & > img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  `,
};
