import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    padding: 20px 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;

    gap: 50px;
  `,

  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  BtnContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px 10px;
      border-radius: 12px;
      border: 1px solid black;
      cursor: pointer;
    }
  `,
};
