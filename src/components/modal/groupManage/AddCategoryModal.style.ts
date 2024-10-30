import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 15px;
    padding: 30px 10px;
  `,

  Title: styled.div`
    font-weight: 500;
  `,

  NameInput: styled.input`
    margin-top: 150px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 5px;
    width: 200px;
  `,

  ColorWrapper: styled.div`
    margin-top: 20px;
    width: 100%;
    max-height: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow: auto;
  `,
  ColorDiv: styled.div<{ $mainColor: string; $isSelected: boolean }>`
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.$mainColor};
    border: ${(props) => (props.$isSelected ? "1px solid black" : "none")};
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    & > div {
      width: 50px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 12px;
      cursor: pointer;
    }
  `,
};
