import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ChatIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </SVGIconBase>
  );
};

export default ChatIcon;
