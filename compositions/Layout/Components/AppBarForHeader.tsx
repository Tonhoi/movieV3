import { ElementType, Fragment, KeyboardEvent, MouseEvent } from "react";
import {
  Box,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemProps,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  styled,
  useTheme,
} from "@mui/material";
import Hamburger from "hamburger-react";

import { GlobeIcon, UserIcon, ClockIcon, FilmIcon, TvIcon, Link } from "@/components";
import avatar from "@/public/image/avatar.png";
import backgroundAvatar from "@/public/image/backgroundAvatar.png";
import { useToggle } from "@/hooks";
import { ROUTES } from "@/routes";
import { useRouter } from "next/router";

interface listItemCompProps extends ListItemProps {
  text: string;
  icon: any;
  path: string;
}

export default function SwipeableTemporaryDrawer() {
  const { toggle: setOpen, on: isOpen } = useToggle();
  const { on: openMenu, toggle: setOpenMenu } = useToggle();

  const theme = useTheme();

  const toggleDrawer = () => (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpenMenu();
    setOpen(false);
  };

  const list = () => (
    <Box width={250} onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
      <List disablePadding>
        <StyledListItemAvatar>
          <ListItemComp
            path="/login"
            icon={<Avatar alt="Cindy Baker" src={avatar.src} />}
            text="Login/Signup"
          />
        </StyledListItemAvatar>

        <Divider />

        <ListItemComp
          path={ROUTES.Movie}
          icon={<FilmIcon sx={{ width: 28, height: 28 }} />}
          text="Movie"
        />

        <ListItemComp
          path={ROUTES.Tv}
          icon={<TvIcon sx={{ width: 28, height: 28 }} />}
          text="Tv"
        />
      </List>

      <Divider />

      <List>
        <ListItemComp
          path={ROUTES.History}
          icon={<ClockIcon sx={{ width: 28, height: 28 }} />}
          text="History"
        />
        <ListItemComp
          path={"/language"}
          icon={<GlobeIcon sx={{ width: 28, height: 28 }} />}
          text="Language"
        />
        <ListItemComp
          path={ROUTES.Me}
          icon={<UserIcon sx={{ width: 28, height: 28 }} />}
          text="Me"
        />
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Button onClick={toggleDrawer()}>
        <Hamburger toggled={isOpen} toggle={setOpen} color={theme.palette.common.white} />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={openMenu}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        {list()}
      </SwipeableDrawer>
    </Fragment>
  );
}

const ListItemComp = (props: listItemCompProps) => {
  const { text, icon, path } = props;
  const router = useRouter();

  return (
    <ListItem disablePadding component={Link as ElementType} href={path} {...props}>
      <ListItemButton
        selected={router.pathname === path}
        sx={{
          "&.Mui-selected": { backgroundColor: "#b2f7c4", position: "relative" },
          "&.Mui-selected::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 4,
            backgroundColor: "#00ff43",
          },
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const StyledListItemAvatar = styled(ListItem)(({ theme }) => {
  return {
    padding: "14px 0",
    gap: "12px",
    backgroundImage: `url(${backgroundAvatar.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "& .mui-style-t61n6r-MuiTypography-root": {
      color: theme.palette.common.white,
    },
  };
});
