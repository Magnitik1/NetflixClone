import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function TopFilm(props) {
  let [topFilm, setTopFilm] = useState(0);
  return (
    <div
      className="mainPicConteiner"
      style={{ cursor: "pointer", marginTop: "80px" }}
      onClick={() => {
        if (topFilm >= 69) {
          setTopFilm(0);
        } else setTopFilm(topFilm + 1);
      }}>
      <img
        src={props.allFilms && props.allFilms[topFilm].img}
        className="mainPic"
      />

      <div
        className="TopFilmInfoBG"
        style={
          props.allFilms && props.allFilms[topFilm].nameEng.length > 19
            ? { height: "360px" }
            : { height: "260px", top: "320px" }
        }
      />
      <div
        className="TopFilmInfo"
        style={
          props.allFilms && props.allFilms[topFilm].nameEng.length > 19
            ? { width: "475px" }
            : { top: "320px" }
        }>
        <a style={{ fontSize: "50px" }}>
          {props.allFilms && props.allFilms[topFilm].nameEng}
        </a>
        <br />
        <Link
          to="/Player"
          onClick={() =>{
            props.setCurrentVideo(props.allFilms[topFilm].nameEng);
            props.setFilm(props.allFilms[topFilm]);}
          }>
          <Button
            variant="contained"
            style={{ margin: "10px", background: "white", color: "black" }}>
            Дивитися
          </Button>
        </Link>
        <Button
          onClick={() => {
            console.log(props.allFilms[topFilm]);
            props.setFilm(props.allFilms[topFilm]);
            props.handleOpen();
          }}
          variant="contained"
          style={{
            margin: "10px",
            marginBottom: "16px",
            background: "#575757",
            color: "white",
          }}>
          Детальніше
        </Button>
      </div>
      <div className="ageRequirments">
        13+&nbsp;&nbsp;
        <div className="ageRequirmentsWhite" />
      </div>
    </div>
  );
}

export default TopFilm;
