import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="24px" height="24px" viewBox="0 0 24 24" version="1.1" {...props}>
      <title>icon/search</title>
      <g id="控件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icon/search" fill="#FFFFFF" fillRule="nonzero">
          <path
            d="M11.5,4 C15.6421356,4 19,7.35786438 19,11.5 C19,13.2425442 18.4057323,14.8462897 17.408807,16.1196265 L20.1793786,18.890165 C20.3746408,19.0854272 20.3746408,19.4020097 20.1793786,19.5972718 L19.4722718,20.3043786 C19.2770097,20.4996408 18.9604272,20.4996408 18.765165,20.3043786 L15.9775948,17.5173134 C14.7279648,18.4487017 13.1783637,19 11.5,19 C7.35786438,19 4,15.6421356 4,11.5 C4,7.35786438 7.35786438,4 11.5,4 Z M11.5,6 C8.46243388,6 6,8.46243388 6,11.5 C6,14.5375661 8.46243388,17 11.5,17 C14.5375661,17 17,14.5375661 17,11.5 C17,8.46243388 14.5375661,6 11.5,6 Z"
            id="形状结合"
          ></path>
        </g>
      </g>
    </SVGIconBase>
  );
};

export default SearchIcon;
