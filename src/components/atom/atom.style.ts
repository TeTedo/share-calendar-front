import styled from "styled-components";

export const ScheduleAtomWrapper = styled.div<{
  $mainColor: string;
  $subColor: string;
  $isTextCenter: boolean;
  $height: string;
  $width: string;
  $fontSize: string;
}>`
  display: flex;
  width: ${(props) => props.$width};
  justify-content: center;

  & > div:first-child {
    background-color: ${(props) => props.$mainColor};
    width: 5px;
    height: ${(props) => props.$height};
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$isTextCenter ? "center" : "")};
    font-size: ${(props) => props.$fontSize};
    padding-left: 2px;
    background-color: ${(props) => props.$subColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: 100%;
    height: ${(props) => props.$height};
  }
`;
