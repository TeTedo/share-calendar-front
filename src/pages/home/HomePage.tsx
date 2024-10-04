import React from "react";
import { useRecoilValue } from "recoil";
import { memberState } from "state/recoil/memberState";

export const HomePage = () => {
  const memberRecoilValue = useRecoilValue(memberState);

  return (
    <div>
      <img src={memberRecoilValue.profileImg} alt="" />
      <div>회원코드 : {memberRecoilValue.uuid}</div>
      <div>{memberRecoilValue.name}님 안녕하세요!</div>
    </div>
  );
};
