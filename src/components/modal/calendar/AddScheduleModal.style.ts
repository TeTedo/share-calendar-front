import styled from "styled-components";
import {
  CalendarModalBaseContainer,
  CalendarModalBaseWrapper,
} from "./CalendarModal.style";

export const Style = {
  Wrapper: styled(CalendarModalBaseWrapper)``,
  Container: styled(CalendarModalBaseContainer)``,
  Header: styled.div`
    font-size: 13px;
    font-weight: 500;
  `,

  Body: styled.div`
    margin: 20px 0 0 7px;
  `,

  BodyTitle: styled.div`
    color: #777777;
    font-size: 9px;
  `,

  InputSchedule: styled.input`
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: 11px;
    margin-top: 10px;
    padding: 5px 0;
  `,

  AllDayWrapper: styled.div`
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
    color: #777777;
  `,

  Switch: styled.div`
    position: relative;
    display: inline-block;
    width: 35px;
    height: 20px;
  `,
  Slider: styled.div<{ $isOn: boolean }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $isOn }) => ($isOn ? "#E16559" : "#A4A4A4")};
    transition: 0.4s;
    border-radius: 20px;

    &::before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
      transform: ${({ $isOn }) =>
        $isOn ? "translateX(15px)" : "translateX(0)"};
    }
  `,
  CheckBox: styled.div`
    opacity: 0;
    width: 0;
    height: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  `,

  DateWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 13px;
  `,
  DateContainer: styled.div``,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  `,
  NextBtn: styled.div<{ $isSelected?: boolean }>`
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background-color: ${(props) => (props.$isSelected ? "#e8e8e8" : "#FBFBFB")};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
  `,
};
