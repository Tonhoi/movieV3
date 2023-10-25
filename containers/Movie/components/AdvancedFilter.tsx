import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button, styled, useTheme } from "@mui/material";
import { CSSObjectWithLabel } from "react-select";

import { FilterIcon } from "@/components/common";
import { COUNTRYOPTIONS, VOTEAVERAGEOPTIONS, YEAROPTIONS } from "../constants";

const SelectClient = dynamic(() => import("react-select"), {
  ssr: false,
});

interface FilterProps {
  setParams: (newParams: object) => void;
  type: string | undefined;
}

const customStyles = (theme: any) => ({
  control: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "rgb(230, 230, 230)",
    backgroundColor: "transparent",
    height: 34,
    minHeight: "unset",
    border: theme.palette.mode == "light" ? "1px solid #1cc749" : "1px solid #8a84e9",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    width: "100%",
    cursor: "pointer",

    ["&:hover"]: {
      backgroundColor:
        theme.palette.mode == "light" ? "#1cc749" : "rgba(138, 132, 233, 0.6)",
      transition: "all linear 0.2s",
    },
  }),

  valueContainer: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    padding: 0,
  }),

  input: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#fff",
    padding: 0,
  }),

  option: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#111319",
    cursor: "pointer",
  }),

  singleValue: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#fff",
  }),
  dropdownIndicator: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    display: "none",
  }),
  indicatorSeparator: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    display: "none",
  }),
  placeholder: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: theme.palette.common.black,
  }),
});

const AdvancedFilter = ({ setParams, type }: FilterProps) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<any>(null);
  const [selectedVoteAverage, setSelectedVoteAverage] = useState<any>(null);
  const theme = useTheme();

  const handleFilter = () => {
    setParams({
      ["language"]: selectedCountry?.value,
      ["vote_average.gte"]: selectedVoteAverage?.value,
      ["vote_average.lte"]: selectedVoteAverage?.value,
      [type == "movie" ? "year" : "first_air_date_year"]: selectedYear?.value,
    });
  };

  return (
    <Container>
      <SelectClient
        defaultValue={selectedCountry}
        onChange={setSelectedCountry}
        options={COUNTRYOPTIONS}
        placeholder={"Quốc gia"}
        isSearchable={false}
        styles={customStyles(theme)}
      />

      <SelectClient
        isClearable
        options={YEAROPTIONS}
        onChange={setSelectedYear}
        placeholder={"Năm sản xuất"}
        styles={customStyles(theme)}
      />

      <SelectClient
        isClearable
        options={VOTEAVERAGEOPTIONS}
        onChange={setSelectedVoteAverage}
        placeholder={"Số điểm của phim"}
        styles={customStyles(theme)}
      />

      <Button
        variant={"contained"}
        startIcon={<FilterIcon />}
        className={"filter-button"}
        onClick={handleFilter}
      >
        Lọc
      </Button>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    gridGap: 16,

    ["& .filter-button"]: {
      backgroundColor: theme.palette.mode == "light" ? "#fff" : "#8a84e9",
      padding: "5px 10px",
      color: theme.palette.common.black,

      ["&:hover"]: {
        backgroundColor: theme.palette.mode == "light" ? "#fff" : "#8a84e9",
      },
    },
  };
});

export default memo(AdvancedFilter);
