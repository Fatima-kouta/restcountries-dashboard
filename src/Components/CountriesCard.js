import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const CountriesCard = ({ country }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const text = country?.name?.common;
  const maxLength = isMobile ? 14 : 26;
  const truncatedText = text?.length > maxLength ? `${text?.substring(0, maxLength)}...` : text;
  const width = isMobile ? "20px" : "40px";
  const typographyStyle = {
    pt: 1,
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <Card
      sx={{
        display: "flex",
        padding: "10px 20px",
        borderRadius: 0,
        border: "0.5px solid #ccc",
        boxShadow: 0,
        justifyContent: "center",
      }}
    >
      <CardMedia
        sx={{ width: width, backgroundSize: "contain", margin: 2}}
        image={country?.flags?.svg}
        title="Country Flag"
      />

      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={ typographyStyle }
        >
          {truncatedText}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          to={`/country/${country?.name?.common}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.9 }}>
            <ChevronRightIcon  sx={{color:"#1976d2" }}/>
          </motion.div>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CountriesCard;
