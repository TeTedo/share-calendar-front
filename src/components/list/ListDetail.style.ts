import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
  `,

  LeftContainer: styled.div`
    & > img {
      width: 40px;
      height: 40px;
    }

    display: flex;
    gap: 8px;
    font-size: 14px;
    align-items: center;
  `,
  RightContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & > img {
      width: 16px;
      height: 12px;
    }
  `,
  CountContainer: styled.div`
    display: flex;
    gap: 5px;
    & > img {
      width: 14px;
      height: 14px;
    }
  `,
};
