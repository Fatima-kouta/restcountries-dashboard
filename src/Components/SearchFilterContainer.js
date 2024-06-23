import React from "react";
import SearchBar from "./SearchBar";
import { Box, Button } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import FilterBar from "./FilterBar";
import { setNameFilter, setRegionFilter } from "../Redux/actions/actions";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  paddingBottom: 2,
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  justifyContent: {
    xs: "flex-start",
    sm: "space-between",
  },
};

const flexCenterStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: {
    xs: 2,
    sm: 0,
  },
  width: {
    xs: "100%",
    sm: "fit-content",
  },
};
const RefreshButton = {
  padding: "6px 9px",
  minWidth: "fit-content",
};
const SearchFilterContainer = ({
  nameFilter,
  dispatch,
  fetchCountries,
  regionFilter,
}) => {
  return (
    <>
      <Box sx={containerStyle}>
        <Box sx={flexCenterStyle}>
          <SearchBar dispatch={dispatch} nameFilter={nameFilter} />
        </Box>
        <Box sx={flexCenterStyle}>
          <FilterBar dispatch={dispatch} regionFilter={regionFilter} />
          <Button
            variant="contained"
            color="primary"
            style={RefreshButton}
            onClick={() => {
              dispatch(fetchCountries());
              dispatch(setNameFilter(""));
              dispatch(setRegionFilter(""));
            }}
          >
            <RefreshIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SearchFilterContainer;
