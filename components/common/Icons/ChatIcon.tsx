import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ChatIcon = (props: SvgIconProps) => {
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
      <title>icon_comment_gray</title>
      <g id="控件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="评论/回复" stroke="#828387" strokeWidth="2">
          <g id="编组" transform="translate(3.503068, 5.000000)">
            <path
              d="M15.9969316,1 L15.9969316,12 L10.8761996,12 L8.49832702,14.5363974 L6.11726667,12 L1,12 L1,1 L15.9969316,1 Z"
              id="矩形"
            ></path>
          </g>
        </g>
      </g>
    </SVGIconBase>
  );
};

export default ChatIcon;
