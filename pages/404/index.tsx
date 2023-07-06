import { Box, Button, Typography, styled } from "@mui/material";
import { ROUTES } from "@/routers";

import HomeIcon from "@/components/Icons/HomeIcon";

const index = () => {
  return (
    <Container className="container">
      <Box className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </Box>
      <Box className="content">
        <Typography className="main-heading" variant={"h2"}>
          Không tìm thấy nội dung 😓
        </Typography>
        <Typography variant={"h5"}>
          URL của nội dung này đã bị thay đổi. Nếu bạn đang lưu URL này, hãy thử truy cập
          lại từ trang chủ thay vì dùng URL đã lưu.
        </Typography>

        <a href={ROUTES.home}>
          <Button variant="contained" startIcon={<HomeIcon />}>
            <Typography variant={"body2"}>Trở về trang chủ</Typography>
          </Button>
        </a>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    ["& .gif"]: {
      display: "flex",
      justifyContent: "center",
    },

    ["& .content"]: {
      textAlign: "center",

      ["& .main-heading"]: {
        display: "block",
        margin: "24px 0px",
      },
    },

    ["& button"]: {
      marginTop: 24,
      borderRadius: 15,
      outline: "none",
      border: "none",
      background: "#0046d4",
      color: theme.palette.common.white,
      textTransform: "initial",
      padding: "10px 16px",

      ["&:hover"]: {
        backgroundColor: "#0046d4",
      },
    },
  };
});

export default index;
