import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/Home.module.scss";

import imageLogo from "../public/static/logo1x.png";

export function DashoboardNavbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={`${imageLogo}?w=161&fit=crop&auto=format`}
            srcSet={`${imageLogo}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={"logo"}
            loading="lazy"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
