import { ChangeEvent, useMemo, useRef, useState } from "react";
import { useMeasure } from "react-use";
import { useRouter } from "next/router";
import { Box, CircularProgress, TextField, Typography, styled } from "@mui/material";
import useSWR from "swr";
import HeadlessTippy from "@tippyjs/react/headless";

import SearchItem from "./SearchItem";
import useThrottle from "@/hooks/useThrottle";
import { transformUrl } from "@/libs";
import { useToggle } from "@/hooks";
import { useParams } from "@/hooks/useParams";

const HeaderSearch = () => {
  const [ref, { width }] = useMeasure();
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const throttledSearchValue = useThrottle<string>(searchValue);

  const { params, setParams, router } = useParams({
    initState: {
      query: "",
      include_adult: false,
      language: "",
      page: 1,
    },
  });

  const {
    on: isOpenSearchItem,
    toggleOff: handleCloseSearchItem,
    toggleOn: handleOpenSearchItem,
  } = useToggle();

  const { data: searchData, isLoading } = useSWR(
    throttledSearchValue !== ""
      ? transformUrl("/search/multi", {
          query: throttledSearchValue,
          include_adult: false,
          language: "en-US",
          page: 1,
        })
      : null
  );

  const handleChangeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const handleClickSearchItem = (id: string, media_type: string) => {
    router.push(`/detail/${media_type}/${id}`);
    handleCloseSearchItem();
    setSearchValue("");
  };

  const renderSearchItem = useMemo(() => {
    if (typeof searchData?.results == "undefined") return null;

    return searchData.results.map((data: any, idx: number) => (
      <SearchItem width={width} data={data} key={idx} onClick={handleClickSearchItem} />
    ));
  }, [searchData?.results]);

  return (
    <Container ref={ref}>
      <HeadlessTippy
        interactive
        placement="bottom-start"
        visible={isOpenSearchItem}
        render={(attrs) => (
          <StyledSearchWrapper
            className="search-warpper custom-scroll"
            width={width}
            {...attrs}
          >
            {isLoading && (
              <Box className={"loading-wrapper"}>
                <CircularProgress variant="indeterminate" color="inherit" />
              </Box>
            )}

            {renderSearchItem}

            <Typography
              variant={"body2"}
              className={`btn-see-more ${searchData?.results.length > 0 ? "active" : ""}`}
              onClick={() => {
                router.push(`/search?page=1&query=${throttledSearchValue}`);
                handleCloseSearchItem();
                setSearchValue("");
              }}
            >
              Xem tất cả
            </Typography>
          </StyledSearchWrapper>
        )}
        onClickOutside={handleCloseSearchItem}
      >
        <TextField
          ref={inputRef}
          placeholder="Search here"
          value={searchValue}
          autoComplete="off"
          onChange={handleChangeInputValue}
          onFocus={handleOpenSearchItem}
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
      width: "100%",
      padding: "12px 0px",
      backgroundColor: "#232020",
      textAlign: "center",
      display: "none",
      cursor: "pointer",

      ["&.active"]: {
        display: "block",
      },
    },

    ["& input"]: {
      color: theme.palette.common.white,
      padding: "10px 14px",
      backgroundColor: "#ffffff33",
    },

    ["& .placeholder"]: {
      color: theme.palette.common.white,
    },
  };
});

const StyledSearchWrapper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "#312e2e",
    color: theme.palette.common.white,
    maxHeight: 350,
    overflow: "overlay",

    ["& .no-search-result"]: {
      textAlign: "center",
      padding: "12px 0px",
    },

    ["& .loading-wrapper"]: {
      color: "rgb(25, 118, 210)",
      textAlign: "center",
      padding: "24px 0px 20px",
    },
  };
});

export default HeaderSearch;
