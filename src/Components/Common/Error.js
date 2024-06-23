import React from "react";
import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const Error = ({ errorMessage }) => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "error.main", 
        color: "error.contrastText", 
        display: "flex",
        alignItems: "center",
      }}
    >
      <ErrorOutline sx={{ mr: 1 }} /> 
      <Typography variant="body1">{errorMessage}</Typography> 
    </Box>
  );
};

export default Error;
