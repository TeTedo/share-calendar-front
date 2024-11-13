import React from "react";
import { CancelScheduleModalStyle } from "./calendar/CalendarModal.style";
import { Style } from "./BaseModal.style";

interface ICancelModalProps {
  onConfirm: (confirm: boolean) => void;
  mainText: string;
  subText?: string;
}

export const CancelBaseModal = ({
  onConfirm,
  mainText,
  subText,
}: ICancelModalProps) => {
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.MainText>{mainText}</Style.MainText>
        <Style.SubText>{subText}</Style.SubText>
        <Style.BtnContainer>
          <Style.SelectBtn $isCancelBtn={true} onClick={() => onConfirm(true)}>
            취소
          </Style.SelectBtn>
          <Style.SelectBtn
            $isCancelBtn={false}
            onClick={() => onConfirm(false)}
          >
            계속하기
          </Style.SelectBtn>
        </Style.BtnContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};
