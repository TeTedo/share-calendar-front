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
