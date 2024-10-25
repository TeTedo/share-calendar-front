import React, { Dispatch, SetStateAction, useState } from "react";
import { ChooseGroupModalStyle } from "./CalendarModal.style";

import groupList from "components/calendar/groupDummy.json";
import { useGetGroups } from "hooks/api/group/useGetGroups";

export const ChooseGroupModal = ({
  moveNextStep,
  setSelectedGroup,
  selectedGroup,
}: {
  moveNextStep: () => void;
  setSelectedGroup: Dispatch<SetStateAction<IGroupDto | undefined>>;
  selectedGroup: IGroupDto | undefined;
}) => {
  const { isSuccess, data } = useGetGroups();

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
            {data?.groupList.map((group) => (
              <ChooseGroupModalStyle.TeamContainer
                key={group.groupId}
                onClick={() => setSelectedGroup(group)}
                $isSelected={selectedGroup?.groupId === group.groupId}
              >
                <img src={group.groupImg} alt={group.groupName} />
                <div>
                  <div>{group.groupName}</div>
                  <div>{group.groupName}</div>
                </div>
              </ChooseGroupModalStyle.TeamContainer>
            ))}
          </ChooseGroupModalStyle.TeamSelectBox>
          <ChooseGroupModalStyle.BtnWrapper>
            <ChooseGroupModalStyle.NextBtn
              $isSelected={
                selectedGroup !== undefined && selectedGroup !== null
              }
              onClick={() => moveNextStep()}
            >
              다음
            </ChooseGroupModalStyle.NextBtn>
          </ChooseGroupModalStyle.BtnWrapper>
        </ChooseGroupModalStyle.Body>
      </ChooseGroupModalStyle.Container>
    </ChooseGroupModalStyle.Wrapper>
  );
};
