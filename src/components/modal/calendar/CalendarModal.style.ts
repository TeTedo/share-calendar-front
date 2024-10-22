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

export const CalendarModalContainer = {
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

    -ms-overflow-style: auto; /* Show scrollbar in IE and Edge */
    scrollbar-width: auto; /* Show scrollbar in Firefox */

    &::-webkit-scrollbar {
      display: block; /* Show scrollbar in WebKit browsers (Chrome, Safari) */
      width: 4px; /* Adjust the width of the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9; /* 스크롤바 막대 */
      border-radius: 100px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent; /* 스크롤바 배경 */
    }
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
