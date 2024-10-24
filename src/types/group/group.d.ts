interface IGroupListDto {
  list: IGetGroupByMemberDto[];
}

interface IGetGroupByMemberDto {
  group: IGroupDto;
  categoryList: ICategoryDto[];
}

interface IGroupDto {
  groupId: number;
  groupUuid: string;
  groupName: string;
  groupImg: string;
}
