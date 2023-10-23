import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import { useRouter } from "next/router";

import { Link } from "@/components";
import { ROUTES } from "@/routers";

interface HeadingSearchProps {
  total_results: number;
}

const HeadingSearch = ({ total_results }: HeadingSearchProps) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Container>
      <Typography
        variant={"subtitle1"}
        component={"span"}
        color={theme.palette.text_color.main}
      >
        Có {total_results} kết quả tìm kiếm dựa trên từ khóa “{router.query.query}”
      </Typography>

      <Box className={"title"}>
        <Typography variant={"h5"} component={"span"} color={"rgb(130, 131, 135)"}>
          Có vấn đề về kết quả tìm kiếm?
        </Typography>

        <Link href={ROUTES.contact} underline="hover">
          <Typography variant={"h5"} component={"span"} className="feedback">
            Gửi phản hồi
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    height: 200,
    alignItems: "center",
    justifyContent: "end",
    backgroundColor: theme.palette.text.secondary,
    padding: "24px 16px",
    borderBottom: theme.palette.mode == "light" ? "1px solid #cdcfd4" : "unset",

    ["& .feedback"]: {
      marginLeft: 4,
      color: "#1cc749",
    },
  };
});

export default HeadingSearch;
