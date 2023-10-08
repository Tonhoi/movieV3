interface EmbededProps {
  className?: string;
  width?: string;
  height?: string;
  id: string | string[] | undefined;
  type: string | string[] | undefined;
  season: string | string[] | undefined;
  episode: string | string[] | undefined;
  trailer?: boolean;
}

const domainMovie = "https://autoembed.to";

const Embeded = (props: EmbededProps) => {
  const {
    className,
    width = "100%",
    height = "100%",
    id,
    type,
    season,
    episode,
    trailer = false,
  } = props;

  const checkTypeMovie = type == "tv" ? `-${season}-${episode}` : "";

  const enableTrailerMovie = trailer ? 1 : 0;

  const source = `${domainMovie}/${type}/tmdb/${id}${checkTypeMovie}?trailer=${enableTrailerMovie}`;

  return (
    <iframe
      width={width}
      height={height}
      src={source}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={className}
    ></iframe>
  );
};

export default Embeded;
