import React, { useEffect, useState } from "react";
import s from "./editProfile.module.css";
import pic from "../../MainPage/picsAndFonts/profilePic.jpg";
import down from "../../MainPage/picsAndFonts/down.png";
import { useNavigate } from "react-router-dom";
const EditProfile = (props) => {
  let [prof, setProf] = useState("");
  let [autoPlay, setAutoPlay] = useState([true, true]);
  let nav = useNavigate();
  let [tempName, setTempName] = useState(
    localStorage.getItem("currentProfile")
  );
  let ChangeLanguage = (e) => {
    if (e === "English") {
      props.changeLang(props.text.ENG);
    } else {
      props.changeLang(props.text.UA);
    }
  };
  async function getData() {
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
    setAutoPlay(tempdata.autoPlaySettings);
    ChangeLanguage(tempdata.language===props.text.UA[0]?props.text.UA[0]:props.text.ENG[0])
    setProf(tempdata);
    console.log(tempdata);
  }
  useEffect(() => {
    getData();
    document.getElementById("name").value =
      localStorage.getItem("currentProfile");
  }, []);

  let img1 = prof ? prof.imgSrc : pic;
  return (
    <div className={s.edit_profile}>
      <a className={s.text}>{props.lang[44]}</a>
      <hr className={s.line} />
      <div className={s.img}>
        <img src={img1} className={s.profile_pic} onClick={()=>nav("/selectPicture")} />
      </div>
      <div className={s.profile_info}>
        <form>
          <input
            type="text"
            id="name"
            placeholder={props.lang[52]}
            style={{ color: "white" }}
            className={s.name}
            onChange={(e) => setTempName(e.currentTarget.value)}
          />
        </form>
        <br />
        <a>{props.lang[45]}:</a>
        <div className="dd-wrapper2">
          <button className="dd-header2" style={{ width: "120px" }}>
            <a className="dd-header-title">{props.lang[0]}&nbsp;</a>
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
        <a>{props.lang[49]}:</a>
        <h5>{props.lang[51]}</h5>
        <input
          style={{ marginTop: "-20px" }}
          type="text"
          id="gamename"
          value={localStorage.getItem("currentProfile") + "#546408"}
          className={s.name}
        />
        <br />
        <br />
        <hr className={s.line} style={{ opacity: "0.5" }} />
        <a>{props.lang[50]}:</a>
        <br />
        <input
          type="button"
          id="gamename"
          value={props.lang[54]}
          className={s.name2}
        />
        <h5>{props.lang[53]}</h5>
        <hr className={s.line} style={{ opacity: "0.5" }} />
        <a>{props.lang[55]}:</a>
        <br />
        <input
          style={{ margin: "20px", transform: "scale(3)" }}
          type="checkbox"
          checked={autoPlay[0]}
          onChange={() => {
            setAutoPlay([!autoPlay[0], autoPlay[1]]);
          }}
        />
        <a>{props.lang[56]}</a>
        <br />
        <input
          style={{ margin: "20px", transform: "scale(3)" }}
          type="checkbox"
          checked={autoPlay[1]}
          onChange={() => {
            setAutoPlay([autoPlay[0], !autoPlay[1]]);
          }}
        />
        <a>{props.lang[57]}</a>
        <hr className={s.line2} />
        <br />
        <br />
        <input
          onClick={async () => {//save
            if (tempName.trim() === "") {
              return;
            }
            fetch("http://localhost:3000/process_edit_profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: localStorage.getItem("currentAccount"),
                newName: tempName,
                oldName: localStorage.getItem("currentProfile"),
                language: props.lang[0],
                autoPlaySettings: autoPlay,
              }),
            });
            localStorage.setItem("currentProfile", "");
            nav("/selectProfile");
          }}
          type="submit"
          value={props.lang[46]}
          className={s.save + " " + s.btn}
        />
        <input
          onClick={() => {//cencel
            nav("/selectProfile");
          }}
          type="submit"
          value={props.lang[47]}
          className={s.btn + " " + s.cencel}
        />
        <input
          onClick={async () => {//delete
            fetch("http://localhost:3000/process_remove_profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: localStorage.getItem("currentAccount"),
                name: localStorage.getItem("currentProfile"),
              }),
            });
            localStorage.setItem("currentProfile", "");
            nav("/selectProfile");
          }}
          type="submit"
          value={props.lang[48]}
          className={s.btn + " " + s.delete}
        />
      </div>
    </div>
  );
};

export default EditProfile;
