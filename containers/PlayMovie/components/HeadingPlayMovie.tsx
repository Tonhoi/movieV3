import { Box, Stack, Typography, styled } from "@mui/material";
import { ChatIcon, HeartIcon, MenuIcon, SaveV2Icon, ShareIcon } from "@/components";

import Embeded from "./Embeded";
import { useToggle } from "@/hooks";
import EpisodeCardItem from "@/components/Card/EpisodeCardItem";
import MenuV2Icon from "@/components/Icons/MenuV2Icon";

const HeadingPlayMovie = () => {
  const { on, toggleOff, toggleOn } = useToggle();

  return (
    <Container>
      <Box width={"100%"}>
        <Embeded />

        <Stack className={"menu-options"}>
          <Stack className={"menu-options-item"}>
            <HeartIcon />
            <Typography variant={"h5"}>Like</Typography>
          </Stack>

          <Stack className={"menu-options-item"}>
            <ChatIcon />
            <Typography variant={"h5"}>Comments</Typography>
          </Stack>

          <Stack className={"menu-options-item"}>
            <SaveV2Icon />
            <Typography variant={"h5"}>Watch Later</Typography>
          </Stack>

          <Stack className={"menu-options-item"}>
            <ShareIcon />
            <Typography variant={"h5"}>Share</Typography>
          </Stack>
        </Stack>
      </Box>

      <Box className={"episodes-list"}>
        <Stack className={"episodes-filter-wrap"}>
          <Typography variant={"subtitle2"}>Episodes 1-30</Typography>

          {on ? <MenuIcon onClick={toggleOff} /> : <MenuV2Icon onClick={toggleOn} />}
        </Stack>

        <Stack className={"play-content"}>
          {on
            ? Array(20)
                .fill(null)
                .map((el, idx: number) => (
                  <Stack className={"episode"}>
                    <Typography variant={"body2"}>{idx + 1}</Typography>
                  </Stack>
                ))
            : Array(20)
                .fill(null)
                .map((el, idx: number) => <EpisodeCardItem key={idx} />)}
        </Stack>
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    height: "auto",
    flexDirection: "row",
    backgroundColor: "#1A1C22",
    maxHeight: 455,
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      maxHeight: "100%",
    },

    ["& .menu-options"]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "10px 20px",
      gap: 24,

      ["& .menu-options-item"]: {
        flexDirection: "row",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",

        ["&:hover"]: {
          opacity: 0.8,
          transition: "opacity linear 0.2s",
        },
      },
    },

    ["& .episodes-list"]: {
      width: "50%",
      padding: "0px 10px",
      margin: "16px 0px",

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },

      ["& .episodes-filter-wrap"]: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "12px",

        ["& svg"]: {
          width: 18,
          height: 18,
          cursor: "pointer",

          ["&:hover"]: {
            color: "#1CC749",
          },
        },
      },

      ["& .play-content"]: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        maxHeight: "100%",

        overflow: "overlay",

        ["&::-webkit-scrollbar"]: {
          width: 5,
        },

        ["&::-webkit-scrollbar-track"]: {
          backgroundColor: "#fafafa",
          visibility: "hidden",
          transition: "all linear 0.2s",
        },

        ["&::-webkit-scrollbar-thumb"]: {
          backgroundImage: "linear-gradient(-45deg, #6a5af9, #d66efd)",
          borderRadius: 50,
          visibility: "hidden",
        },

        ["&:hover"]: {
          ["&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track"]: {
            visibility: "visible",
            transition: "visibility linear 0.2s",
          },
        },
      },

      ["& .episode"]: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        backgroundColor: "#23252B",
        cursor: "pointer",

        ["&:hover"]: {
          background: "#1CC749",
          transition: "all linear 0.2s",
        },

        ["&.active"]: {
          background: "#1CC749",
        },
      },
    },
  };
});

export default HeadingPlayMovie;
