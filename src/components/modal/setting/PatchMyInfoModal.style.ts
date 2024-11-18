import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 300px;
    height: 340px;
    background-color: white;

    padding: 20px 10px;
    border-radius: 12px;
  `,

  Top: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    font-size: 15px;

    & > div:last-child {
      font-size: 13px;
    }

    padding: 0 0 20px;
  `,

  Body: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  `,
  ImgContainer: styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 12px;
    background-color: #f0f0f0;
    border: 2px dashed #ccc;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    input {
      display: none;
    }
    &:hover {
      background-color: #e0e0e0;
    }
  `,
  PreviewImage: styled.img`
    width: 100%;
    height: 100%;
  `,
  NameContainer: styled.div`
    input {
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
  `,

  Bottom: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Btn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 12px;
    padding: 10px 20px;
  `,
};
