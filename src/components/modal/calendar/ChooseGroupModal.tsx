import React, { useState } from "react";
import { ChooseGroupModalStyle } from "./CalendarModal.style";

import groupList from "components/calendar/groupDummy.json";

export const ChooseGroupModal = ({
  moveNextStep,
}: {
  moveNextStep: () => void;
}) => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>("");

  return (
    <ChooseGroupModalStyle.Wrapper>
      <ChooseGroupModalStyle.Container>
        <ChooseGroupModalStyle.Header>
          새로운 일정 추가
        </ChooseGroupModalStyle.Header>
        <ChooseGroupModalStyle.Body>
          <ChooseGroupModalStyle.BodyTitle>
            팀 선택
          </ChooseGroupModalStyle.BodyTitle>
          <ChooseGroupModalStyle.TeamSelectBox>
            {groupList.map((group) => (
              <ChooseGroupModalStyle.TeamContainer
                key={group.groupId}
                onClick={() => setSelectedGroupId(group.groupId)}
                $isSelected={selectedGroupId === group.groupId}
              >
                <img
                  src={group.groupProfileImg}
                  alt={group.groupProfileImgAlt}
                />
                <div>
                  <div>{group.groupName}</div>
                  <div>{group.groupDesc}</div>
                </div>
              </ChooseGroupModalStyle.TeamContainer>
            ))}
          </ChooseGroupModalStyle.TeamSelectBox>
          <ChooseGroupModalStyle.BtnWrapper>
            <ChooseGroupModalStyle.NextBtn
              $isSelected={
                selectedGroupId !== null && selectedGroupId.length > 0
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
