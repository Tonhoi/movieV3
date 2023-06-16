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
import Overlay from "@/components/Overlay";

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

      <Overlay
        backgroundColor="dark_50"
        onClick={handleCloseHeaderMobile}
        className="overlay"
      />

      <StyledWrapper className="wrapper">
        <StyledHeaderHeading>
          <Box className={"image-wrapper"} position={"relative"}>
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

      backgroundImage: theme.palette.gradientColor.gradient1,
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
        backgroundColor: theme.palette.text_hover.main,
        cursor: "default",

        ["& > div"]: {
          color: `${theme.palette.common.white} !important`,
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
        color: theme.palette.text_hover.main,
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
