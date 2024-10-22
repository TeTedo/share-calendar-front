import React from "react";
import { CancelScheduleModalStyle } from "./CalendarModal.style";

export const CancelScheduleModal = ({
  onConfirm,
}: {
  onConfirm: (confirm: boolean) => void;
}) => {
  return (
    <CancelScheduleModalStyle.Wrapper>
      <CancelScheduleModalStyle.Container>
        <CancelScheduleModalStyle.MainText>
          작성 중이던 글을 취소하시겠습니까?
        </CancelScheduleModalStyle.MainText>
        <CancelScheduleModalStyle.SubText>
          작성 중이던 글은 저장되지 않습니다.
        </CancelScheduleModalStyle.SubText>
        <CancelScheduleModalStyle.BtnContainer>
          <CancelScheduleModalStyle.SelectBtn
            $isCancelBtn={true}
            onClick={() => onConfirm(true)}
          >
            취소
          </CancelScheduleModalStyle.SelectBtn>
          <CancelScheduleModalStyle.SelectBtn
            $isCancelBtn={false}
            onClick={() => onConfirm(false)}
          >
            계속 작성하기
          </CancelScheduleModalStyle.SelectBtn>
        </CancelScheduleModalStyle.BtnContainer>
      </CancelScheduleModalStyle.Container>
    </CancelScheduleModalStyle.Wrapper>
  );
};
