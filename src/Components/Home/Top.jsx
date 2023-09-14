import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Search from "./pictures/search.svg";
import Bell from "./pictures/bell.svg";
import { Link, useNavigate } from "react-router-dom";
import "./top.css";
import React, { useState, useEffect } from "react";

export default function ButtonAppBar(props) {
  let nav = useNavigate();
  let [myPic, setMyPic] = useState(null);
  let [others, setOthers] = useState(null);
  let [visibility, setVisibility] = useState(false);
  let tempdata = null;
  useEffect(() => {
    if(localStorage.getItem("currentProfile")===""||localStorage.getItem("currentAccount")==="")nav("/LogIn")
    async function container() {
      async function getData() {
        const response = await fetch("http://localhost:3000/api_account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("currentAccount"),
          }),
        });
        tempdata = await response.json();
      }
      if (myPic === null) {
        await getData();
      }
      setOthers(
        tempdata.users.map((e) => {
          if (e.name !== localStorage.getItem("currentProfile")) return e;
        })
      );
      setMyPic(
        <img
          className="small-img"
          style={{
            width: "50px",
            height: "50px",
            right: "25px",
            position: "absolute",
          }}
          src={
            tempdata.users.find((e) => {
              if (e.name === localStorage.getItem("currentProfile")) return e;
            }).imgSrc
          }
          alt="pic"
        />
      );
    }
    container();
  }, []);
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
          {myPic}
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
          <div
            className="settings-list-conteiner"
            onClick={() => {
              document.getElementById("settings").style.width = visibility
                ? "0"
                : "200px";
              setVisibility(!visibility);
            }}
          />
          <div className="settings-list" id="settings">
            <ul style={{ listStyleType: "none" }} className="justUl">
              {others !== null
                ? others.map((e) =>
                    e ? (
                      <li
                        onClick={() => {
                          localStorage.setItem("currentProfile", e.name);
                          window.location.reload(false);
                        }}>
                        <img
                          src={e.imgSrc}
                          width="35px"
                          height="35px"
                          style={{
                            marginLeft: "-25px",
                            marginRight: "7px",
                            borderRadius: "5px",
                          }}
                        />
                        {e.name}
                      </li>
                    ) : (
                      ""
                    )
                  )
                : ""}
              <Link to="/SelectProfile">
                <li>Manage Profiles</li>
              </Link>
              <li
                onClick={() => {
                  alert("Profile was transferted");
                }}>
                Transfer Profile
              </li>
              <Link to="/Account">
                <li>Account</li>
              </Link>
              <li
                onClick={() => {
                  alert("Get helped");
                }}>
                Help Center
              </li>
              <Link
                to="/"
                onClick={() => {
                  localStorage.setItem("currentAccount", "");
                  localStorage.setItem("currentProfile", "");
                }}
                style={{ color: "darkred" }}>
                <li>Sing Out of FlixUa</li>
              </Link>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
