import { useMemo } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import {
  ChatIcon,
  HeartIcon,
  Link,
  MenuIcon,
  SaveV2Icon,
  ShareIcon,
  EpisodeCardItem,
  MenuV2Icon,
  Embeded,
} from "@/components";
import { useToggle, useParams } from "@/hooks";
import { EPISODESCHEMA } from "@/interfaces/responseSchema/episode";

interface HeadingPlayMovieProps {
  episodes: Array<EPISODESCHEMA>;
}

const HeadingPlayMovie = ({ episodes }: HeadingPlayMovieProps) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const { router, resetParams } = useParams({
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
  const { query } = router;
  const { type, id, season, episode } = query;

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
        href={`/play/${type}/${id}?episode=${data.episode_number}&season=${season}`}
        className={`episode ${data.episode_number == episode ? "active" : ""}`}
        key={idx}
      >
        <Typography variant={"body2"}>{idx + 1}</Typography>
      </Link>
    ));
  }, [episodes, router]);

  return (
    <Container>
      <Box width={"100%"}>
        <Embeded id={id} episode={episode} season={season} type={type} height="400" />

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

      <Box className={"episodes-list custom-scroll"}>
        <Stack className={"episodes-filter-wrap"}>
          <Typography variant={"subtitle2"}>
            Episodes {episode}-{episodes?.length}
          </Typography>

          {on ? <MenuIcon onClick={toggleOff} /> : <MenuV2Icon onClick={toggleOn} />}
        </Stack>

        {on ? renderEpisodes2 : renderEpisodes}
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
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
        gap: 4,
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
      overflowY: "scroll",
      maxHeight: "100%",

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },

      ["& .episodes-filter-wrap"]: {
        position: "sticky",
        top: 0,
        zIndex: 2,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 12,

        backgroundColor: "#1A1C22",

        ["& svg"]: {
          width: 18,
          height: 18,
          cursor: "pointer",

          ["&:hover"]: {
            color: "#1CC749",
          },
        },
      },

      ["& .episode"]: {
        width: 40,
        height: 40,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 8px 8px 0px",
        borderRadius: 4,
        backgroundColor: "#23252B",
        color: theme.palette.common.white,
        cursor: "pointer",

        ["&:hover, &.active"]: {
          background: "#1CC749",
          transition: "all linear 0.2s",
        },
      },
    },
  };
});

export default HeadingPlayMovie;
