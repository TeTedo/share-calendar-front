interface IGroupListDto {
  groupList: IGroupDto[];
}

interface IGroupDto {
  groupId: number;
  groupUuid: string;
  groupName: string;
  groupImg: string;
  groupMemberCount: number;
}

interface IGroupMemberDto {
  groupNickname: string;
  groupProfileImg: string;
  groupRole: string;
}
