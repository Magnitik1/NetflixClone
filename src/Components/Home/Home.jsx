import React, { useEffect, useState } from "react";
import Top from "./Top.jsx";
import Button from "@mui/material/Button";
import right from "./pictures/right1.svg";
import TopFilm from "./TopFilm.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let sect = 0;
function Home(props) {
  let [allFilms, setAllFilms] = useState(null);
  useEffect(() => {
    async function getFilms() {
      const response = await fetch("http://localhost:2999/get");
      let tempdata = await response.json();
      // console.log(tempdata);
      setAllFilms(tempdata);
      // return tempdata;
    }
    if (!allFilms) getFilms();
  }, []);

  // console.log(props.FilmsInfo);
  let sections = [
    ["Нові Релізи", "New Releases", "newReleases"],
    ["Популярне на FlixUa", "Popular On FlixUa", "popularOnFlixUa"],
    ["Аніме", "Anime", "anime"],
    ["Боллівудські Фільми", "Bollywood Movies", "bollywoodMovies"],
    ["ТВ комедії", "TV Comedies", "TVComedies"],
    ["Блокбастер", "Blockbuster", "blockbuster"],
    ["В тренді", "In Trend", "inTrend"],
    ["Серіали для сімейного перегляду", "Family TV shows", "familyTVShows"],
  ];
  const settings = {
    infinite: true,
    speed: 404,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  let WatchTheFilm = (s) => {
    if (!allFilms) return;
    console.log(s)
    console.log(allFilms[s]);
  };
  
  let NextFilm = (s) => {
    
    if(!allFilms||!allFilms[s]){ sect=0;return};
    console.log(s);
    if (s > 60) {
      sect = 0;
      s = 0;
    }

    return allFilms ? allFilms[s].img : "";
  };
  let r = [];
  for (let i = 0; i < 12; i++) r.push(i);
  return (
    <div className="wrapper">
      <Top currentProfile={props.currentProfile} />
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
          <div className="container-for-section">
            <a
              style={{ color: "white", fontSize: "22px", marginLeft: "3.2vw" }}>
              {e[j]}
            </a>
            <div className="container-for-carousel">
              <Slider {...settings}>
                {r.map((s) => {
                  return (
                    <div>
                      <img
                        id={sect}
                        onClick={(e) => {
                          WatchTheFilm(e.target.id);
                        }}
                        style={{ cursor: "pointer" }}
                        src={NextFilm(sect++)}
                        className="carousel-pic-container"
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
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
