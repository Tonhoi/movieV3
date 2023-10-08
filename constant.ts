import {
  FilmIcon,
  GlobeIcon,
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

export const NAVITEM = [
  {
    icon: FilmIcon,
    href: ROUTES.movie,
    title: "Movie",
  },
  {
    icon: TvIcon,
    href: ROUTES.tv,
    title: "Tv",
  },
  {
    icon: UserIcon,
    href: ROUTES.personal,
    title: "Trang cá nhân",
    divider: true,
  },
  {
    icon: GlobeIcon,
    href: "/language",
    title: "Language",
  },
];

export const COUNTRYOPTIONS = [
  { value: "vi-VN", label: "vietnamese" },
  { value: "en-US", label: "English" },
];

export const YEAROPTIONS = [
  {
    value: undefined,
    label: "Tất cả các năm",
  },
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2018",
    label: "2018",
  },
  {
    value: "2017",
    label: "2017",
  },
  {
    value: "2016",
    label: "2016",
  },
  {
    value: "2015",
    label: "2015",
  },
  {
    value: "2014",
    label: "2014",
  },
  {
    value: "2013",
    label: "2013",
  },
  {
    value: "2012",
    label: "2012",
  },
  {
    value: "2011",
    label: "2011",
  },
  {
    value: "2010",
    label: "2010",
  },
];

export const VOTEAVERAGEOPTIONS = [
  {
    value: undefined,
    label: "Tất cả số điểm",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
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
    href: "/",
  },
  {
    id: uuidv4(),
    title: "Liên hệ",
    start_icon: PhoneIcon,
    separate: false,
    href: "/",
  },
];
