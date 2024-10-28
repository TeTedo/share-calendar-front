import { atom } from "recoil";

export const tokenState = atom<ITokenDto>({
  key: "tokenState",
  default: {
    access: null,
  },
});
