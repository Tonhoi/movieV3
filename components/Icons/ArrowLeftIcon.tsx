import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowLeftIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M328 112L184 256l144 144"
      />
    </SVGIconBase>
  );
};

export default ArrowLeftIcon;
