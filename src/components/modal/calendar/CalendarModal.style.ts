import styled from "styled-components";

export const CalendarModalBaseWrapper = styled.div`
  width: 260px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const CalendarModalBaseContainer = styled.div`
  padding: 12px;
`;

export const CalendarModalWrapper = styled(CalendarModalBaseWrapper)``;

export const CalendarStyle = {
  Wrapper: styled(CalendarModalBaseContainer)``,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  HeaderLeft: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  HeaderDate: styled.div`
    font-size: 13px;
    font-weight: 500;
  `,

  HeaderText: styled.div`
    font-size: 9px;
    color: #777777;
  `,

  Body: styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};

export const ScheduleList = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 4px;
    height: 160px;
    overflow-y: auto;
  `,

  Header: styled.div``,
};

export const ScheduleEmoticonBtn = styled.div`
  & > img {
    width: 22px;
    height: 22px;
  }
`;
export const ChooseGroupModalStyle = {
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

  TeamSelectBox: styled.div`
    width: 220px;
    height: 200px;
    background-color: #fbfbfb;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;
  `,

  TeamContainer: styled.div<{ $isSelected: boolean }>`
    display: flex;
    gap: 8px;
    padding: 10px;
    background-color: ${(props) => (props.$isSelected ? "#F4F3F3" : "")};
    & > img {
      width: 40px;
      height: 40px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;

      & > div:first-child {
        font-size: 14px;
        font-weight: 500;
      }

      & > div:last-child {
        font-size: 9px;
        color: #777777;
      }
    }
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  `,
  NextBtn: styled.div<{ $isSelected: boolean }>`
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

export const CancelScheduleModalStyle = {
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
