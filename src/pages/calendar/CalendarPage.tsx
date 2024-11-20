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
import { memberState } from "state/recoil/memberState";
import { scheduleState } from "state/recoil/scheduleState";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [currentGroup, setCurrentGroup] = useState<IGroupDto | null>(null);
  const [groupMember, setGroupMember] = useState<IGroupMemberDto | null>(null);
  const [scheduleList, setScheduleList] = useState<IScheduleDto[]>([]);

  const scheduleListRecoil = useRecoilValue(scheduleState);
  const memberRecoil = useRecoilValue(memberState);

  useEffect(() => {
    setScheduleList(scheduleListRecoil);
  }, [scheduleListRecoil]);

  const { data: groupMemberData, isSuccess: successGetGroupMember } =
    useGetGroupMember(currentGroup);

  useEffect(() => {
    if (currentGroup === null) {
      setGroupMember({
        groupNickname: memberRecoil.name,
        groupProfileImg: memberRecoil.profileImg,
        groupRole: "default",
      } as IGroupMemberDto);
    }

    if (successGetGroupMember && groupMemberData && currentGroup) {
      setGroupMember(groupMemberData.groupMember);
    }
  }, [successGetGroupMember, groupMemberData, currentGroup, memberRecoil]);

  return (
    <CalendarPageWrapper>
      <CalendarTopBar
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        setCurrentGroup={setCurrentGroup}
        currentGroup={currentGroup}
        setScheduleList={setScheduleList}
      />
      <AdMain />
      <CalendarProfile
        groupMember={groupMember}
        currentGroup={currentGroup}
        setGroupMember={setGroupMember}
      />
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        scheduleList={scheduleList}
      />
    </CalendarPageWrapper>
  );
};
