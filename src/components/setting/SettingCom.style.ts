import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: #f8f8f8;
    height: calc(100% - 130px);
  `,

  MyInfoWrapper: styled.div`
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    align-items: center;
    justify-content: space-between;
  `,

  MyInfoLeft: styled.div`
    & > img {
      width: 40px;
      height: 40px;
    }

    font-size: 16px;
    font-weight: 500;
    display: flex;
    gap: 30px;
    align-items: center;
  `,
  MyInfoRight: styled.div`
    & > img {
      width: 24px;
      height: 24px;
    }
  `,
};
