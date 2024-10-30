import styled from "styled-components";
import {
  CalendarModalBaseContainer,
  CalendarModalBaseWrapper,
} from "./calendar/CalendarModal.style";

export const BaseModalWrapper = styled.div<{
  $isCenter: boolean;
  $isBackgroundBlack: boolean;
}>`
  position: fixed;
  display: flex;
  justify-content: ${(props) => (props.$isCenter ? "center" : "")};
  align-items: ${(props) => (props.$isCenter ? "center" : "")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.$isBackgroundBlack ? "rgba(0,0,0,0.3)" : "transparent"};
  z-index: 999;
`;

export const BaseModalContainer = styled.div``;

export const Style = {
  Wrapper: styled(CalendarModalBaseWrapper)`
    height: 130px;
  `,

  Container: styled(CalendarModalBaseContainer)``,

  MainText: styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
  `,
  SubText: styled.div`
    text-align: center;
    color: #777777;
    font-size: 9px;
    margin-top: 10px;
  `,
  BtnContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 25px;
  `,

  SelectBtn: styled.div<{ $isCancelBtn: boolean }>`
    background-color: ${(props) =>
      props.$isCancelBtn ? "#D6D6D6" : "#FFE696"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 30px;
    font-size: 10px;
  `,
};
