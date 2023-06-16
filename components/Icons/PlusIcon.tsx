import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function PlusIcon(props: SvgIconProps) {
  return (
    <SVGIconBase width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7 15.3155C7 18.4466 8.00588 20 10 20C11.9941 20 13 18.4466 13 15.3155L13 4.68447C13 1.5534 11.9941 5.95543e-08 10 3.57746e-08C8.00588 1.1995e-08 7 1.5534 7 4.68447L7 15.3155Z"
        fill="#FF6E4B"
      />
      <path
        d="M4.68447 7C1.5534 7 0 8.00588 0 10C0 11.9941 1.5534 13 4.68447 13H15.3155C18.4466 13 20 11.9941 20 10C20 8.00588 18.4466 7 15.3155 7H4.68447Z"
        fill="#FF6E4B"
      />
    </SVGIconBase>
  );
}