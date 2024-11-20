import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  DetailWrapper: styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px 20px;
    box-sizing: border-box;

    box-shadow: 1px 1px 1px 1px #555555;
  `,
  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TopLeft: styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    & > img {
      width: 24px;
      height: 24px;
    }
  `,
  TopRight: styled.div`
    & > img {
      width: 16px;
      height: 16px;
    }
  `,
  DetailBox: styled.div`
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid grey;
  `,
  DetailBoxTop: styled.div``,
  ScheduleWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
  `,

  ScheduleDetail: styled.div<{ $backgroundColor: string }>`
    background-color: ${(props) => props.$backgroundColor};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 12px;
  `,
};
