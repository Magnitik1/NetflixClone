import React, { useEffect, useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import plus from "../MainPage/picsAndFonts/plus.png";
import play from "../MainPage/picsAndFonts/play.svg";
import added from "../MainPage/picsAndFonts/added.png";
import liked from "../MainPage/picsAndFonts/liked.png"
import notliked from "../MainPage/picsAndFonts/notliked.png"

function WatchFilm(props) {

  const style = {
    position: "absolute",
    top: "-5px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "65%",
    minWidth: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    color: "white",
    background: "black",
    p: 4,
    display: "block",
  };
  return (
    <div className="wrapper">
      <Modal
        keepMounted
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        style={{ overflowY: "auto" }}>
        <Box sx={style}>
          <div>
            <img
              src={props.film && props.film[0].img}
              style={{
                width: "calc(100% + 62px)",
                marginLeft: "-31px",
                marginTop: "-27px",
                height: "400px",
              }}
            />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
                width: "100%",
                marginLeft: "-31px",
                top: "156px",
                height: "250px",
                opacity: "0.9",
                position: "absolute",
              }}></div>
            <Button
              onClick={async() => {
                let myTempList = props.myList.map((e)=>{
                    if(e.name==props.film[0].name)return{name:e.name, liked:!props.liked}
                    else return e
                });
                
                await props.setLiked(!props.liked)
                fetch("http://localhost:3000/process_edit_profile", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: localStorage.getItem("currentAccount"),
                  name: localStorage.getItem("currentProfile"),
                  myList: myTempList
                }),
              });}}
              style={{
                position: "absolute",
                top: "333px",
                left: "210px",
                borderRadius: "100px",
                zIndex: "5",
              }}>
              <img
                src={props.liked ? added : plus}
                width="60vw"
                zIndex="6"
                stryle={{ position: "absolute" }}
              />
            </Button>
            <Button
              style={{
                position: "absolute",
                left: "290px",
                top: "333px",
                borderRadius: "100px",
                zIndex: "5",
              }}>
              <img
                src={notliked}
                width="60vw"
                zIndex="6"
                stryle={{ position: "absolute" }}
              />
            </Button>
            <Button
              onClick={props.openVideo}
              style={{
                position: "absolute",
                top: "340px",
                borderRadius: "10px",
                zIndex: "5",
                width: "160px",
                height: "55px",
                background: "linear-gradient(180deg, #FFC107 0%, #FFEE46 100%)",
              }}>
              <img src={play} alt="play" style={{ marginLeft: "-20px" }} />
              <a
                style={{
                  color: "black",
                  fontSize: "24px",
                  textTransform: "none",
                  fontWeight: "normal",
                }}>
                Play
              </a>
            </Button>
          </div>
          <br />
          <br />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {props.film && props.film[0].year}
            <br />
            <br />
            <span
              style={{
                float: "left",
                marginRight: "15px",
                borderWidth: "2px",
                borderColor: "white",
                borderStyle: "solid",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}>
              {props.film && props.film[0].age}+
            </span>
            {props.film && props.film[0].age > 14
              ? "violence, language, substances"
              : "adventure, substances, language"}
            <br />
            <br />
            <div
              style={{
                position: "absolute",
                right: "10px",
                top: "415px",
                width: "300px",
                fontSize: "17px",
              }}>
              <span className="genreliketext">Cast:&nbsp;&nbsp;</span>
              {props.film && props.film[0].author}
              <br />
              <br />
              <span className="genreliketext">Genres:&nbsp;&nbsp;</span>
              {props.film && props.film[0].genres}
              <br />
              <br />
              <span className="genreliketext">Thi show is:&nbsp;&nbsp;</span>
              {props.film && props.film[0].age > 14
                ? "Violent"
                : "Family Friendly"}
            </div>
            {props.film && props.film[0].nameEng}
          </Typography>
          <div style={{ width: "calc(100% - 300px)" }}>
            {props.film ? props.film[0].description : ""}
          </div>
          <br />
          <br />
          <br />
          <hr style={{ opacity: "0.2" }} />
          <br />
          <br />
          <a style={{ fontSize: "25px", color: "#FFC107" }}>More Like This:</a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />6
          <br />
          <br />
          <br />7
          <br />
          <br />8
          <br />v
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />v
        </Box>
      </Modal>
    </div>
  );
}

export default WatchFilm;
