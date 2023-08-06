import { Link } from "react-router-dom";
import "./mainPageTop.css";
import { text } from "../../Redux.js";
import planet from "./../picsAndFonts/planet.png";
import down from "./../picsAndFonts/down.png";

function MainPageTop(props) {
  let ChangeLanguage = (e) => {
    if (e === "English") {
      props.changeLang(text.ENG);
    } else {
      props.changeLang(text.UA);
    }
  };
  return (
    <div className="MainPageTop">
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
            {props.lang[0]}</a>
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
        <span className="top-text-big">{props.lang[1]}</span>
        <br />
        <br />
        <br />
        <span className="top-text-mid">{props.lang[2]}</span>
        <br />
        <br />
        <br />
        <span className="top-text-small">{props.lang[3]}</span>
      </div>
      <form className="email-adress">
        <button className="place-for-button">{props.lang[4]}</button>
        <input className="place-to-write" placeholder={props.lang[5]} type="text" />
      </form>
    </div>
  );
}

export default MainPageTop;
