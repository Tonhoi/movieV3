import { Box, Stack, Typography, styled } from "@mui/material";

import Sidebar from "./Components/Sidebar";

const Me = () => {
  return (
    <Container>
      <Sidebar />

      <Box className={"content"}>
        <Typography variant={"h4"} display={"block"} textAlign={"center"}>
          Trang cá nhân
        </Typography>

        <table>
          <tr>
            <td>
              <Typography variant="body1" color={"#828387"}>
                Email
              </Typography>
            </td>
            <td>tt****@vku.udn.vn</td>
            <td>Kích hoạt</td>
          </tr>
          <tr>
            <td>
              <Typography variant={"body1"} color={"#828387"}>
                Mobile number
              </Typography>
            </td>
            <td>123456789</td>
            <td>Thay đổi</td>
          </tr>
          <tr>
            <td>
              <Typography variant={"body1"} color={"#828387"}>
                Password
              </Typography>
            </td>
            <td>123456789</td>
            <td>Thay đổi</td>
          </tr>
          <tr>
            <td>
              <Typography variant={"body1"} color={"#828387"}>
                Delete account
              </Typography>
            </td>
            <td>Xóa tài khoản hiện tại</td>
            <td>Xóa</td>
          </tr>
        </table>
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    paddingTop: 62,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },

    ["& .content"]: {
      padding: "0px 64px",
      width: "100%",
      marginTop: 32,

      ["& table"]: {
        width: "100%",
        padding: "0px 24px",
        backgroundColor: "#1A1C22",
        borderRadius: "8px",
        marginTop: 32,

        ["& tr td"]: {
          padding: "24px 0px",

          ["&:nth-child(3)"]: {
            textAlign: "right",
          },
        },

        ["& tr:not(:last-child)"]: {
          position: "relative",

          ["&:after"]: {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },
  };
});

export default Me;
