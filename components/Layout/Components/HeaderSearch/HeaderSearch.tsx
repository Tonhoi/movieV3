import useSWR from "swr";
import HeadlessTippy from "@tippyjs/react/headless";
import {
  ChangeEvent,
  MouseEventHandler,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useMeasure } from "react-use";

import { useToggle } from "@/hooks";
import { TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";
import useThrottle from "@/hooks/useThrottle";
import SearchItem, { media_type } from "./SearchItem";
import { MovieProps, TvProps } from "@/interfaces/responseSchema/utils";
import { Link } from "@/components";

const HeaderSearch = () => {
  const [ref, { width }] = useMeasure();

  const containerWidthRef = useRef<HTMLDivElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const throttledSearchValue = useThrottle<string>(searchValue);

  const {
    on: isOpenSearchResult,
    toggleOff: handleCloseSearchResult,
    toggleOn: handleOpenSearchResult,
  } = useToggle();

  const { data: searchData, isLoading } = useSWR(
    throttledSearchValue !== ""
      ? transformUrl(TYPE_PARAMS["search_multi"], {
          query: throttledSearchValue,
          include_adult: false,
          language: "en-US",
          page: 1,
        })
      : null
  );

  const handleChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const searchValue = e.target.value;

      if (searchValue.startsWith(" ")) return null;

      setSearchValue(searchValue);
    },
    []
  );

  const handleClickSearchResult: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    const checkSearchItem = target.closest(".search-item");
    const checkBtnSeeMore = target.closest(".btn-see-more");

    if (checkSearchItem || checkBtnSeeMore) {
      setSearchValue("");
    }

    if (checkBtnSeeMore) {
      handleCloseSearchResult();
    }
  }, []);

  const renderSearchItem = useMemo(() => {
    if (typeof searchData == "undefined") return null;

    return searchData.results.map(
      (data: TvProps & MovieProps & media_type, idx: number) => (
        <SearchItem
          width={width}
          data={data}
          key={idx}
          handleCloseSearchResult={handleCloseSearchResult}
        />
      )
    );
  }, [searchData]);

  return (
    <Container ref={ref}>
      <HeadlessTippy
        interactive
        placement="bottom-start"
        visible={isOpenSearchResult}
        onClickOutside={handleCloseSearchResult}
        render={(attrs) => (
          <StyledSearchWrapper
            className="search-warpper custom-scroll"
            width={width}
            onClick={handleClickSearchResult}
            {...attrs}
          >
            <Box className={`loading ${isLoading ? "active" : ""}`}>
              <CircularProgress variant="indeterminate" color="inherit" />
            </Box>

            {renderSearchItem}

            <Button
              variant="text"
              href={`/search?page=1&query=${throttledSearchValue}`}
              LinkComponent={Link}
              className={`btn-see-more ${searchData?.results.length > 0 ? "active" : ""}`}
            >
              <Typography variant={"body2"}>Xem tất cả</Typography>
            </Button>
          </StyledSearchWrapper>
        )}
      >
        <TextField
          placeholder="Search here"
          value={searchValue}
          autoComplete="off"
          onChange={handleChangeInputValue}
          onFocus={handleOpenSearchResult}
          ref={containerWidthRef}
        />
      </HeadlessTippy>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& fieldset"]: {
      border: "none",
    },

    ["& .btn-see-more"]: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      padding: "12px 0px",
      backgroundColor: theme.palette.mode == "light" ? "#fff" : "#232020",
      textAlign: "center",
      display: "none",
      borderRadius: "unset",
      color: theme.palette.common.black,
      transition: "all linear 0.1s",
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

      ["&.active"]: {
        display: "block",
      },

      ["&:hover"]: {
        opacity: 1,
        backgroundColor: theme.palette.mode == "light" ? "#fff" : "#232020",
        color: "#1cc749",
      },
    },

    ["& input"]: {
      color: "#ececec",
      padding: "10px 14px",
      backgroundColor: "#99a1b333",

      [theme.breakpoints.down("sm")]: {
        color: theme.palette.common.black,
      },
    },
  };
});

const StyledSearchWrapper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode == "light" ? "#fff" : "#312e2e",
    color: theme.palette.common.white,
    maxHeight: 350,
    overflowY: "scroll",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

    ["& .no-search-result"]: {
      textAlign: "center",
      padding: "12px 0px",
    },

    ["& .loading"]: {
      color: "rgb(25, 118, 210)",
      textAlign: "center",
      padding: "24px 0px 20px",
      display: "none",

      ["&.active"]: {
        display: "block",
      },
    },
  };
});

export default memo(HeaderSearch);
