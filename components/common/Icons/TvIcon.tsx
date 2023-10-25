import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const TvIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase viewBox="0 0 512 512" {...props}>
      <rect
        x="32"
        y="96"
        width="448"
        height="272"
        rx="32.14"
        ry="32.14"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M128 416h256"
      />
    </SVGIconBase>
  );
};

export default TvIcon;
