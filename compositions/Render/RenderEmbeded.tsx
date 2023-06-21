import { useMedia } from "@/hooks";
import { useMeasure } from "react-use";
import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { extract, VideoTypeData } from "oembed-parser";

import { Box } from "@mui/material";

interface RenderEmbededProps {
  width?: string;
  height?: string;
  video: string;
}

const RenderEmbeded = (props: RenderEmbededProps) => {
  const { video } = props;
  const { isMdDown } = useMedia();

  const [data, setData] = useState<VideoTypeData>();
  const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    extract(video)
      .then((oembed) => {
        setData(oembed as VideoTypeData);
      })
      .catch(() => {
        //
      });
  }, [video]);

  if (data == undefined) return null;

  // const { width: videoWidth, height: videoHeight } = data;
  // const VIDEO_RATIO = videoWidth / videoHeight;

  // const defaultWidth = containerWidth < 500 ? containerWidth : 500;

  // const frameWidth = parseInt(props.width || "0") || defaultWidth;

  // const finalWidth =
  //   isMdDown || containerWidth < frameWidth ? containerWidth : frameWidth;

  // const finalHeight = finalWidth / VIDEO_RATIO;

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "100%",
        ["& iframe"]: {
          width: "100%",
          height: "100%",
        },
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(data.html, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: [
            "allow",
            "allowfullscreen",
            "frameborder",
            "scrolling",
            "playsinline",
            "modestbranding"
          ],
        }),
      }}
    />
  );
};

export default RenderEmbeded;
