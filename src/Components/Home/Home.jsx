import React, { useEffect } from "react";
import Top from "./Top.jsx";
import Button from "@mui/material/Button";
import right from "./pictures/right1.svg";
import TopFilm from "./TopFilm.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

function Home(props) {
  let count = 0;
  let data = [{}, {}, {}, {}, {}, {}];

  // console.log(props.FilmsInfo);
  let sections = [
    ["Нові Релізи", "New Releases", "newReleases"],
    [
      "Серіали про надприродні явища",
      "TV shows about supernatural phenomena",
      "TVShowsAboutSupernaturalPhenomena",
    ],
    ["В тренді", "Popular", "Popular"],
    ["Серіали для сімейного перегляду", "Family TV shows", "familyTVShows"],
  ];
  let films = (row) => (
    <>
      <Button
        className="btnbg"
        style={{
          right: "0",
          background: "white",
          borderTopLeftRadius: "60px",
          borderBottomLeftRadius: "60px",
          height: "420px",
          marginTop: "11px",
          width: "40px",
          position: "absolute",
        }}>
        <img src={right} style={{ height: "50%", width: "100%" }} />
      </Button>
      {data.map((e) => {
        if (count < 5 * (row + 1)) {
          count++;
          return (
            <Link id={count-1} onClick={(e)=>{props.setSelectedFilm(e.currentTarget.id)}} to="/WatchFilm">
              <div className="filmsContainer">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    props.FilmsInfo[count - 1].poster_path
                  }
                  className="films"
                />
              </div>
            </Link>
          );
        }
      })}
    </>
  );
  let row = 0;
  return (
    <div className="wrapper">
      <Top />
      <TopFilm
        FilmsInfo={props.FilmsInfo}
        selectedFilm={props.selectedFilm}
        setSelectedFilm={props.setSelectedFilm}
      />
      {sections.map((e) => {
        let j = 1;
        if (props.lang == props.text.UA) {
          j = 0;
        } else {
          j = 1;
        }

        return (
          <>
            <a className="sectionName">{e[j]}</a>
            <div className="sections">{films(row++)}</div>
          </>
        );
      })}
      <Footer
        lang={props.lang}
        changeLang={props.changeLang}
        text={props.text}
      />
    </div>
  );
}

export default Home;
