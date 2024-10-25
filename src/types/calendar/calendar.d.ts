interface IScheduleDetail {
  scheduleName: string;
  date: string;
  allDayYn: string;
  startAt: string;
  endAt: string;
  completeYn: string;
  category: ICategory;
}

interface IGroup {
  uuid: string;
}
