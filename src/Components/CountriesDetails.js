import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import MapIcon from "@mui/icons-material/Map";

const CountriesDetails = ({ data }) => {
  const [countryWithMaxPopulation, setCountryWithMaxPopulation] =
    useState(null);
  const [uniqueRegions, setUniqueRegions] = useState([]);
  const [subRegions, setSubRegions] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const maxPopulationCountry = data.reduce((prev, current) => {
        return current.population > prev.population ? current : prev;
      });
      setCountryWithMaxPopulation(maxPopulationCountry);

      const regions = data.map((item) => item.region);
      const uniqueRegions = [...new Set(regions)];
      setUniqueRegions(uniqueRegions);

      const subregion = data.map((item) => item.subregion);
      const subRegions = [...new Set(subregion)];
      setSubRegions(subRegions);
    }
  }, [data]);
  const info = [
    {
      id: 0,
      icon: <PublicIcon style={iconStyles} />,
      title: "Total Countries",
      detail: `${data?.length} countries`,
    },
    {
      id: 1,
      icon: <PeopleIcon style={iconStyles} />,
      title: "Most Popularity",
      detail: countryWithMaxPopulation?.name?.common,
    },
    {
      id: 2,
      icon: <PlaceIcon style={iconStyles} />,
      title: "Total Regions",
      detail: `${uniqueRegions?.length} regions`,
    },
    {
      id: 3,
      icon: <MapIcon style={iconStyles} />,
      title: "Total Sub-Regions",
      detail: `${subRegions?.length} sub-regions`,
    },
  ];
  return (
    data && (
      <Grid
        container
        spacing={2}
        marginTop="20px"
        marginBottom="20px"
        justifyContent="center"
      >
        {info.map((info) => (
          <Grid item xs={12} sm={6} md={3} id={info.id}>
            <Card style={cardStyles}>
              {info.icon}
              <CardContent style={customStyle}>
                <Typography gutterBottom>{info.title}</Typography>
                <Typography variant="body1" style={typography}>
                  {" "}
                  {info.detail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  );
};

const cardStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderRadius: "8px",
  boxShadow:
    "0px 2px 1px -1px rgb(25 118 210), 0px 1px 1px 0px rgb(25 118 210), 0px 1px 3px 0px rgb(25 118 210)",
};

const iconStyles = {
  fontSize: 30,
  color: "rgb(25 118 210)",
};

const customStyle = {
  fontSize: "13px",
  padding: "10px",
  paddingLeft: "15px",
  width: "100%",
};
const typography = {
  fontSize: "14px",
  color: "gray",
};

export default CountriesDetails;
