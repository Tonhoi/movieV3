const useThumbnail = (backdrop_path: string) => {
  const thumbnail = `https://image.tmdb.org/t/p//w1280${backdrop_path}`;

  return thumbnail;
};

export default useThumbnail;
