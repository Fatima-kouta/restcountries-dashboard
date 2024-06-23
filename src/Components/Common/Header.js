import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const styles = {
  toolbar: {
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  typography: {
    marginRight: "16px",
  },
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <Typography variant="h6">Dashboard</Typography>
        <Box style={styles.box}>
          <Typography
            variant="body1"
            component="span"
            style={styles.typography}
          >
            Welcome!
          </Typography>
          <Avatar alt="Your Name" src="path-to-your-profile-image.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
