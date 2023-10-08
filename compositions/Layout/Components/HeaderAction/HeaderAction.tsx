import { Box, Stack, Tooltip, styled } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase-config";

import { Image, Link, SettingIcon } from "@/components";
import PopOverWrapper from "./PopOverWrapper";
import HeaderActionChild from "./HeaderActionChild";
import { SETTING_ITEMS } from "@/constant";
import avatar from "@/public/image/avatar2.png";

const HeaderAction = () => {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <PopOverWrapper
        disablePortal
        disableScrollLock
        parentChildren={
          <Tooltip title={"Cài đặt"} placement="bottom">
            <Stack className={"icon-wrapper"}>
              <SettingIcon className="setting-icon" />
            </Stack>
          </Tooltip>
        }
      >
        <Box className={"setting-wrapper"}>
          {SETTING_ITEMS.map((el) => (
            <HeaderActionChild
              key={el.id}
              startIcon={el.start_icon}
              endIcon={el.end_icon}
              title={el.title}
              separate={el.separate}
              child={el.child}
              href={el.href}
            />
          ))}
        </Box>
      </PopOverWrapper>

      <Link href={user ? "/personal" : "/login"} className={"avatar"}>
        <Image src={avatar} />
      </Link>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    gap: 12,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    ["& .icon-wrapper"]: {
      padding: "12px",
      borderRadius: "50%",
      backgroundColor: "#444444",
      cursor: "pointer",

      ["&:hover"]: {
        opacity: 0.8,
        transition: "opacity linear 0.3s",
      },

      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    ["& .avatar"]: {
      position: "relative",
      width: 48,
      height: 48,

      ["& img"]: {
        objectFit: "cover",
        borderRadius: "50%",
        cursor: "pointer",
      },
    },

    ["& .setting-wrapper"]: {
      padding: 6,
      width: 260,
      backgroundColor: "#292e3d",

      ["& .btn"]: {
        color: theme.palette.common.white,
      },

      ["& .divided"]: {
        backgroundColor: theme.palette.common.white,
      },
    },
  };
});

export default HeaderAction;
