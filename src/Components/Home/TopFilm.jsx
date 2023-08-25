import React, { useState } from "react";
import barbie from "./pictures/barbie.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function TopFilm(props) {
  let [topFilm, setTopFilm] = useState(0);
  let height=360;
  console.log(props.FilmsInfo[0].title.length)
  return (
    <div className="mainPicConteiner" style={{ cursor: "pointer" }} onClick={()=>{
      if(topFilm>=19){setTopFilm(0)}
      else setTopFilm(topFilm+1)
      }}>
      <img src={"https://image.tmdb.org/t/p/w500/"+props.FilmsInfo[topFilm].backdrop_path} className="mainPic" />

      <div className="TopFilmInfoBG" style={props.FilmsInfo[topFilm].title.length>20?{height:"360px"}:{height:"260px", top:"320px"}}/>
      <div className="TopFilmInfo" style={props.FilmsInfo[topFilm].title.length>20?{}:{top:"320px"}}>
        <a style={{fontSize:"50px"}}>{props.FilmsInfo[topFilm].title}</a>
        <br />
        <Link to="/WatchFilm">
          <Button
            variant="contained"
            style={{ margin: "10px", background: "white", color: "black" }}>
            Дивитися
          </Button>
        </Link>
        <Button
          variant="contained"
          style={{ margin: "10px", marginBottom:"16px", background: "#575757", color: "white" }}>
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
