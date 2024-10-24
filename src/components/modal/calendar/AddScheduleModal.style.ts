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

  CategorySelectBox: styled.div`
    width: 220px;
    height: 200px;
    background-color: #fbfbfb;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;
  `,

  CategoryContainer: styled.div<{ $isSelected: boolean; $mainColor: string }>`
    display: flex;
    width: 100%;
    padding: 8px 12px;
    justify-content: space-between;
    background-color: ${(props) => (props.$isSelected ? "#F4F3F3" : "")};

    & > div:first-child {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background-color: ${(props) => props.$mainColor};
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      font-size: 9px;
      color: #777777;
    }
  `,

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
