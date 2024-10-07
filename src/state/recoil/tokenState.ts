import { atom } from "recoil";

export const tokenState = atom<TTokenDto>({
  key: "tokenState",
  default: {
    access: "",
  },
});
