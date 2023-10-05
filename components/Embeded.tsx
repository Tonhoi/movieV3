interface EmbededProps {
  src: string;
  className?: string;
  width?: string;
  height?: string;
}

const Embeded = (props: EmbededProps) => {
  const { src, className, width = "100%", height = "100%" } = props;

  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={className}
    ></iframe>
  );
};

export default Embeded;
