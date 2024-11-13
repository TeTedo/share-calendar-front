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

interface IChangeGroupImgResponse {
  group: IGroupDto;
}
