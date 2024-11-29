interface IGetGroupWithCategories {
  list: IGroupCategoryDto[];
}

interface IAddGroupResponse {
  groupCategory: IGroupCategoryDto;
}

interface IGetAllGroupMemberResponse {
  groupMemberList: IGroupMemberDto[];
}

interface IAddCategoryResponse {
  category: ICategoryDto;
}

interface IProcessApplyResponse {
  groupApplication: IGroupApplicationDto;
}

interface IPatchGroupImgResponse {
  group: IGroupDto;
}

interface IPatchGroupProfileResponse {
  groupMember: IGroupMemberDto;
}

interface IPatchGroupMemberRoleResponse {
  groupMember: IGroupMemberDto;
}

interface IDeleteGroupMemberResponse {
  code: string;
}

interface IPatchMemberInfoResponse {
  member: IMemberDto;
}
