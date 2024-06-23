import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCountry } from "../Redux/thunks";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import Loading from "./Common/Loading";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import Error from "./Common/Error";
import googlemap from "../images/icons/googlemap.png";
import streetmap from "../images/icons/streetmap.png";

const CountryDetails = () => {
  const { name } = useParams();
  const { data, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleCountry(name));
  }, [name, dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error} />;
  if (!data || data.length === 0) return null;
  const country = data[0];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <Grid item xs={2}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton aria-label="go back" onClick={() => navigate("/")}>
              <ArrowBackIcon />
            </IconButton>
          </motion.div>
        </Grid>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          border: { xs: "0", md: "1px solid #ccc" },
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              margin: "0 auto",
            }}
            alt={country.flags.alt}
            src={country.flags.svg}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              paddingBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {country.name.common}
            {country.coatOfArms && (
              <Box
                component="img"
                sx={{ width: "40px", height: "auto", marginLeft: "10px" }}
                alt={country.flags.alt}
                src={country.coatOfArms.svg}
              />
            )}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InfoItem label="Native Name" value={country.name.common} />
              <InfoItem label="Population" value={country.population} />
              <InfoItem label="Region" value={country.region} />
              {country.subregion && (
                <InfoItem label="Sub Region" value={country.subregion} />
              )}
            </Grid>
            <Grid item xs={12} md={6}  justifyContent="center">
              {country.capital && (
                <InfoItem label="Capital" value={country.capital.join(", ")} />
              )}
              <InfoItem
                label="Currencies"
                value={Object.values(country.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
              />
              <InfoItem
                label="Languages"
                value={Object.values(country.languages).join(", ")}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                <Link
                  href={`${country.maps.googleMaps}`}
                  target="_blank"
                  rel="noopener"
                  sx={{ marginRight: "10px" }}
                >
                  <img
                    src={googlemap}
                    alt="street-map"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
                <Link
                  href={`${country.maps.openStreetMaps}`}
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={streetmap}
                    alt="street-map"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const InfoItem = ({ label, value }) => (
  <Box sx={{ display: "flex", paddingBottom: "10px" }}>
    <Typography sx={{ fontWeight: "bold", marginRight: "5px" }}>
      {label}:
    </Typography>
    <Typography>{value}</Typography>
  </Box>
);
export default CountryDetails;
