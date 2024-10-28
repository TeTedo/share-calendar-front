import React, { useEffect, useState } from "react";
import { CalendarPageWrapper } from "./CalendarPage.style";
import { CalendarTopBar } from "components/calendar/CalendarTopBar";
import { AdMain } from "components/advertisement/AdMain";
import { Calendar } from "components/calendar/Calendar";
import { CalendarProfile } from "components/calendar/CalendarProfile";
import moment, { Moment } from "moment";
import { useGetGroups } from "hooks/api/group/useGetGroups";
import { useGetGroupMember } from "hooks/api/group/useGetGroupMember";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [currentGroup, setCurrentGroup] = useState<IGroupDto | null>(null);
  const [groupMember, setGroupMember] = useState<IGroupMemberDto | null>(null);

  const { data: groupList, isSuccess: successGetGroup } = useGetGroups();
  const { data: groupMemberData, isSuccess: successGetGroupMember } =
    useGetGroupMember(currentGroup);

  useEffect(() => {
    if (successGetGroup && groupList && groupList.groupList.length > 0) {
      setCurrentGroup(groupList.groupList[0]); // Initialize with the first group
    }
  }, [successGetGroup, groupList]);

  useEffect(() => {
    if (successGetGroupMember && groupMemberData) {
      setGroupMember(groupMemberData.groupMember);
    }
  }, [successGetGroupMember, groupMemberData]);

  if (!successGetGroup || !successGetGroupMember) return <></>;
  return (
    <CalendarPageWrapper>
      <CalendarTopBar
        currentDate={currentDate}
        groupList={groupList}
        setCurrentGroup={setCurrentGroup}
      />
      <AdMain />
      <CalendarProfile
        groupMember={groupMember}
        groupMemberCount={groupMemberData.groupMemberCount}
      />
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </CalendarPageWrapper>
  );
};
