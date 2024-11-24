import styled from "styled-components";

export const Style = {
  Wrapper: styled.div<{ $x: number; $y: number }>`
    background-color: white;
    top: ${(props) => `${props.$y}px` ?? 0};
    left: ${(props) => `${props.$x - 100}px` ?? 0};
    position: absolute;
    width: 100px;
    box-shadow: 1px 1px 1px 1px #555555;

    overflow: hidden;
  `,

  MenuWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: grey;
      cursor: pointer;
    }
  `,
};
