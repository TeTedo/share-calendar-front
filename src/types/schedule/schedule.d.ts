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
