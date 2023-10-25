import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const HeartIcon = (props: SvgIconProps) => {
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
      <title>icon_like_gray</title>
      <g id="控件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="stroke_color" stroke="#828387" strokeWidth="2">
          <g id="编组">
            <path
              d="M16.3667196,5.00154561 C17.4245684,5.00215572 18.4815783,5.40669448 19.2874332,6.21441069 C20.0707444,6.99953099 20.4749039,8.01986308 20.499789,9.04770023 C20.5246219,10.0733823 20.1721086,11.1066937 19.4414644,11.9209207 L19.4414644,11.9209207 L12.3569259,19.0301895 L4.71256676,12.083677 C3.90351184,11.2727534 3.49898438,10.2108986 3.49898438,9.14904382 C3.49898438,8.08718904 3.90351184,7.02533425 4.71256676,6.21441069 C5.49266979,5.43250589 6.50810888,5.02836123 7.53148149,5.00236292 C8.55300732,4.97641153 9.582595,5.32690031 10.3936303,6.05488288 L10.3936303,6.05488288 L12.0035388,7.65220921 L13.4407618,6.21185343 C14.2501751,5.40430336 15.3087969,5.00093545 16.3667196,5.00154561 Z"
              id="路径"
              // fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </SVGIconBase>
  );
};

export default HeartIcon;
