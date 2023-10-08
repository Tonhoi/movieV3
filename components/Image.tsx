import { forwardRef } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import imageError from "@/public/image/no-poster-available.jpg";

type OmitKey = "alt";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface ImageProps extends Omit<NextImageProps, OmitKey> {
  alt?: string;
  fallback?: any;
}

const Image = forwardRef<any, ImageProps>(function Image(props: ImageProps, ref) {
  const { alt, fill = true, width, height, fallback, ...restProps } = props;

  return (
    <NextImage
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : width}
      blurDataURL={defaultBlurDataURL}
      alt={alt || ""}
      {...restProps}
      ref={ref}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.srcset = fallback?.src ?? imageError.src;
      }}
    />
  );
});

export default Image;
