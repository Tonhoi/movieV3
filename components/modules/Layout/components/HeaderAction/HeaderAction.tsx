import { MouseEvent, useCallback } from "react";
import { Box, Stack, Tooltip, Typography, styled } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase-config";

import { Image, Link, SettingIcon } from "@/components/common";
import { SETTING_ITEMS } from "@/components/modules";
import { ROUTES } from "@/routers";
import { useDarkModeContext } from "@/contexts/ThemeProvider/ThemeProvider";
import { SETTING_THEME_TITLE } from "@/constants";
import PopOverWrapper from "./PopOverWrapper";
import avatar from "@/public/image/avatar2.png";
import SettingItem from "./SettingItem";

const HeaderAction = () => {
  const [user] = useAuthState(auth);

  const { setIsDarkTheme, isDarkTheme } = useDarkModeContext();

  const handleToggleTheme = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, type: string) => {
      if (type == "dark_mode") {
        setIsDarkTheme((prev: boolean) => !prev);

        const check = !isDarkTheme;

        localStorage.setItem("isDarkTheme", `${check}`);

        const btnTextElement = e.currentTarget.querySelector(".title");

        if (!btnTextElement) return null;

        if (isDarkTheme) {
          btnTextElement.textContent = SETTING_THEME_TITLE.dark;
        } else {
          btnTextElement.textContent = SETTING_THEME_TITLE.light;
        }
      }
    },
    [isDarkTheme]
  );

  return (
    <Container>
      <PopOverWrapper
        disablePortal
        disableScrollLock
        parentChildren={
          <Tooltip
            arrow
            placement="bottom"
            slotProps={{
              tooltip: { sx: { background: "#000" } },
              arrow: { sx: { color: "#000" } },
            }}
            title={
              <Typography variant="caption" color={"#fff"}>
                Cài đặt
              </Typography>
            }
          >
            <Stack className={"icon-wrapper"}>
              <SettingIcon className="setting-icon" />
            </Stack>
          </Tooltip>
        }
      >
        <Box className={"setting-wrapper"}>
          {SETTING_ITEMS.map((el) => (
            <SettingItem
              key={el.id}
              startIcon={el.start_icon}
              title={el.title}
              separate={el.separate}
              href={el.href}
              onClick={(e) => handleToggleTheme(e, el.type as string)}
            />
          ))}
        </Box>
      </PopOverWrapper>

      <Link href={user ? ROUTES.account : ROUTES.login} className={"avatar"}>
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
      backgroundColor: theme.palette.mode == "light" ? "#fff" : "#444444",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.5) 0px 8px 16px -8px",
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
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.5) 0px 8px 16px -8px",
      },
    },

    ["& .setting-icon"]: {
      color: theme.palette.common.black,
    },

    ["& .setting-wrapper"]: {
      padding: 6,
      width: 260,
      backgroundColor: theme.palette.mode == "light" ? "#fff" : "#292e3d",
      transition: "all linear 0.3s",

      ["& .divided"]: {
        backgroundColor: theme.palette.mode == "light" ? "#fff" : "#282727",
      },
    },
  };
});

export default HeaderAction;
