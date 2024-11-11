import React, { useEffect, useState } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { CalendarTopBar } from "components/calendar/CalendarTopBar";
import { AdMain } from "components/advertisement/AdMain";
import { Calendar } from "components/calendar/Calendar";
import { CalendarProfile } from "components/calendar/CalendarProfile";
import moment, { Moment } from "moment";
import { useGetGroupMember } from "hooks/api/group/useGetGroupMember";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [currentGroup, setCurrentGroup] = useState<IGroupDto | null>(null);
  const [groupMember, setGroupMember] = useState<IGroupMemberDto | null>(null);

  const groupCategoryList = useRecoilValue(groupCategoryState);

  const { data: groupMemberData, isSuccess: successGetGroupMember } =
    useGetGroupMember(currentGroup);

  useEffect(() => {
    if (groupCategoryList.length > 0) {
      setCurrentGroup(groupCategoryList[0].group); // Initialize with the first group
    }
  }, [groupCategoryList]);

  useEffect(() => {
    if (successGetGroupMember && groupMemberData) {
      setGroupMember(groupMemberData.groupMember);
    }
  }, [successGetGroupMember, groupMemberData]);

  if (!successGetGroupMember) return <></>;

  return (
    <CalendarPageWrapper>
      <CalendarTopBar
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        setCurrentGroup={setCurrentGroup}
      />
      <AdMain />
      <CalendarProfile groupMember={groupMember} />
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </CalendarPageWrapper>
  );
};
