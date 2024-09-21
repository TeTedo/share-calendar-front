import styled from "styled-components";

export const LoginBtnWrapper = styled.div`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 0.2rem solid black;
  padding: 1rem 3rem;
  border-radius: 1.5rem;
  cursor: pointer;

  & > img {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  & > div {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
