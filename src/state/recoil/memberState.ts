import { atom } from "recoil";

export const memberState = atom<IMemberDto>({
  key: "memberState",
  default: {
    uuid: "guest",
    name: "게스트",
    email: "게스트@datebook.com",
    profileImg: "",
    role: "",
    activated: true,
  },
});
