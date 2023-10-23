import { useMemo } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { Link, MenuIcon, EpisodeCardItem, MenuV2Icon, Embeded } from "@/components";
import { useToggle, useParams } from "@/hooks";
import { EpisodeProps } from "@/interfaces/responseSchema/episode";

interface HeadingPlayMovieProps {
  episodes: Array<EpisodeProps>;
}

const HeadingPlayMovie = ({ episodes }: HeadingPlayMovieProps) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const { router, resetParams } = useParams({
    initState: {
      season: 1,
      episode: 1,
    },
    excludeKeys: ["type", "id"],

    callback(params) {
      if (router.query.type == "movie") {
        resetParams();
      }
    },
  });
  const { query } = router;
  const { type, id, season, episode } = query;

  const renderEpisodesHorizontal = useMemo(() => {
    if (typeof episodes == "undefined") return null;

    return episodes.map((data: EpisodeProps, idx: number) => (
      <EpisodeCardItem
        key={idx}
        idx={idx + 1}
        still_path={data.still_path}
        episode_number={data.episode_number}
        name={data.name}
        vote_count={data.vote_count}
        air_date={data.air_date}
      />
    ));
  }, [episodes]);

  const renderEpisodesVertical = useMemo(() => {
    if (typeof episodes == "undefined") return null;
    return episodes.map((data: EpisodeProps, idx: number) => (
      <Link
        key={idx}
        href={`/play/${type}/${id}?episode=${data.episode_number}&season=${season}`}
        className={`episode-vertical ${
          String(data.episode_number) == episode ? "active" : ""
        }`}
      >
        <Typography variant={"body2"}>{idx + 1}</Typography>
      </Link>
    ));
  }, [episodes, router]);

  return (
    <Container>
      <Box width={"100%"}>
        {/* <Embeded id={id} episode={episode} season={season} type={type} height="400" /> */}

        <Typography variant="caption" className={"reminder-text"}>
          Hãy đổi server nếu bạn cảm thấy phim load chậm
        </Typography>
      </Box>

      {episode && (
        <Box className={"episodes-list custom-scroll"}>
          <Stack className={"episodes-filter-wrap"}>
            <Typography variant={"subtitle2"}>
              Tập {episode}-{episodes?.length}
            </Typography>

            {on ? <MenuIcon onClick={toggleOff} /> : <MenuV2Icon onClick={toggleOn} />}
          </Stack>

          {on ? (
            renderEpisodesVertical
          ) : (
            <Stack gap={1.5}>{renderEpisodesHorizontal}</Stack>
          )}
        </Box>
      )}
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    backgroundColor: theme.palette.secondary.main,
    maxHeight: 455,
    borderRadius: 4,
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      maxHeight: "100%",
    },

    ["& .reminder-text"]: {
      display: "block",
      fontSize: 13,
      fontStyle: "italic",
      textAlign: "center",
      color: "#9e9c9c",
      marginBottom: 8,
    },

    ["& .episodes-list"]: {
      width: "50%",
      padding: "0px 10px",
      margin: "16px 0px",
      overflowY: "scroll",

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

        backgroundColor: theme.palette.secondary.main,

        ["& svg"]: {
          width: 18,
          height: 18,
          cursor: "pointer",

          ["&:hover"]: {
            color: "#1CC749",
          },
        },
      },

      ["& .episode-vertical"]: {
        width: 40,
        height: 40,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 8px 8px 0px",
        borderRadius: 4,
        backgroundColor: "#23252B",
        color: "#fff",
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
