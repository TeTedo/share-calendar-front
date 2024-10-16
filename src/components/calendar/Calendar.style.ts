import styled from "styled-components";

export const S_CalendarWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const S_CalendarHeader = {
  Wrapper: styled.div`
    display: flex;
  `,

  Container: styled.div`
    width: calc(100% / 7);
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

export const S_CalendarBody = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Container: styled.div`
    width: calc(100% / 7);
  `,
};
