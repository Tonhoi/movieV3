const usePoster = (poster_path: string) => {
  const poster = `https://image.tmdb.org/t/p//w300${poster_path}`;
  return poster;
};

export default usePoster;
