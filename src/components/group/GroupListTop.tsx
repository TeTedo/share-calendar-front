import React from "react";
import { Style } from "./GroupListTop.style";
import { useNavigate } from "react-router-dom";
import { PAGE_URI } from "constants/pageUri";

interface IGroupListTop {
  name: string;
}
export const GroupListTop = ({ name }: IGroupListTop) => {
  const nav = useNavigate();
  return (
    <Style.Wrapper>
      <div>
        {name === "그룹 설정" ? (
          <Style.GoBackContainer onClick={() => nav(PAGE_URI.GROUP)}>
            <img src="/icon/left_arrow_icon.svg" alt="뒤로가기" />
            <div>그룹 목록</div>
          </Style.GoBackContainer>
        ) : (
          ""
        )}
      </div>
      <div>{name}</div>
      <div>
        <img src="/icon/alarm_icon.svg" alt="알람" />
      </div>
    </Style.Wrapper>
  );
};
