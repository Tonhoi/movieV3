import {
  FilmIcon,
  TvIcon,
  UserIcon,
  ThemeIcon,
  SunIcon,
  MoonIcon,
  AlertIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "./components";
import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "./routers";
import LogoutIcon from "./components/Icons/LogoutIcon";

export const NAVITEM = [
  {
    start_icon: FilmIcon,
    href: ROUTES.movie,
    title: "Movie",
  },
  {
    start_icon: TvIcon,
    href: ROUTES.tv,
    title: "Tv",
    divider: true,
  },
  {
    start_icon: UserIcon,
    href: ROUTES.account,
    title: "Trang cá nhân",
  },
  {
    start_icon: AlertIcon,
    href: ROUTES.introduced,
    title: "Giới thiệu",
  },
  {
    start_icon: PhoneIcon,
    href: ROUTES.contact,
    title: "Liên hệ",
  },
  {
    start_icon: ThemeIcon,
    end_icon: ArrowRightIcon,
    title: "Giao diện",
    child: [
      {
        title: "Sáng",
        start_icon: SunIcon,
        separate: false,
      },
      {
        title: "Tối",
        start_icon: MoonIcon,
        separate: false,
      },
    ],
  },
  {
    start_icon: LogoutIcon,
    title: "Đăng xuất",
    is_login_button: true,
  },
];

export const SETTING_ITEMS = [
  {
    id: uuidv4(),
    title: "Giao diện",
    start_icon: ThemeIcon,
    end_icon: ArrowRightIcon,
    separate: true,
    child: [
      {
        id: uuidv4(),
        title: "Sáng",
        start_icon: SunIcon,
        separate: false,
      },
      {
        id: uuidv4(),
        title: "Tối",
        start_icon: MoonIcon,
        separate: false,
      },
    ],
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
