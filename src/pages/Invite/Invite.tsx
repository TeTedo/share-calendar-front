import { PAGE_URI } from "constants/pageUri";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Invite = () => {
  const nav = useNavigate();
  const param = useParams();
  const toast = useToastCustom();
  const groupCode = param.groupCode;
  const groupName = param.groupName;

  useEffect(() => {
    if (!groupCode || !groupName || groupCode?.length < 6) {
      toast("잘못된 접근입니다.", ToastType.ERROR);
      nav("/landing");
      return;
    }

    sessionStorage.setItem("groupCode", groupCode);
    sessionStorage.setItem("groupName", groupName);
    nav(PAGE_URI.LANDING, { state: { inviteCode: groupCode } });
  }, []);

  return <div>Invitation</div>;
};
