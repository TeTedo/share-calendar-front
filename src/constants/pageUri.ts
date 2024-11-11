const ROOT = "/";

const LANDING = "/landing";
const HOME = "/home";
const CALENDAR = "/calendar";
const GROUP = "/group";
const SETTING = "/setting";
const LOGIN = "/login/:platform";
const NOT_FOUND = "/*";
const ERROR = "/error";
const INVITATION = "/invite/:groupCode/:groupName";

const GROUP_MANAGE = "/group/manage";

export const PAGE_URI = {
  HOME,
  CALENDAR,
  GROUP,
  SETTING,
  LANDING,
  ROOT,
  LOGIN,
  NOT_FOUND,
  ERROR,
  GROUP_MANAGE,
  INVITATION,
};
