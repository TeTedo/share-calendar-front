import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100% - 130px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ListContainer: styled.div`
    height: calc(100% - 60px);
    overflow-y: auto;
  `,
};
