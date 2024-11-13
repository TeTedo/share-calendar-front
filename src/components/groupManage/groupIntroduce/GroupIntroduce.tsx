import React from "react";
import { Style } from "../GroupManage.style";

interface IGroupIntroduceProps {
  group: IGroupDto;
}

export const GroupIntroduce = ({ group }: IGroupIntroduceProps) => {
  return (
    <Style.GroupMainContainer>
      <Style.DetailContainer $backgroundColor="#f4f4f4">
        <div>
          <div>그룹명</div>
          <div>{group.groupName}</div>
        </div>
        <div>
          <div>그룹 코드</div>
          <div>{group.groupUuid}</div>
        </div>
      </Style.DetailContainer>
      <Style.DetailContainer>
        <div>
          <div>소개</div>
          <div>{group.groupName}</div>
        </div>
        <div></div>
      </Style.DetailContainer>
    </Style.GroupMainContainer>
  );
};
