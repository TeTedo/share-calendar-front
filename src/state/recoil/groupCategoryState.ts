import { atom } from "recoil";

export const groupCategoryState = atom<IGroupCategoryDto[]>({
  key: "groupCategoryState",
  default: [],
});

export const addCategoryToGroup = (groupId: number, newCategory: ICategoryDto) => {
  return (currentState: IGroupCategoryDto[]) => 
    currentState.map((groupCategory) => {
      if (groupCategory.group.groupId === groupId) {
        return {
          ...groupCategory,
          categoryList: [...groupCategory.categoryList, newCategory],
        };
      }
      return groupCategory;
    });
};