import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowRightIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M184 112l144 144-144 144"
      />
    </SVGIconBase>
  );
};

export default ArrowRightIcon;
