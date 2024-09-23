import { atom } from "recoil";

export const memberState = atom<TMemberDto>({
  key: "memberState",
  default: {
    uuid: "",
    name: "게스트",
    email: "게스트@datebook.com",
    profileImg: "",
    role: "",
    activated: true,
  },
});
