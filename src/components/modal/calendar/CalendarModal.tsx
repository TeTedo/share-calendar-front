import React, { useState } from "react";
import {
  CalendarStyle,
  CalendarModalWrapper,
  ScheduleEmoticonBtn,
  ScheduleList,
} from "./CalendarModal.style";
import { ScheduleAtom } from "components/atom/ScheduleAtom";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { ChooseGroupModal } from "./ChooseGroupModal";
import { CancelScheduleModal } from "./CancelScheduleModal";
import { ChooseCategoryModal } from "./ChooseCategoryModal";
import { AddScheduleModal } from "./AddScheduleModal";

export const CalendarModal = ({
  date,
  scheduleList,
}: {
  date: moment.Moment;
  scheduleList: IScheduleDetail[];
}) => {
  const [selectedGroup, setSelectedGroup] = useState<IGroupDto>();
  const [selectedCategory, setSelectedCategory] = useState<ICategoryDto>();

  const {
    closeAllModals,
    modal,
    confirmModal,
    handleConfirmation,
    setIsOpen,
    moveNextStep,
    movePrevStep,
  } = useBaseModal({
    children: [
      <ChooseGroupModal
        moveNextStep={() => moveNextStep()}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />,
      <ChooseCategoryModal
        moveNextStep={() => moveNextStep()}
        movePrevStep={() => movePrevStep()}
        selectedGroup={selectedGroup!}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />,
      <AddScheduleModal
        movePrevStep={() => movePrevStep()}
        closeAllModals={() => closeAllModals()}
        selectedGroup={selectedGroup!}
        selectedCategory={selectedCategory!}
      />,
    ],
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
        <CalendarStyle.Wrapper>
          <CalendarStyle.Header>
            <CalendarStyle.HeaderLeft>
              <CalendarStyle.HeaderDate>
                {date.format("YYYY년 MM월 DD일")}
              </CalendarStyle.HeaderDate>
              <CalendarStyle.HeaderText>스케줄 관리</CalendarStyle.HeaderText>
            </CalendarStyle.HeaderLeft>
            <ScheduleEmoticonBtn>
              <img src="/icon/add_emoticon_btn.svg" alt="이모티콘 추가 버튼" />
            </ScheduleEmoticonBtn>
          </CalendarStyle.Header>
          <CalendarStyle.Body>
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
          </CalendarStyle.Body>
        </CalendarStyle.Wrapper>
      </CalendarModalWrapper>
    </>
  );
};
