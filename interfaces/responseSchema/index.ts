type responseSchema<T> = {
  page: number | null;
  results: T[];
  total_pages: number | null;
  total_results: number | null;
};

interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
}

export type { responseSchema, IPage };
