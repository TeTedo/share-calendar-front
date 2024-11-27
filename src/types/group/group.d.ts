interface IGroupListDto {
  groupList: IGroupDto[];
}

interface IGroupDto {
  groupId: number;
  groupUuid: string;
  groupName: string;
  groupImg: string;
  groupType: string;
  groupDesc: string;
}

interface IGroupMemberDto {
  groupMemberId: number;
  groupNickname: string;
  groupProfileImg: string;
  groupRole: string;
}

interface IGetGroupMemberResponse {
  groupMember: IGroupMemberDto;
  groupMemberCount: number;
}

interface IGroupCategoryDto {
  group: IGroupDto;
  categoryList: ICategoryDto[];
  groupMemberCount: number;
}
