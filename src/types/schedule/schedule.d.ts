interface IScheduleDto {
  group: IGroupDto;
  creator: IGroupMemberDto;
  category: ICategoryDto;
  scheduleName: string;
  date: string;
  startAt: string;
  endAt: string;
  allDayYn: boolean;
  completeYn: boolean;
}

interface IAddScheduleRequest {
  groupId: number;
  categoryId: number;
  scheduleName: string;
  allDayYn: boolean;
  date: string;
  startAt?: string;
  endAt?: string;
}
