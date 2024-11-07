import styled from "styled-components";

export const CalendarTopBarWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > select {
    border: none;
    background-color: white;
    font-size: 16px;
  }
`;

export const MonthSelect = styled.div`
  display: flex;
  gap: 15px;
  font-size: 15px;

  & > div:nth-child(2n + 1) {
    cursor: pointer;
  }
`;
