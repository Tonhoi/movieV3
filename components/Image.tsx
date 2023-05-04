import { forwardRef } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type OmitKey = "alt";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface ImageProps extends Omit<NextImageProps, OmitKey> {
  alt?: string;
}

const Image = forwardRef<any, ImageProps>(function Image(props: ImageProps) {
  const { alt, fill = true, width, height, ...restProps } = props;

  return (
    <NextImage
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : width}
      blurDataURL={defaultBlurDataURL}
      alt={alt || ""}
      {...restProps}
    />
  );
});

export default Image;
