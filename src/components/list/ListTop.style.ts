import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;

    & > div:nth-child(2) {
      font-size: 18px;
    }

    & > div:last-child {
      & > img {
        width: 16px;
        height: 16px;
      }
    }
  `,
};
