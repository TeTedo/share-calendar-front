interface IGroupingSchedule {
  [key: string]: IGroupingScheduleDetail;
}

interface IGroupingScheduleDetail {
  groupUuid: string;
  groupName: string;
  groupImg: string;
  groupType: string;
  groupDesc: string;
  schedules: {
    [date: string]: IScheduleDto[];
  };
}
