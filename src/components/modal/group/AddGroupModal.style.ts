import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 200px;

    padding: 20px 10px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    gap: 30px;
    border-radius: 12px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  `,

  GroupDesc: styled.div`
    textarea {
      height: 100px;
      outline: none;
      resize: none;
    }
  `,

  AddBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid black;

    padding: 5px 10px;
  `,
};
