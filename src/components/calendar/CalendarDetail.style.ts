import styled from "styled-components";

export const CalendarDetailCom = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
  `,

  NumberWrapper: styled.div<{ $color: string }>`
    display: flex;
    justify-content: center;
    color: ${(props) => props.$color};
  `,
};
