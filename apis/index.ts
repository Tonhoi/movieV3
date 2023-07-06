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

  "library.LibraryListingPage": "library.LibraryListingPage",
  "library.LibraryDetailPage": "library.LibraryDetailPage",

  "faq.FAQPage": "faq.FAQPage",
} as const;

export const PAGES_API = generatePathname([PAGES]);
