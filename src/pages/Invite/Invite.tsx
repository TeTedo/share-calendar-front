import { PAGE_URI } from "constants/pageUri";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "state/recoil/tokenState";

export const Invite = () => {
  const nav = useNavigate();
  const param = useParams();

  const token = useRecoilValue(tokenState);
  const groupCode = param.groupCode;

  useEffect(() => {
    nav(PAGE_URI.GROUP, { state: { inviteCode: groupCode } });
  }, [token]);

  return <div>Invitation</div>;
};
