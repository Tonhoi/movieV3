import { useRouter } from "next/router";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Hamburger from "hamburger-react";

import { Image, Link } from "@/components";

import avatar from "@/public/image/avatar.png";
import { HEADERITEM } from "@/constant";
import { useToggle } from "@/hooks";

import backgroundAvatar from "@/public/image/backgroundAvatar.png";

const HeaderOnMobile = () => {
  const theme = useTheme();
  const { asPath } = useRouter();

  const {
    toggleOff: handleCloseHeaderMobile,
    on: isOpenHeaderMobile,
    toggle: toggleHeaderMobile,
  } = useToggle();

  return (
    <Container className={isOpenHeaderMobile ? "active" : ""}>
      <Hamburger
        toggled={isOpenHeaderMobile}
        toggle={toggleHeaderMobile}
        color={theme.palette.common.white}
      />

      <StyledOverlay onClick={handleCloseHeaderMobile} className="overlay" />

      <StyledWrapper className="wrapper">
        <StyledHeaderHeading>
          <Box position={"relative"}>
            <Image src={avatar.src} />
          </Box>
          <Typography variant={"body2"}>Login/Signup</Typography>
        </StyledHeaderHeading>

        <List>
          {HEADERITEM.map((el, idx: number) => (
            <StyledListItem
              disablePadding
              key={idx}
              className={el.href === asPath ? "active" : ""}
              onClick={handleCloseHeaderMobile}
            >
              <ListItemButton disableRipple LinkComponent={Link} href={el.href}>
                <ListItemIcon>
                  <el.icon />
                </ListItemIcon>
                <ListItemText primary={el.title} />
              </ListItemButton>
            </StyledListItem>
          ))}
        </List>
      </StyledWrapper>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["&.active"]: {
      ["& .overlay"]: {
        display: "block",
      },
      ["& .wrapper"]: {
        transform: "translateX(0)",
      },
    },
  };
});

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: theme.zIndex.appBar,

    width: 270,

    transform: "translateX(-100%)",
    transition: "transform linear 0.2s",

    backgroundColor: "rgb(35, 37, 43)",
  };
});

const StyledOverlay = styled(Box)(() => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: 90,

    display: "none",
    transition: "all linear 0.2s",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
});

const StyledHeaderHeading = styled(Stack)(({ theme }) => {
  return {
    position: "relative",

    flexDirection: "row",
    alignItems: "center",
    padding: "22px 24px",

    backgroundImage: `url(${backgroundAvatar.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    ["&::after"]: {
      content: '""',

      position: "absolute",
      bottom: 0,
      left: 0,

      width: "100%",
      height: 40,

      backgroundImage:
        "linear-gradient(rgba(26, 28, 34, 0) 0%, rgba(26, 28, 34, 0.06) 6%, rgba(26, 28, 34, 0.12) 12%, rgba(26, 28, 34, 0.19) 19%, rgba(26, 28, 34, 0.26) 26%, rgba(26, 28, 34, 0.34) 34%, rgba(26, 28, 34, 0.42) 42%, rgba(26, 28, 34, 0.5) 50%, rgba(26, 28, 34, 0.58) 58%, rgba(26, 28, 34, 0.66) 66%, rgba(26, 28, 34, 0.74) 74%, rgba(26, 28, 34, 0.81) 81%, rgba(26, 28, 34, 0.88) 88%, rgba(26, 28, 34, 0.94) 94%, rgb(26, 28, 34) 100%)",
    },

    ["& > div"]: {
      width: 40,
      height: 40,
    },

    ["& > p"]: {
      color: theme.palette.common.white,
      marginLeft: 12,
    },
  };
});

const StyledListItem = styled(ListItem)(({ theme }) => {
  return {
    ["&.active"]: {
      position: "relative",

      ["& > a"]: {
        backgroundColor: "rgb(28, 199, 73)",
        cursor: "default",

        ["& > div"]: {
          color: "#fff !important",
        },
      },

      ["&::after"]: {
        content: '""',

        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,

        width: 3,
        backgroundColor: "rgb(0 255 67)",
      },
    },

    ["& > a"]: {
      ["&:hover > div"]: {
        color: "rgb(28, 199, 73)",
      },

      ["& > div"]: {
        minWidth: 0,
        color: theme.palette.common.white,
      },

      ["& > div > svg"]: {
        width: 28,
        height: 28,
        marginRight: theme.spacing(1),
      },
    },
  };
});

export default HeaderOnMobile;
