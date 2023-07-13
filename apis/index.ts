const PREFIX = "api/v2";
const CONTACTS = "api/v2/contacts";

const PAGES = "pages";

const generatePathname = (data: string[]): string => {
  const arr = [...data];
  return `/${arr.join("/")}/`;
};

export const TYPE_PARAMS = {
  ["discover_movie"]: "/discover/movie",
  ["discover_tv"]: "/discover/tv",
  ["movie_popular"]: "/movie/popular",
  ["upcoming"]: "/movie/upcoming",
  ["trending_movie"]: "/trending/all/day",
  ["trending_person"]: "/trending/person/day",
  ["airing_today"]: "/tv/airing_today",
  ["now_playing"]: "/movie/now_playing",
  ["search_multi"]: "/search/multi",
} as const;

export const PAGES_API = generatePathname([PAGES]);
