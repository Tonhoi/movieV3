import { MouseEventHandler } from "react";
import { Stack, SvgIconProps, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "@/components";

interface HeaderItemOnMobileProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href: string;
  icon: any;
  title: string;
}

const HeaderItemOnMobile = (props: HeaderItemOnMobileProps) => {
  const { onClick, href, icon: Icon, title } = props;
  const { asPath } = useRouter();
  return (
    <Container
      href={href}
      className={`nav-link ${asPath.includes(href) ? "active" : ""}`}
      onClick={onClick}
    >
      <Stack className={"nav-item"}>
        <Icon className={"nav-icon"} />
        <Typography className={"nav-title"} variant={"body1"}>
          {title}
        </Typography>
      </Stack>
    </Container>
  );
};

const Container = styled(Link)(({ theme }) => {
  return {
    position: "relative",
    display: "block",
    padding: "12px 0px 12px 24px",

    ["&.active"]: {
      backgroundColor: "rgb(28, 199, 73)",

      ["&:after"]: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: 4,
        backgroundColor: "rgb(0 255 67)",
      },
    },

    ["& .nav-item"]: {
      flexDirection: "row",
      alignItems: "center",
      color: "#ECECEC",

      ["&:hover"]: {
        color: "#1cc749",
      },

      ["& .nav-icon"]: {
        width: 20,
        height: 20,
        marginRight: theme.spacing(1),
      },

      ["& .nav-title"]: {},
    },
  };
});

export default HeaderItemOnMobile;
