import React from "react";
import { ChooseGroupModalStyle } from "./CalendarModal.style";

export const ChooseGroupModal = () => {
  return (
    <ChooseGroupModalStyle.Wrapper>
      <ChooseGroupModalStyle.Container>
        <ChooseGroupModalStyle.Header>
          새로운 일정 추가
        </ChooseGroupModalStyle.Header>
      </ChooseGroupModalStyle.Container>
    </ChooseGroupModalStyle.Wrapper>
  );
};
