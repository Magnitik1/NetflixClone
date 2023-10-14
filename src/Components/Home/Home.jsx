import React, { useEffect, useState } from "react";
import Top from "./Top.jsx";
import TopFilm from "./TopFilm.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import WatchFilm from "./WatchFilm.jsx";

let sect = 0;
let setSect = () => {
  sect = 0;
};

function Home(props) {
  let [allFilms, setAllFilms] = useState(null);
  let [myList, setMyList] = useState();
  let [liked, setLiked] = useState(false);

  let [page, setPage] = useState("Home");
  useEffect(() => {
    try {
      setLiked(
        myList
          ? myList.find((e) => {
              if (e.name == film[0].name) return e;
            })
          : false
      );
    } catch {}
    async function getProfile() {
      const response = await fetch("http://localhost:3000/api_profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("currentAccount"),
          name: localStorage.getItem("currentProfile"),
        }),
      });
      let tempdata = await response.json();
      setMyList(tempdata.myList);
    }
    async function getFilms() {
      const response = await fetch("http://localhost:2999/get");
      let tempdata = await response.json();
      setAllFilms(tempdata);
    }
    if (!allFilms) getFilms();
    getProfile();
  }, []);

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

  const [open, setOpen] = React.useState(false);
  const [film, setFilm] = React.useState(null);
  const handleOpen = (q) => {
    try {
      setLiked(
        myList
          ? myList.find((e) => {
              if (e.name == q) return e;
            })
          : false
      );
    } catch {}
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  let nav = useNavigate();
  let openVideo = async () => {
    await props.setCurrentVideo(film[0].nameEng);
    nav("/Player");
  };

  let WatchTheFilm = (s) => {
    if (!allFilms) return;
    return;
  };

  let NextFilm = (s) => {
    if (!allFilms || !allFilms[s]) {
      sect = 0;
      return;
    }
    if (s > 68) {
      sect = 0;
    }
    if (allFilms[s].isFilm && page == "Serials") {
      return NextFilm(sect++);
    }
    if (!allFilms[s].isFilm && page == "Films") {
      return NextFilm(sect++);
    }
    return allFilms ? allFilms[s].img : "";
  };

  let r = [];
  let filmsInRaw = 12;
  if (page == "Serials") filmsInRaw = 6;
  else if (page == "Films") filmsInRaw = 8;
  for (let i = 0; i < filmsInRaw; i++) r.push(i);
  return (
    <div className="wrapper">
      <WatchFilm
        setLiked={setLiked}
        liked={liked}
        setMyList={setMyList}
        myList={myList}
        open={open}
        openVideo={openVideo}
        handleClose={handleClose}
        film={film}
        lang={props.lang}
        changeLang={props.changeLang}
        text={props.text}
      />
      <Top
        images={props.images}
        page={page}
        setPage={setPage}
        setSect={setSect}
        allFilms={allFilms}
      />
      {page == "Home" && (
        <TopFilm
          setFilm={setFilm}
          handleOpen={handleOpen}
          setCurrentVideo={props.setCurrentVideo}
          allFilms={typeof allFilms == "undefined" ? null : allFilms}
          selectedFilm={props.selectedFilm}
          setSelectedFilm={props.setSelectedFilm}
        />
      )}
      {(sect = 0)}
      {sections.map((e) => {
        let language = 1;
        if (props.lang == props.text.UA) {
          language = 0;
        } else {
          language = 1;
        }
        return (
          <div className="container-for-section">
            <a
              style={{ color: "white", fontSize: "22px", marginLeft: "3.2vw" }}>
              {e[language]}
            </a>
            <div className="container-for-carousel">
              <Slider {...settings}>
                {r.map((s) => {
                  return (
                    <div>
                      <img
                        onClick={(e) => {
                          handleOpen(allFilms[e.target.id]);
                          setFilm([allFilms[e.target.id], e.target.id]);
                          WatchTheFilm(e.target.id);
                        }}
                        style={{ cursor: "pointer" }}
                        src={NextFilm(sect++)}
                        id={sect - 1}
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
