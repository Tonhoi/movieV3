import { Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

interface GenresFilterProps {
  onClick: () => void;
  name: string;
  id: number;
}

const GenresFilter = ({ onClick, name, id }: GenresFilterProps) => {
  const { query } = useRouter();
  return (
    <Container
      variant="subtitle2"
      className={`filter-content ${query.with_genres === String(id) ? "active" : ""}`}
      onClick={onClick}
    >
      {name}
    </Container>
  );
};

const Container = styled(Typography)(({ theme }) => {
  return {
    cursor: "pointer",
    padding: "9px 8px",
    backgroundColor: "#8a84e9",
    color: theme.palette.common.white,
    borderRadius: "4px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ["&.active"]: {
      backgroundColor: "#443ae7",
      transition: "all linear 0.2s",
    },

    [theme.breakpoints.down("md")]: {
      width: "35%",
      flexShrink: 0,
      scrollSnapAlign: "start",
      scrollSnapStop: "always",
    },

    ["&:hover"]: {
      opacity: 0.8,
      transition: "opacity linear 0.2s",
    },
  };
});

export default GenresFilter;
