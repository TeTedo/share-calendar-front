import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 200px;
    height: 150px;
    background-color: white;
    border-radius: 12px;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
    box-sizing: border-box;
    gap: 20px;
  `,
  Title: styled.div`
    font-size: 16px;
  `,

  LinkContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  `,
  LinkRow: styled.div``,
  LinkBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 12px;
    padding: 5px 10px;
    box-sizing: border-box;
    cursor: pointer;
  `,
};
