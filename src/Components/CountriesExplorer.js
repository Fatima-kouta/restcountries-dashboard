import React, { useEffect, useState } from "react";
import {
  Container,
  List,
  Pagination,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../Redux/thunks";
import CountriesCard from "./CountriesCard";
import SearchFilterContainer from "./SearchFilterContainer";
import Loading from "./Common/Loading";
import {
  applyFilters,
  setNameFilter,
  setRegionFilter,
} from "../Redux/actions/actions";
import Error from "./Common/Error";
import CountriesDetails from "./CountriesDetails";

const CountriesExplorer = () => {
  const { filteredData, data, loading, error, nameFilter, regionFilter } =
    useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const itemsPerPage = 18;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(setNameFilter(""));
    dispatch(setRegionFilter(""));
  }, []);
  useEffect(() => {
    dispatch(applyFilters(nameFilter, regionFilter));
  }, [nameFilter, regionFilter]);

  const paginatedItems = filteredData?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <Container>
      <CountriesDetails data={data} />
      <SearchFilterContainer
        nameFilter={nameFilter}
        regionFilter={regionFilter}
        dispatch={dispatch}
        fetchCountries={fetchCountries}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <List>
            <Grid container justifyContent="center">
              {paginatedItems?.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                  <CountriesCard country={item} />
                </Grid>
              ))}
            </Grid>
          </List>
          {filteredData.length !== 0 ? (
            <Grid
              container
              justifyContent="center"
              marginTop={2}
              marginBottom={2}
            >
              <Pagination
                count={Math.ceil(filteredData.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size={isSmallScreen ? "small" : "large"}
              />
            </Grid>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                Country Not Found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your filters or search criteria.
              </Typography>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default CountriesExplorer;
