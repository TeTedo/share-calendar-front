import React, { useState } from "react";
import { Style } from "./AddScheduleModal.style";
import { ScheduleDatePick } from "components/atom/ScheduleDatePick";

export const AddScheduleModal = ({
  closeAllModals,
  movePrevStep,
  selectedCategory,
  selectedGroup,
}: {
  closeAllModals: () => void;
  movePrevStep: () => void;
  selectedGroup: IGroupDto;
  selectedCategory: ICategoryDto;
}) => {
  const [isOn, setIsOn] = useState(false);
  const verifyAddable: () => boolean = () => {
    return true;
  };

  const addScheduleHandler = () => {
    closeAllModals();
  };

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Header>새로운 일정 추가</Style.Header>
        <Style.Body>
          <Style.BodyTitle>
            {selectedGroup.groupName} - {selectedCategory.categoryName}
          </Style.BodyTitle>
          <Style.InputSchedule placeholder="일정을 입력해 주세요." />

          {/* 하루종일 */}
          <Style.AllDayWrapper>
            <div>하루종일</div>
            <Style.Switch>
              <Style.CheckBox />
              <Style.Slider $isOn={isOn} onClick={() => handleToggle()} />
            </Style.Switch>
          </Style.AllDayWrapper>

          {/* 날짜 선택 */}
          <Style.DateWrapper>
            <ScheduleDatePick />
          </Style.DateWrapper>
          <Style.BtnWrapper>
            <Style.NextBtn onClick={() => movePrevStep()}>이전</Style.NextBtn>
            <Style.NextBtn
              $isSelected={verifyAddable()}
              onClick={() => addScheduleHandler()}
            >
              생성
            </Style.NextBtn>
          </Style.BtnWrapper>
        </Style.Body>
      </Style.Container>
    </Style.Wrapper>
  );
};
