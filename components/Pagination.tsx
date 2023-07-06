import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
  styled,
} from "@mui/material";

interface PaginationProps extends MuiPaginationProps {}

const Pagination = (props: PaginationProps) => {
  return (
    <StyledPagination
      color="secondary"
      className="pagination"
      shape={"rounded"}
      {...props}
    />
  );
};

const StyledPagination = styled(MuiPagination)(({ theme }) => {
  return {
    ["& .MuiPagination-ul"]: {
      justifyContent: "center",
      marginTop: theme.spacing(3),

      ["& .MuiButtonBase-root"]: {
        color: theme.palette.common.white,
        border: "1px solid rgba(0,0,0,.23)",
      },

      ["& .Mui-selected"]: {
        background: "-webkit-gradient(linear,0 0,0 100%,from(#cd881e),to(#674614))",
      },
    },

    ["&.active"]: {
      display: "none",
    },
  };
});

export default Pagination;
