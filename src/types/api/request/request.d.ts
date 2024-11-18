interface IAddGroupRequest {
  groupName: string;
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

interface IPatchGroupProfileRequest {
  formData: FormData;
}
