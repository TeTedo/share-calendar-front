import { atom } from "recoil";

export const groupCategoryState = atom<IGroupCategoryDto[]>({
  key: "groupCategoryState",
  default: [],
});
