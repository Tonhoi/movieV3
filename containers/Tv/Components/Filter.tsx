import { useState } from "react";
import { Box, Button, styled, useTheme } from "@mui/material";
import Select from "react-select";
import "react-calendar/dist/Calendar.css";
import CreatableSelect from "react-select/creatable";
import { useRouter } from "next/router";

import FilterIcon from "@/components/Icons/FilterIcon";
import { COUNTRYOPTIONS, VOTEAVERAGEOPTIONS, YEAROPTIONS } from "@/constant";

interface FilterProps {
  setParams: (newParams: object) => void;
}

const Filter = ({ setParams }: FilterProps) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<any>(null);
  const [selectedVoteAverage, setSelectedVoteAverage] = useState<any>(null);

  const theme = useTheme();

  const { query } = useRouter();

  const handleFilter = () => {
    setParams({
      ["language"]: selectedCountry?.value,
      ["first_air_date_year"]: selectedYear?.value,
      ["vote_average.gte"]: selectedVoteAverage?.value,
      ["vote_average.lte"]: selectedVoteAverage?.value,
    });
  };

  return (
    <Container>
      <Box className={"filter-wrapper"}>
        <Box className={"filter-item"}>
          <Select
            defaultValue={selectedCountry}
            onChange={setSelectedCountry}
            options={COUNTRYOPTIONS}
            placeholder={"Quốc gia"}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                color: "rgb(230, 230, 230)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                height: 34,
                minHeight: "unset",
              }),

              valueContainer: (baseStyle, props) => ({
                ...baseStyle,
                padding: 0,
              }),

              input: (baseStyle, state) => ({
                ...baseStyle,
                color: theme.palette.common.white,
                padding: 0,
              }),

              option: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.black,
                cursor: "pointer",
              }),

              singleValue: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.white,
              }),
              dropdownIndicator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              indicatorSeparator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              placeholder: (baseStyle, props) => ({
                ...baseStyle,
                color: "#fff",
              }),
            }}
          />
        </Box>

        <Box className={"filter-item"}>
          <CreatableSelect
            isClearable
            options={YEAROPTIONS}
            onChange={setSelectedYear}
            placeholder={typeof query.year == "undefined" && "Toàn bộ năm"}
            defaultValue={query?.year && { label: query?.year }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                color: "rgb(230, 230, 230)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                height: 34,
                minHeight: "unset",
              }),

              valueContainer: (baseStyle, props) => ({
                ...baseStyle,
                padding: 0,
              }),

              input: (baseStyle, state) => ({
                ...baseStyle,
                color: theme.palette.common.white,
                padding: 0,
              }),

              option: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.black,
                cursor: "pointer",
              }),

              singleValue: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.white,
              }),
              dropdownIndicator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              indicatorSeparator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              placeholder: (baseStyle, props) => ({
                ...baseStyle,
                color: "#fff",
              }),
            }}
          />
        </Box>
        <Box className={"filter-item"}>
          <CreatableSelect
            isClearable
            options={VOTEAVERAGEOPTIONS}
            onChange={setSelectedVoteAverage}
            placeholder={"Số điểm của phim"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                color: "rgb(230, 230, 230)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                height: 34,
                minHeight: "unset",
              }),

              valueContainer: (baseStyle, props) => ({
                ...baseStyle,
                padding: 0,
              }),

              input: (baseStyle, state) => ({
                ...baseStyle,
                color: theme.palette.common.white,
                padding: 0,
              }),

              option: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.black,
                cursor: "pointer",
              }),

              singleValue: (baseStyle, props) => ({
                ...baseStyle,
                color: theme.palette.common.white,
              }),
              dropdownIndicator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              indicatorSeparator: (baseStyle, props) => ({
                ...baseStyle,
                display: "none",
              }),
              placeholder: (baseStyle, props) => ({
                ...baseStyle,
                color: "#fff",
              }),
            }}
          />
        </Box>

        <Button
          variant={"contained"}
          startIcon={<FilterIcon />}
          className={"filter-button"}
          onClick={handleFilter}
        >
          Lọc
        </Button>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    ["& .filter-wrapper"]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",

      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      marginTop: 16,
      textAlign: "center",

      ["& .filter-item"]: {
        border: "1px solid #8a84e9",
        position: "relative",
        width: "100%",
        cursor: "pointer",

        ["&:hover"]: {
          backgroundColor: "rgba(138, 132, 233, 0.6)",
          transition: "all linear 0.2s",
        },
      },

      ["& .filter-button"]: {
        backgroundColor: "#8a84e9",
        padding: "5px 10px",

        ["&:hover"]: { backgroundColor: "#8a84e9" },
      },
    },
  };
});

export default Filter;
