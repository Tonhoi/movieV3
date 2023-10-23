import { FilmIcon, TvIcon, UserIcon, AlertIcon, PhoneIcon } from "./components";
import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "./routers";
import LogoutIcon from "./components/Icons/LogoutIcon";
import ConstrastOutline from "./components/Icons/ConstrastOutline";

export const SETTING_THEME_TITLE = {
  dark: "Giao diện màu tối",
  light: "Giao diện màu sáng",
};

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
    title: "Phim lẻ",
  },
  {
    start_icon: TvIcon,
    href: ROUTES.tv,
    title: "Phim bộ",
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
