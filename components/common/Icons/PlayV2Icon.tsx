import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const PlayV2Icon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="icon/Play" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <path
          d="M14.2480754,6.37211316 L20.9452998,16.4179497 C21.4048285,17.1072427 21.2185677,18.0385468 20.5292747,18.4980754 C20.2828734,18.662343 19.9933618,18.75 19.6972244,18.75 L6.30277564,18.75 C5.47434851,18.75 4.80277564,18.0784271 4.80277564,17.25 C4.80277564,16.9538625 4.89043268,16.664351 5.0547002,16.4179497 L11.7519246,6.37211316 C12.2114532,5.68282013 13.1427573,5.49655933 13.8320503,5.95608802 C13.9968287,6.0659403 14.1382232,6.20733473 14.2480754,6.37211316 Z"
          id="Triangle"
          fill="#FFFFFF"
          transform="translate(13.000000, 11.625000) rotate(-270.000000) translate(-13.000000, -11.625000) "
        ></path>
      </g>
    </SVGIconBase>
  );
};

export default PlayV2Icon;
