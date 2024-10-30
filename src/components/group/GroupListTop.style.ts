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

  GoBackContainer: styled.div`
    display: flex;
    font-size: 14px;
    gap: 10px;
    align-items: center;
    color: #777777;

    & > img {
      width: 10px;
      height: 18px;
    }
  `,
};
