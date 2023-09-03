import "./footer.css";
import planet from "../MainPage/picsAndFonts/planet.png";
import down from "../MainPage/picsAndFonts/down.png";
import React from "react";

function Footer(props) {
  let ChangeLanguage = (e) => {
    if (e === props.text.ENG[0]) {
      props.changeLang(props.text.ENG);
    } else {
      props.changeLang(props.text.UA);
    }
  };

  return (
    <div className="Footer">
      <div className="number">{props.lang[27]}</div>
      <div className="col1">
        <ul>
          <li>{props.lang[28]}</li>
          <li>{props.lang[29]}</li>
          <li>{props.lang[30]}</li>
          <li>{props.lang[31]}</li>
          <div className="dd-wrapper2">
            <button className="dd-header2">
              <a className="dd-header-title">
                <img
                  src={planet}
                  style={{
                    width: "16px",
                    marginBottom: "-1px",
                    marginLeft: "-3px",
                    marginRight: "3px",
                  }}
                />
                {props.lang[0]}&nbsp;
              </a>
              <img
                src={down}
                style={{
                  marginBottom: "-2px",
                  width: "14px",
                }}
              />
            </button>
            <div className="dd-list2">
              <p
                className="dd-list-item"
                onClick={(e) => ChangeLanguage(props.text.UA[0])}>
                {props.text.UA[0]}
              </p>
              <p
                className="dd-list-item"
                onClick={(e) => ChangeLanguage(props.text.ENG[0])}>
                {props.text.ENG[0]}
              </p>
            </div>
          </div>
          <br />

          <br />
        </ul>
      </div>
      <div className="col2">
        <ul>
          <li>{props.lang[32]}</li>
          <li>{props.lang[33]}</li>
          <li>{props.lang[34]}</li>
          <li>{props.lang[35]}</li>
        </ul>
      </div>
      <div className="col3">
        <ul>
          <li>{props.lang[36]}</li>
          <li>{props.lang[37]}</li>
          <li>{props.lang[38]}</li>
          <li>{props.lang[39]}</li>
        </ul>
      </div>
      <div className="col4">
        <ul>
          <li>{props.lang[40]}</li>
          <li>{props.lang[41]}</li>
          <li>{props.lang[42]}</li>
          <a
            style={{
              fontSize: "14px",
              position: "absolute",
              bottom: "-100px",
            }}>
            FlixUA Ukraine 
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
