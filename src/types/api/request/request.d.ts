interface IAddGroupRequest {
  groupName: string;
  groupDesc: string;
}

interface IAddCategoryRequest {
  categoryName: string;
  categoryMainColor: string;
  categorySubColor: string;
}

interface IProcessApplyRequest {
  groupApplicationId: number;
  acceptState: TAcceptState;
}

interface IPatchGroupImgRequest {
  formData: FormData;
}

interface IPatchGroupMemberRoleRequest {}
interface IDeleteGroupMemberRequest {}

interface IPatchGroupProfileRequest {
  formData: FormData;
}

interface IPatchMemberInfoRequest {
  formData: FormData;
}
