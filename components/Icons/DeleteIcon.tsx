import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const DeleteIcon = (props: SvgIconProps) => {
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
      <title>icon_delate_gray</title>
      <g id="控件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="评论/删除" fill="#828387" fillRule="nonzero">
          <g id="编组" transform="translate(4.000000, 3.500000)">
            <path
              d="M15.5,1.5 C15.7761424,1.5 16,1.72385763 16,2 L16,3 C16,3.27614237 15.7761424,3.5 15.5,3.5 L14.844,3.5 L13.9409532,15.1163154 C13.8802122,15.8972712 13.2287843,16.5 12.4454698,16.5 L3.5545302,16.5 C2.77121575,16.5 2.11978776,15.8972712 2.05904675,15.1163154 L1.156,3.5 L0.5,3.5 C0.223857625,3.5 3.38176876e-17,3.27614237 0,3 L0,2 C-3.38176876e-17,1.72385763 0.223857625,1.5 0.5,1.5 L4.4,1.5 L4.87427814,0.314304662 C4.95020981,0.124475472 5.13406419,3.75572772e-17 5.33851648,0 L10.6614835,0 C10.8659358,-5.37157638e-16 11.0497902,0.124475472 11.1257219,0.314304662 L11.599,1.5 L15.5,1.5 Z M12.838,3.5 L3.161,3.5 L4.017,14.5 L11.982,14.5 L12.838,3.5 Z"
              id="形状结合"
            ></path>
          </g>
        </g>
      </g>
    </SVGIconBase>
  );
};

export default DeleteIcon;
