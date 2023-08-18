import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const MoonIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </SVGIconBase>
  );
};

export default MoonIcon;