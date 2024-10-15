import styled from "styled-components";

export const LoginBtnWrapper = styled.div`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 2px solid black;
  padding: 10px 30px;
  border-radius: 15px;
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
    padding: 5px;
    border-radius: 50%;
    overflow: hidden;
  }

  & > div {
    font-size: 1.5px;
    font-weight: bold;
  }
`;
