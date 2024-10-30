import React from "react";
import { CancelScheduleModalStyle } from "./calendar/CalendarModal.style";
import { Style } from "./BaseModal.style";

interface ICancelModalProps {}

export const CancelScheduleModal = ({
  onConfirm,
  mainText,
  subText,
}: {
  onConfirm: (confirm: boolean) => void;
  mainText: string;
  subText: string;
}) => {
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.MainText>작성 중이던 글을 취소하시겠습니까?</Style.MainText>
        <Style.SubText>작성 중이던 글은 저장되지 않습니다.</Style.SubText>
        <Style.BtnContainer>
          <Style.SelectBtn $isCancelBtn={true} onClick={() => onConfirm(true)}>
            취소
          </Style.SelectBtn>
          <Style.SelectBtn
            $isCancelBtn={false}
            onClick={() => onConfirm(false)}
          >
            계속 작성하기
          </Style.SelectBtn>
        </Style.BtnContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};
