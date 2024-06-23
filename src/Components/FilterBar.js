import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { setRegionFilter } from "../Redux/actions/actions";

const FilterBar = ({dispatch,regionFilter}) => {
  const continents = [
    "Africa",
    "Antarctic",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const handleChange = (event) => {
    dispatch(setRegionFilter(event.target.value));

  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">
         Region
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={regionFilter}
          label="Region"
          onChange={handleChange}
        >
          {continents.map((field) => (
            <MenuItem key={field} value={field}>
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterBar;
