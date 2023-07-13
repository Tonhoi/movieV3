import { useMemo } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { ChatIcon, HeartIcon, Link, MenuIcon, SaveV2Icon, ShareIcon } from "@/components";
import { useToggle } from "@/hooks";
import EpisodeCardItem from "@/components/Card/EpisodeCardItem";
import MenuV2Icon from "@/components/Icons/MenuV2Icon";
import Embeded from "@/components/Embeded";
import { useParams } from "@/hooks/useParams";
import { EPISODESCHEMA } from "@/interfaces/responseSchema/episode";

interface HeadingPlayMovieProps {
  episodes: Array<EPISODESCHEMA>;
}

const HeadingPlayMovie = ({ episodes }: HeadingPlayMovieProps) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const { params, setParams, router, resetParams } = useParams({
    initState: {
      season: 1,
      episode: 1,
    },
    excludeKeys: ["type", "id"],
    // isUpdateRouter: true,

    callback(params) {
      if (router.query.type == "movie") {
        resetParams();
      }
    },
  });
  const renderEpisodes = useMemo(() => {
    if (typeof episodes == "undefined") return null;

    return episodes.map((data: EPISODESCHEMA, idx: number) => {
      const { still_path, episode_number, name, vote_count, air_date } = data;
      return (
        <EpisodeCardItem
          key={idx}
          idx={idx + 1}
          still_path={still_path}
          episode_number={episode_number}
          name={name}
          vote_count={vote_count}
          air_date={air_date}
        />
      );
    });
  }, [episodes]);

  const renderEpisodes2 = useMemo(() => {
    if (typeof episodes == "undefined") return null;

    return episodes.map((data: any, idx: number) => (
      <Link
        href={`/play/${router.query.type}/${router.query.id}?episode=${data.episode_number}&season=${router.query.season}`}
        className={`episode ${
          data.episode_number == router.query.episode ? "active" : ""
        }`}
        key={idx}
      >
        <Typography variant={"body2"}>{idx + 1}</Typography>
      </Link>
    ));
  }, [episodes, router]);

  return (
    <Container>
      <Box width={"100%"}>
        <Box className={"embeded-wrapper"}>
          <Embeded
            src={`https://autoembed.to/${router.query.type}/tmdb/${router.query.id}-${router.query.season}-${router.query.episode}`}
          />
        </Box>

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
          <Typography variant={"subtitle2"}>
            Episodes {router.query.episode}-{episodes?.length}
          </Typography>

          {on ? <MenuIcon onClick={toggleOff} /> : <MenuV2Icon onClick={toggleOn} />}
        </Stack>

        <Stack className={"play-content custom-scroll"}>
          {on ? renderEpisodes2 : renderEpisodes}
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

    ["& .embeded-wrapper"]: {
      position: "relative",
      height: 400,
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
        width: "calc(100% + 5px)",

        overflowY: "scroll",
      },

      ["& .episode"]: {
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        backgroundColor: "#23252B",
        cursor: "pointer",
        color: theme.palette.common.white,

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
