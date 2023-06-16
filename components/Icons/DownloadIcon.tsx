import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const DownloadIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="22px" height="22px" viewBox="0 0 22 22" version="1.1" {...props}>
      <title>Download</title>
      <g id="切图" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icon/download/normal">
          <rect
            id="icon/download"
            fill="#D8D8D8"
            opacity="0"
            x="0"
            y="0"
            width="22"
            height="22"
          ></rect>
          <g id="编组-5" transform="translate(3.000000, 3.000000)" fill="#FFFFFF">
            <rect id="矩形" x="0" y="14" width="16.8" height="1.8" rx="0.5"></rect>
            <rect id="矩形" x="0" y="0" width="16.8" height="1.8" rx="0.5"></rect>
            <rect id="矩形" x="0" y="0" width="1.8" height="15.8" rx="0.5"></rect>
            <rect id="矩形" x="15" y="0" width="1.8" height="15.8" rx="0.5"></rect>
            <path
              d="M9,3.5 C9.27614237,3.5 9.5,3.72385763 9.5,4 L9.49910678,9.02 L10.5090031,8.01057599 C10.7042653,7.81531385 11.0208478,7.81531385 11.2161099,8.01057599 L11.6875144,8.48198052 C11.8827766,8.67724266 11.8827766,8.99382515 11.6875144,9.1890873 L9.09478956,11.7818122 C8.80078771,12.075814 8.40172177,12.1172804 8.01989386,11.8595542 L7.91627825,11.7818122 L5.32355339,9.1890873 C5.12829124,8.99382515 5.12829124,8.67724266 5.32355339,8.48198052 L5.79495791,8.01057599 C5.99022006,7.81531385 6.30680255,7.81531385 6.50206469,8.01057599 L7.49910678,9.008 L7.5,4 C7.5,3.72385763 7.72385763,3.5 8,3.5 L9,3.5 Z"
              id="形状结合"
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </g>
    </SVGIconBase>
  );
};

export default DownloadIcon;
