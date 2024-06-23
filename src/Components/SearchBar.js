import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { setNameFilter } from "../Redux/actions/actions";

const SearchBar = ({ dispatch, nameFilter }) => {
  const handleInputChange = (event) => {
    dispatch(setNameFilter(event.target.value));
  };
  return (
    <TextField
      sx={{ width: "100%" }}
      fullWidth
      label="Search Countries"
      variant="outlined"
      value={nameFilter}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
