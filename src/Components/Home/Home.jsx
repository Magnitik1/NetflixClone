import React, { useEffect, useState } from "react";
import Top from "./Top.jsx";
import TopFilm from "./TopFilm.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import plus from "../MainPage/picsAndFonts/plus.png";

let sect = 0;
let setSect = () => {
  sect = 0;
};
function Home(props) {
  let [allFilms, setAllFilms] = useState(null);
  let [page, setPage] = useState("Home");
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
  const style = {
    position: "absolute",
    top: "624px",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

  const [open, setOpen] = React.useState(false);
  const [film, setFilm] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    if (page == "Home") {
      console.log("My Home");
    }
    if (allFilms[s].isFilm && page == "Serials") {
      console.log("Serial");
      return NextFilm(sect++);
    }
    if (!allFilms[s].isFilm && page == "Films") {
      console.log("Film");
      return NextFilm(sect++);
    }
    return allFilms ? allFilms[s].img : "";
  };

  let r = [];
  let cc = 12;
  if (page == "Serials") cc = 6;
  else if (page == "Films") cc = 8;
  for (let i = 0; i < cc; i++) r.push(i);
  return (
    <div className="wrapper">
      {/* {open&&"test"} */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        style={{ overflowY: "auto" }}>
        <Box sx={style}>
          <div>
            <img
              src={film && film[0].img}
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
              style={{
                position: "absolute",
                top: "350px",
                borderRadius: "100px",
                zIndex:"5",
              }}>
              <img src={plus} width="60vw" zIndex="6" stryle={{position:"absolute"}}/>
            </Button>
          </div>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {film && film[0].nameEng}
          </Typography>
          {film ? film[0].description : ""}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />v
          <br />
          <br />1
          <br />
          <br />2
          <br />
          <br />3
          <br />
          <br />4
          <br />
          <br />5
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
      <Top
        currentProfile={props.currentProfile}
        images={props.images}
        page={page}
        setPage={setPage}
        setSect={setSect}
      />
      <TopFilm
        FilmsInfo={props.FilmsInfo}
        selectedFilm={props.selectedFilm}
        setSelectedFilm={props.setSelectedFilm}
      />
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
                        id={sect}
                        onClick={(e) => {
                          handleOpen();
                          setFilm([allFilms[e.target.id], e.target.id]);
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
