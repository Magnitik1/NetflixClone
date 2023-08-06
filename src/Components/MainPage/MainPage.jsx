import { Link } from "react-router-dom";
import "./mainPage.css";
import { text, currentLanguage } from "../Redux.js";
import { useState } from "react";
import planet from "./planet.png";
import down from "./down.png";

function MainPage(props) {
  let [lang, changeLang] = useState(text.ENG);
  let ChangeLanguage = (e) => {
    if (e === "English") {
      changeLang(text.ENG);
    } else {
      changeLang(text.UA);
    }
  };
  return (
    <div className="MainPage">
      <a className="logo">FLIXUA</a>
      <button className="sign-in-button">
        <Link to="/Authorization" className="sign-in-text">
          Sign In
        </Link>
      </button>
      <div className="dd-wrapper">
        <button className="dd-header">
          <a className="dd-header-title">
            <img src={planet} style={{width:"16px", position:"absolute", top:"11px", left:"6px"}}/>
            {lang[0]}</a>
            <img src={down} style={{width:"14px", position:"absolute", top:"12.5px", marginLeft:"4px"}}/>
        </button>
        <div className="dd-list">
          <p
            className="dd-list-item"
            onClick={(e) => ChangeLanguage(text.UA[0])}>
            {text.UA[0]}
          </p>
          <p
            className="dd-list-item"
            onClick={(e) => ChangeLanguage(text.ENG[0])}>
            {text.ENG[0]}
          </p>
        </div>
      </div>
      <div className="main-page-top" />
      <div className="top-text-wrapper">
        <span className="top-text-big">{lang[1]}</span>
        <br />
        <br />
        <br />
        <span className="top-text-mid">{lang[2]}</span>
        <br />
        <br />
        <br />
        <span className="top-text-small">{lang[3]}</span>
      </div>
      <form className="email-adress">
        <button className="place-for-button">{lang[4]}</button>
        <input className="place-to-write" placeholder={lang[5]} type="text" />
      </form>
    </div>
  );
}

export default MainPage;
