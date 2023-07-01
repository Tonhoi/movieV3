import { ClockIcon, FilmIcon, GlobeIcon, TvIcon, UserIcon } from "./components";
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
    icon: ClockIcon,
    href: ROUTES.history,
    title: "History",
    divider: true,
  },
  {
    icon: GlobeIcon,
    href: "/",
    title: "Language",
  },
  {
    icon: UserIcon,
    href: ROUTES.me,
    title: "Me",
  },
];

