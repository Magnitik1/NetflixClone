import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Search from "./pictures/search 1.svg";
import Bell from "./pictures/bell.svg";
import { Link, useNavigate } from "react-router-dom";
import "./top.css";
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

export default function ButtonAppBar(props) {
  let nav = useNavigate();
  let [myPic, setMyPic] = useState(null);
  let [others, setOthers] = useState(null);
  const [miniOpen, setMiniOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  const handleBellOpen = () => setBellOpen(true);
  const handleMiniOpen = () => setMiniOpen(true);
  const handleBellClose = () => setBellOpen(false);
  const handleMiniClose = () => setMiniOpen(false);  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const [showSearch, setShowSearch] = useState(false);


  const [inputHover, setInputHover] = useState(false);
  
  const handleInputChange = (e) => {
    const query = e.target.value;
    console.log(query)
    setSearchQuery(query);
    if (Array.isArray(props.allFilms)) {
      const filteredResults = props.allFilms.filter((film) =>
      film.nameEng.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filteredResults)
      setSearchResults(filteredResults);
    }
  };

  let tempdata = null;
  useEffect(() => {
    if (
      localStorage.getItem("currentProfile") === "" ||
      localStorage.getItem("currentAccount") === ""
    )
      nav("/LogIn");
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
          src={props.images[localStorage.getItem("profileImage")]}
          alt="pic"
        />
      );
    }
    container();
  }, []);

  const styleOfChoosen={
    background:"linear-gradient(180deg, #FFC107 0%, #FFEE46 100%)",
    height:"64px",
    color: "black",
    textTransform: "none",
    borderRadius:"0",
  }
  const styleOfNotChoosen={
    height:"64px",
    color: "inherit",
    textTransform: "none",
    borderRadius:"0",
  }
  const miniStyle = {
    position: "absolute",
    top: "60px",
    right: "-84px",
    transform: "translate(-50%, 0%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "block",
    backgroundColor: "black",
    textAling: "center",
  };
  const bellStyle = {
    position: "absolute",
    top: "230px",
    right: "30px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "block",
    backgroundColor: "black",
    textAling: "center",
  };
  return (
    <>
      <Modal keepMounted open={miniOpen} onClose={handleMiniClose}>
        <Box sx={miniStyle} style={{ padding: "0", borderColor: "black" }}>
          <ul style={{ listStyleType: "none" }} className="justUl">
            {others !== null
              ? others.map((e) =>
                  e ? (
                    <li
                      onClick={() => {
                        localStorage.setItem("profileImage", e.imgSrc);
                        localStorage.setItem("currentProfile", e.name);
                        window.location.reload(false);
                      }}>
                      <img
                        src={props.images[e.imgSrc]}
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
            <hr style={{ width: "calc(100% + 40px)", marginLeft: "-40px" }} />
            <Link
              to="/"
              onClick={() => {
                localStorage.setItem("currentAccount", "");
                localStorage.setItem("currentProfile", "");
              }}
              style={{ color: "darkred" }}>
              <li style={{ marginLeft: "-15px" }}>Sing Out of FlixUa</li>
            </Link>
          </ul>
        </Box>
      </Modal>
      <Modal keepMounted open={bellOpen} onClose={handleBellClose}>
        <Box
          sx={bellStyle}
          style={{ padding: "0", borderColor: "black", height: "300px" }}>
          <a style={{ color: "white" }}>Some News</a>
        </Box>
      </Modal>
      <Box
        style={{
          position: "fixed",
          width: "100vw",
          minWidth: "900px",
          zIndex: "5",
        }}>
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
            <Button
              style={props.page=="Home"?styleOfChoosen:styleOfNotChoosen}
              onClick={() => {
                props.setSect();
                props.setPage("Home");
              }}>
              Головна
            </Button>
            <Button
              style={props.page=="Serials"?styleOfChoosen:styleOfNotChoosen}
              onClick={() => {
                props.setSect();
                props.setPage("Serials");
              }}>
              Серіали
            </Button>
            <Button
              style={props.page=="Films"?styleOfChoosen:styleOfNotChoosen}
              onClick={() => {
                props.setSect();
                props.setPage("Films");
              }}>
              Фільми
            </Button>
            <Button
              style={props.page=="New and Popular"?styleOfChoosen:styleOfNotChoosen}
              onClick={() => {
                props.setSect();
                props.setPage("New and Popular");
              }}>
              Новинки і популярне
            </Button>
            <Button
              style={props.page=="My List"?styleOfChoosen:styleOfNotChoosen}
              onClick={() => {
                props.setSect();
                props.setPage("My List");
              }}>
              Мій список
            </Button>
            {myPic}
            <div className="search-container">
              <div className={`search ${showSearch ? "show-search" : ""}`}>
                <Button
                  className="search-btn"
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => {
                    if (!inputHover) setShowSearch(false);
                  }}>
                  <img src={Search} alt="search" />
                </Button>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                  onMouseEnter={() => setInputHover(true)}
                  onMouseLeave={() => setInputHover(false)}
                  onBlur={() => {
                    setShowSearch(false);
                    setInputHover(false);
                  }}
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <Button
              onClick={() => {
                handleBellOpen();
              }}
              color="inherit"
              style={{ position: "absolute", right: "85px" }}>
              <img src={Bell} alt="bell" />
            </Button>
            <div
              className="settings-list-conteiner"
              onClick={() => {
                handleMiniOpen();
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
