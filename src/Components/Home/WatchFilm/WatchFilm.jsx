import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer.jsx";
import "./watchFilm.css";
import axios from "axios";

function WatchFilm(props) {
  let [videoID, setVideoID] = useState("123");

  let dataName = [];

  let request = async () => {
    // const response = await fetch("http://localhost:3000/api");
    // const data = await response.json();
    // console.log(data);    
    await fetch("http://localhost:3000/process_remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "tyler@gmail.com" }),
    });
  };

  let FI2 = async (id) => {
    let api_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=`;
    let api_key = "9cb46f70376b42f505fe5cac16fa8f42";
    const data = await axios.get(`${api_url}${api_key}`, {
      params: {
        api_key,
      },
    });
    let f = data.data.results[0].key;
    setVideoID(f);
    // FilmsInfo = data.data.results;
  };

  // useEffect(
  FI2(props.FilmsInfo[props.selectedFilm].id);
  // ,[])

  return (
    <>
      <div className="information-about-film">
        <img
          onClick={request}
          src={
            "https://image.tmdb.org/t/p/w500/" +
            props.FilmsInfo[props.selectedFilm].backdrop_path
          }
          style={{ margin: "5px" }}></img>
        <br />
        <br />
        <div>{props.FilmsInfo[props.selectedFilm].title}</div>
        <br />
        <br />
        <div>
          {props.FilmsInfo[props.selectedFilm].overview
            ? props.FilmsInfo[props.selectedFilm].overview
            : null}
        </div>
        <div
          style={{
            padding: "3px",
            paddingBottom: "0",
            position: "absolute",
            right: "5px",
            top: "0",
            backgroundColor: "grey",
          }}>
          <iframe
            width="600"
            height="350"
            src={`https://www.youtube.com/embed/${videoID}`}
            title="Elemental | We Love You Lutz"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
      <Footer
        lang={props.lang}
        changeLang={props.changeLang}
        text={props.text}
      />
    </>
  );
}

export default WatchFilm;
