import { InviteGroupModal } from "components/modal/applyGroup/InviteGroupModal";
import { useGetGroupsWithCategories } from "hooks/api/group/useGetGroupsWithCategories";
import { useGetAllSchedules } from "hooks/api/schedule/useGetAllSchedules";
import { useLoginCheck } from "hooks/loginCheck/useLoginCheck";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { TanstackQueryProvider } from "provider/TanstackQueryProvider";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { Router } from "router/Router";
import { groupCategoryState } from "state/recoil/groupCategoryState";
import { scheduleState } from "state/recoil/scheduleState";
import { tokenState } from "state/recoil/tokenState";

function AppContent() {
  const tokenRecoil = useRecoilValue(tokenState);
  const setScheduleList = useSetRecoilState(scheduleState);
  const setGroupAndCategory = useSetRecoilState(groupCategoryState);

  useLoginCheck();

  const [groupCode, setGroupCode] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");

  const { modal, setIsOpen } = useBaseModal({
    children: [
      <InviteGroupModal
        groupCode={groupCode}
        groupName={groupName}
        setIsOpen={(isOpen: boolean) => setIsOpen(isOpen)}
      />,
    ],
    closeCallBack: () => {},
    isBackgroundBlack: true,
    isCenter: true,
  });

  const { data: schedules, isSuccess: successScheduleList } =
    useGetAllSchedules(tokenRecoil);
  const { data: groupWithCategories, isSuccess: successGroupCategory } =
    useGetGroupsWithCategories(tokenRecoil);
  useEffect(() => {
    if (successScheduleList) {
      setScheduleList(schedules.scheduleList);
    }
  }, [successScheduleList]);
  useEffect(() => {
    if (successGroupCategory) {
      setGroupAndCategory(groupWithCategories.list);
    }
  }, [successGroupCategory]);
  useEffect(() => {
    if (tokenRecoil.access === null) return;
    const groupCode = sessionStorage.getItem("groupCode");
    const groupName = sessionStorage.getItem("groupName");

    if (!groupCode || !groupName) return;

    setGroupCode(groupCode);
    setGroupName(groupName);
    setIsOpen(true);
  }, [tokenRecoil]);
  return <>{modal}</>;
}

function App() {
  return (
    <RecoilRoot>
      <TanstackQueryProvider>
        <BrowserRouter>
          <AppContent />
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </TanstackQueryProvider>
    </RecoilRoot>
  );
}

export default App;
