import styled from "styled-components";

export const BottomNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;

  border-radius: 15px 15px 0 0;
  box-shadow: inset 0px 11px 8px -10px #ccc;
`;

export const BottomNavContainer = styled.div<{ $isSelected: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  height: 100%;
  position: relative;

  & > div:first-child {
    opacity: ${(props) => (props.$isSelected ? "1" : "0")};
    transition: 1s;
    width: 50px;
    height: 5px;
    border-radius: 15px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    gap: 3px;

    color: ${(props) => (props.$isSelected ? "black" : "#9D9D9D")};

    & > img {
      width: 30px;
      height: 30px;
    }
  }
`;
