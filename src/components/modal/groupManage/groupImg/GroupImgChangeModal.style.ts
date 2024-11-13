import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 12px;
  `,
  CircleInput: styled.label`
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
  CompleteButton: styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  `,
};
