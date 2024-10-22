import React from "react";
import {
  CalendarModalContainer,
  CalendarModalWrapper,
  ScheduleEmoticonBtn,
  ScheduleList,
} from "./CalendarModal.style";
import { ScheduleAtom } from "components/atom/ScheduleAtom";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { ChooseGroupModal } from "./ChooseGroupModal";
import { CancelScheduleModal } from "./CancelScheduleModal";

export const CalendarModal = ({
  date,
  scheduleList,
}: {
  date: moment.Moment;
  scheduleList: IScheduleDetail[];
}) => {
  const { modal, confirmModal, handleConfirmation, setIsOpen } = useBaseModal({
    children: <ChooseGroupModal />,
    confirmationSteps: [
      <CancelScheduleModal
        onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
      />,
    ],
    closeCallBack: () => {},
    isBackgroundBlack: false,
    isCenter: true,
  });

  return (
    <>
      {modal}
      {confirmModal}
      <CalendarModalWrapper>
        <CalendarModalContainer.Wrapper>
          <CalendarModalContainer.Header>
            <CalendarModalContainer.HeaderLeft>
              <CalendarModalContainer.HeaderDate>
                {date.format("YYYY년 MM월 DD일")}
              </CalendarModalContainer.HeaderDate>
              <CalendarModalContainer.HeaderText>
                스케줄 관리
              </CalendarModalContainer.HeaderText>
            </CalendarModalContainer.HeaderLeft>
            <ScheduleEmoticonBtn>
              <img src="/icon/add_emoticon_btn.svg" alt="이모티콘 추가 버튼" />
            </ScheduleEmoticonBtn>
          </CalendarModalContainer.Header>
          <CalendarModalContainer.Body>
            <ScheduleList.Wrapper>
              {scheduleList.map((schedule) => (
                <ScheduleAtom
                  fontSize="10px"
                  height="25px"
                  isTextCenter={false}
                  mainColor={schedule.category.categoryMainColor}
                  subColor={schedule.category.categorySubColor}
                >
                  {schedule.scheduleName}
                </ScheduleAtom>
              ))}
            </ScheduleList.Wrapper>

            <ScheduleAtom
              fontSize="10px"
              height="25px"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <img src="/icon/schedule_add_btn.svg" alt="스케줄 추가 버튼" />
            </ScheduleAtom>
          </CalendarModalContainer.Body>
        </CalendarModalContainer.Wrapper>
      </CalendarModalWrapper>
    </>
  );
};
