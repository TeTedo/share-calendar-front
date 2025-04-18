import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  height: calc(100% - 210px);
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const CalendarHeader = {
  Wrapper: styled.div`
    display: flex;
  `,

  Container: styled.div`
    width: calc(100% / 7);
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      color: red;
    }

    &:last-child {
      color: blue;
    }
  `,
};

export const CalendarBody = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-wrap: wrap;
  `,
  Container: styled.div`
    width: calc(100% / 7);
    min-height: 50px;

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
