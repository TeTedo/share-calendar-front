interface IGroupListDto {
  groupList: IGroupDto[];
}

interface IGroupDto {
  groupId: number;
  groupUuid: string;
  groupName: string;
  groupImg: string;
}
