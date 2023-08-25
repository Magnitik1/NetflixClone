import React from "react";
import Footer from "../../Footer/Footer.jsx";
import axios from "axios";

function WatchFilm(props) {

  return (
    <>
      <div style={{color:"white"}}>{props.FilmsInfo[0].title}</div>
      <Footer lang={props.lang} changeLang={props.changeLang} text={props.text}/>
    </>
  );
}

export default WatchFilm;
