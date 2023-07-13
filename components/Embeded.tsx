import { useParams } from "@/hooks/useParams";
import { useRouter } from "next/router";

interface EmbededProps {
  src: string;
  className?: string;
}

const Embeded = (props: EmbededProps) => {
  const { src, className } = props;

  return (
    <iframe
      width="100%"
      height="100%"
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
