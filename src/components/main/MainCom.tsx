import React, { useEffect, useState } from "react";
import { Style } from "./Main.style";
import { useRecoilValue } from "recoil";
import { scheduleState } from "state/recoil/scheduleState";
import moment from "moment";
import { MainComDetail } from "./MainComDetail";

export const MainCom = () => {
  const scheduleList = useRecoilValue(scheduleState);
  const [groupingSchedule, setGroupingSchedule] = useState<IGroupingSchedule>(
    {}
  );

  useEffect(() => {
    const grouping: IGroupingSchedule = {};

    const today = moment(moment(new Date()).format("YYYY-MM-DD"));
    const sevenDaysFromToday = moment(today.clone()).add(7, "days");

    const afterTodayScheduleList = scheduleList.filter((schedule) => {
      const scheduleDate = moment(moment(schedule.date).format("YYYY-MM-DD"));
      return (
        scheduleDate.isSameOrAfter(today) &&
        scheduleDate.isSameOrBefore(sevenDaysFromToday)
      );
    });

    afterTodayScheduleList.forEach((schedule) => {
      const groupId = schedule.group.groupId.toString();

      if (!grouping[groupId]) {
        grouping[groupId] = {
          groupUuid: schedule.group.groupUuid,
          groupName: schedule.group.groupName,
          groupImg: schedule.group.groupImg,
          groupType: schedule.group.groupType,
          groupDesc: schedule.group.groupDesc,
          schedules: {},
        };
      }

      if (!grouping[groupId].schedules[schedule.date]) {
        grouping[groupId].schedules[schedule.date] = [];
      }

      grouping[groupId].schedules[schedule.date].push(schedule);
    });

    setGroupingSchedule(grouping);
  }, [scheduleList]);

  return (
    <Style.Wrapper>
      {Object.keys(groupingSchedule).map((groupId) => (
        <MainComDetail key={groupId} groupingList={groupingSchedule[groupId]} />
      ))}
    </Style.Wrapper>
  );
};
