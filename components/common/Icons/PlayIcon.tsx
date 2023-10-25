import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const PlayIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g
        id="Btn/Play/Normal"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <circle id="bg" fill="#1CC749" cx="30" cy="30" r="30"></circle>
        <path
          d="M35.7461509,22.4942263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.25 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.7538491,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.662176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z"
          id="Triangle"
          fill="#FFFFFF"
          transform="translate(33.250000, 30.000000) rotate(-270.000000) translate(-33.250000, -30.000000) "
        ></path>
      </g>
    </SVGIconBase>
  );
};

export default PlayIcon;
