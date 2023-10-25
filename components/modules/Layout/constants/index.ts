import { v4 as uuidv4 } from "uuid";

import {
  AlertIcon,
  ConstrastOutline,
  FilmIcon,
  LogoutIcon,
  PhoneIcon,
  TvIcon,
  UserIcon,
} from "@/components/common";
import { MENU_TEXT, SETTING_THEME_TITLE } from "@/constants";
import { ROUTES } from "@/routers";

export const SETTING_ITEMS = [
  {
    id: uuidv4(),
    title:
      typeof window !== "undefined" && JSON.parse(localStorage.getItem("theme") as string)
        ? SETTING_THEME_TITLE.light
        : SETTING_THEME_TITLE.dark,
    start_icon: ConstrastOutline,
    type: "dark_mode",
    separate: true,
  },
  {
    id: uuidv4(),
    title: "Giới thiệu",
    start_icon: AlertIcon,
    separate: false,
    href: ROUTES.introduced,
  },
  {
    id: uuidv4(),
    title: "Liên hệ",
    start_icon: PhoneIcon,
    separate: false,
    href: ROUTES.contact,
  },
];

export const NAVITEM = [
  {
    start_icon: FilmIcon,
    href: ROUTES.movie,
    title: MENU_TEXT.movie,
  },
  {
    start_icon: TvIcon,
    href: ROUTES.tv,
    title: MENU_TEXT.tv,
    divider: true,
  },

  ...SETTING_ITEMS,

  {
    start_icon: UserIcon,
    href: ROUTES.account,
    title: "Trang cá nhân",
  },

  {
    start_icon: LogoutIcon,
    title: "Đăng xuất",
    is_login_button: true,
  },
];
