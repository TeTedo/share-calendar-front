import { atom } from "recoil";

export const scheduleState = atom<IScheduleDto[]>({
  key: "scheduleState",
  default: [],
});
