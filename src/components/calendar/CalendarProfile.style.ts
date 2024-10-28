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

    & > div:first-child {
      width: 80px;
      height: 30px;
      font-size: 10px;
      border-radius: 5px;
      background-color: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,

  GroupCountContainer: styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    & > img {
      width: 14px;
      height: 14px;
    }
  `,
};
