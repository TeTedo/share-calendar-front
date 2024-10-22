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

export const ScheduleList = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2px;
  `,

  Container: styled.div<{ $mainColor: string; $subColor: string }>`
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: center;

    & > div:first-child {
      background-color: ${(props) => props.$mainColor};
      width: 5px;
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      font-size: 9px;
      padding-left: 2px;
      background-color: ${(props) => props.$subColor};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      width: 80%;
    }
  `,
};
