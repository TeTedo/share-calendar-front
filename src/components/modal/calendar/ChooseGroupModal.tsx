import React, { Dispatch, SetStateAction, useState } from "react";
import { ChooseGroupModalStyle } from "./CalendarModal.style";

import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useRecoilValue } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

interface IChooseGroupModalProps {
  moveNextStep: () => void;
  selectedGroupCategory: IGroupCategoryDto | undefined;
  setSelectedGroupCategory: Dispatch<
    SetStateAction<IGroupCategoryDto | undefined>
  >;
}

export const ChooseGroupModal = ({
  moveNextStep,
  selectedGroupCategory,
  setSelectedGroupCategory,
}: IChooseGroupModalProps) => {
  const groupCategoryList = useRecoilValue(groupCategoryState);
  const toast = useToastCustom();

  const moveNextStepHandler = () => {
    if (!selectedGroupCategory) {
      toast("그룹을 선택해야 합니다.", ToastType.ERROR);
      return;
    }
    moveNextStep();
  };
  return (
    <ChooseGroupModalStyle.Wrapper>
      <ChooseGroupModalStyle.Container>
        <ChooseGroupModalStyle.Header>
          새로운 일정 추가
        </ChooseGroupModalStyle.Header>
        <ChooseGroupModalStyle.Body>
          <ChooseGroupModalStyle.BodyTitle>
            그룹 선택
          </ChooseGroupModalStyle.BodyTitle>
          <ChooseGroupModalStyle.TeamSelectBox>
            {groupCategoryList.map((groupCategory) => (
              <ChooseGroupModalStyle.TeamContainer
                key={groupCategory.group.groupId}
                onClick={() => setSelectedGroupCategory(groupCategory)}
                $isSelected={
                  selectedGroupCategory?.group.groupId ===
                  groupCategory.group.groupId
                }
              >
                <img
                  src={groupCategory.group.groupImg}
                  alt={groupCategory.group.groupName}
                />
                <div>
                  <div>{groupCategory.group.groupName}</div>
                  <div>{groupCategory.group.groupName}</div>
                </div>
              </ChooseGroupModalStyle.TeamContainer>
            ))}
          </ChooseGroupModalStyle.TeamSelectBox>
          <ChooseGroupModalStyle.BtnWrapper>
            <ChooseGroupModalStyle.NextBtn
              $isSelected={
                selectedGroupCategory !== undefined &&
                selectedGroupCategory !== null
              }
              onClick={() => moveNextStepHandler()}
            >
              다음
            </ChooseGroupModalStyle.NextBtn>
          </ChooseGroupModalStyle.BtnWrapper>
        </ChooseGroupModalStyle.Body>
      </ChooseGroupModalStyle.Container>
    </ChooseGroupModalStyle.Wrapper>
  );
};
