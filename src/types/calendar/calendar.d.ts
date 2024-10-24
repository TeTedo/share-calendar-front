interface IScheduleDetail {
  scheduleName: string;
  date: string;
  allDayYn: string;
  startAt: string;
  endAt: string;
  completeYn: string;
  category: ICategory;
}

interface ICategory {
  id: number;
  categoryName: string;
  categoryMainColor: string;
  categorySubColor: string;
}

interface IGroup {
  uuid: string;
}
