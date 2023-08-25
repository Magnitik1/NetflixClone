import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Search from "./pictures/search.svg";
import Bell from "./pictures/bell.svg";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ width: "100vw", minWidth: "900px" }}>
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(rgba(1,1,1,255),transparent)",
          backgroundColor: "rgba(22,22,22,255)",
        }}>
        <Toolbar>
          <Link to="/">
            <IconButton
              style={{ color: "var(--logo-text)" }}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}>
              FLIXUA
            </IconButton>
          </Link>
          <Button style={{ textTransform: "none", color: "inherit" }}>
            Головна
          </Button>
          <Button style={{ textTransform: "none", color: "inherit" }}>
            Серіали
          </Button>
          <Button style={{ textTransform: "none", color: "inherit" }}>
            Фільми
          </Button>
          <Button style={{ textTransform: "none", color: "inherit" }}>
            Новинки і популярне
          </Button>
          <Button style={{ textTransform: "none", color: "inherit" }}>
            Мій список
          </Button>

          <Button
            color="inherit"
            style={{ position: "absolute", right: "135px" }}>
            <img src={Search} alt="search" />
          </Button>
          <Button
            color="inherit"
            style={{ position: "absolute", right: "80px" }}>
            <img src={Bell} alt="bell" />
          </Button>
          <Button
            color="inherit"
            style={{ position: "absolute", right: "20px" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
