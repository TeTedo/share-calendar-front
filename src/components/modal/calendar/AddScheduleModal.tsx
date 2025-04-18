import React, { Dispatch, SetStateAction, useState } from "react";
import { Style } from "./AddScheduleModal.style";
import { ScheduleDatePick } from "components/atom/ScheduleDatePick";
import { useAddSchedule } from "hooks/api/schedule/useAddSchedule";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useSetRecoilState } from "recoil";
import { scheduleState } from "state/recoil/scheduleState";

interface IAddScheduleModalProps {
  closeAllModals: () => void;
  movePrevStep: () => void;
  selectedCategory: ICategoryDto;
  date: moment.Moment;
  selectedGroupCategory: IGroupCategoryDto;
}

export const AddScheduleModal = ({
  closeAllModals,
  movePrevStep,
  selectedCategory,
  date,
  selectedGroupCategory,
}: IAddScheduleModalProps) => {
  const [isOn, setIsOn] = useState(true);
  const [scheduleName, setScheduleName] = useState<string>("");
  const [startAt, setStartAt] = useState<moment.Moment>(date.clone());
  const [endAt, setEndAt] = useState<moment.Moment>(date.clone());

  const setScheduleList = useSetRecoilState(scheduleState);
  const toast = useToastCustom();
  const { mutate } = useAddSchedule();
  const verifyAddable: () => boolean = () => {
    return true;
  };

  const addScheduleHandler = () => {
    const data = {
      groupId: selectedGroupCategory.group.groupId,
      categoryId: selectedCategory.categoryId,
      scheduleName,
      allDayYn: isOn,
      date: date.format("YYYY-MM-DD"),
      startAt: startAt.format("YYYY-MM-DD HH:mm:ss"),
      endAt: endAt.format("YYYY-MM-DD HH:mm:ss"),
    };

    mutate(data, {
      onSuccess: (response) => {
        toast("일정 생성 완료!", ToastType.SUCCESS);
        setScheduleList((prev) => [...prev, response]);
        closeAllModals();
      },
      onError: (e) => {
        toast(`일정 생성 실패 \n ${e}`, ToastType.ERROR);
      },
    });
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
            {selectedGroupCategory.group.groupName} {" - "}
            {selectedCategory.categoryName}
          </Style.BodyTitle>
          <Style.InputSchedule
            placeholder="일정을 입력해 주세요."
            onChange={(e) => setScheduleName(e.target.value)}
          />

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
