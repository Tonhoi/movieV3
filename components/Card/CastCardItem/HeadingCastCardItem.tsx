import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import Image from "@/components/Image";
import { Box, Stack, Typography, styled } from "@mui/material";
import React, { Fragment } from "react";

const loader = ({ src }: any) => {
  return src;
};

const HeadingCastCardItem = () => {
  return (
    <StyledCardHeading>
      <Box
        position={"relative"}
        width={"100%"}
        maxWidth={"80px"}
        borderRadius={"50%"}
        overflow={"hidden"}
        sx={{
          aspectRatio: "1/1",
        }}
      >
        <Image
          loader={loader}
          src={
            "https://pic4.iqiyipic.com/image/20230201/b3/ab/p_5318277_m_601_300_300.jpg"
          }
        />
      </Box>

      <Box padding={"10px 0 10px 10px"} width={"100%"}>
        <Typography variant="body1">Han Gao</Typography>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={"16px"}
        >
          <Typography variant={"h6"}>Director</Typography>

          <Stack direction={"row"} alignItems={"flex-end"} color={"rgb(0, 204, 54)"}>
            <Typography variant={"h6"} marginRight={"4px"}>
              More
            </Typography>
            <ArrowRightIcon style={{ width: 14, height: 14 }} />
          </Stack>
        </Stack>
      </Box>
    </StyledCardHeading>
  );
};

const StyledCardHeading = styled(Stack)(() => {
  return {
    width: "100%",
    flexDirection: "row",

    marginBottom: 12,
  };
});

export default HeadingCastCardItem;
