import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { Box, BoxProps, Button, Typography, styled } from "@mui/material";

import { Link, SaveV2Icon, UserIcon } from "@/components";
import { ROUTES } from "@/routers";
import LogoutIcon from "./Icons/LogoutIcon";

const SIBAR_ITEMS = [
  {
    id: uuidv4(),
    title: "Cài đặt tài khoản",
    start_icon: UserIcon,
    href: ROUTES.account,
  },
  {
    id: uuidv4(),
    title: "Danh sách phim xem sau",
    start_icon: SaveV2Icon,
    href: ROUTES.history,
  },
  {
    id: uuidv4(),
    title: "Đăng xuất",
    start_icon: LogoutIcon,
    is_login_button: true,
  },
];

const Sidebar = () => {
  const { asPath, push } = useRouter();

  const handleLogoutAccount = useCallback(() => {
    signOut(auth);
    push(ROUTES.login);
  }, [push]);

  return (
    <Container component={"ul"} className={"sidebar-list"}>
      {SIBAR_ITEMS.map((el) => (
        <Box
          component={"li"}
          className={`sidebar-item ${el.href === asPath ? "active" : ""}`}
          key={el.id}
        >
          <Button
            variant="text"
            href={el.href}
            LinkComponent={Link}
            disableRipple
            fullWidth
            startIcon={<el.start_icon className={"sidebar-link-icon"} />}
            className={"sidebar-link"}
            onClick={el.is_login_button ? handleLogoutAccount : () => {}}
          >
            <Typography variant="caption" className={"sidebar-link-text"}>
              {el.title}
            </Typography>
          </Button>
        </Box>
      ))}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["&.sidebar-list"]: {
      listStyle: "none",
      padding: 0,
      margin: 0,

      [theme.breakpoints.down("md")]: {
        display: "none",
      },

      ["& .sidebar-item"]: {
        borderRadius: 8,
        marginBottom: 16,

        ["&:hover, &.active"]: {
          backgroundColor: "#1d873980",
        },
      },

      ["& .sidebar-link"]: {
        textTransform: "inherit",
        color: theme.palette.common.black,
        padding: 12,
        justifyContent: "start",

        ["&:hover"]: {
          opacity: 1,
        },

        ["& .MuiButton-startIcon"]: {
          marginLeft: 0,
        },

        ["&-icon"]: {},

        ["&-text"]: {
          fontSize: 14,
          lineHeight: 1.43,
        },
      },
    },
  };
});

export default Sidebar;
