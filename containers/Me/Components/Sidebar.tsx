import { Image } from "@/components";
import { Box, Stack, Typography, styled } from "@mui/material";

import avatar from "@/public/image/avatar.png";
import backgroundAvatar from "@/public/image/backgroundAvatar.png";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogoutAccount = () => {
    signOut(auth);
  };
  return (
    <Container>
      <Stack className={"sidebar-heading"}>
        <Box className={"image-wrapper"}>
          <Image src={avatar.src} />
        </Box>
        <Typography>{user?.displayName}</Typography>
      </Stack>

      <Box className={"sidebar-content"}>
        <Typography variant={"body1"} className={"account"}>
          Trang cá nhân
        </Typography>
        <Typography variant={"body1"} className={"logout"} onClick={handleLogoutAccount}>
          Đăng xuất
        </Typography>
      </Box>
    </Container>
  );
};
const Container = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    maxWidth: 224,
    minHeight: "100vh",
    background: "rgb(26, 28, 34)",
    boxShadow: "rgba(0, 0, 0, 0.1) 3px 0px 12px 0px",
    marginBottom: "-50px",

    ["& .sidebar-heading"]: {
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      padding: "22px 28px",
      backgroundImage: `url(${backgroundAvatar.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",

      ["&:after"]: {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 40,
        backgroundImage:
          "linear-gradient(rgba(26, 28, 34, 0) 0%, rgba(26, 28, 34, 0.06) 6%, rgba(26, 28, 34, 0.12) 12%, rgba(26, 28, 34, 0.19) 19%, rgba(26, 28, 34, 0.26) 26%, rgba(26, 28, 34, 0.34) 34%, rgba(26, 28, 34, 0.42) 42%, rgba(26, 28, 34, 0.5) 50%, rgba(26, 28, 34, 0.58) 58%, rgba(26, 28, 34, 0.66) 66%, rgba(26, 28, 34, 0.74) 74%, rgba(26, 28, 34, 0.81) 81%, rgba(26, 28, 34, 0.88) 88%, rgba(26, 28, 34, 0.94) 94%, rgb(26, 28, 34) 100%)",
      },

      ["& .image-wrapper"]: {
        position: "relative",
        width: 48,
        height: 48,
        borderRadius: "50%",
        overflow: "hidden",
      },
    },

    ["& .sidebar-content"]: {
      ["& :where(.account, .logout )"]: {
        padding: "20px 24px",
        cursor: "pointer",

        ["&:hover"]: {
          color: "#1cc749",
        },
      },
    },
  };
});

export default Sidebar;
