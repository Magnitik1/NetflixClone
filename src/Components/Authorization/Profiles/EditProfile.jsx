import React, { useEffect, useState } from "react";
import s from "./editProfile.module.css";
import down from "../../MainPage/picsAndFonts/down.png";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const EditProfile = (props) => {
  let [prof, setProf] = useState("");
  let [acc, setAcc] = useState("");
  let [autoPlay, setAutoPlay] = useState([false, false]);
  let nav = useNavigate();
  let [tempName, setTempName] = useState(
    localStorage.getItem("tempData") == "false"
      ? localStorage.getItem("currentProfile") == "#create"
        ? null
        : localStorage.getItem("currentProfile")
      : JSON.parse(localStorage.getItem("tempData")).name
  );
  let ChangeLanguage = (e) => {
    if (e === "English") {
      props.changeLang(props.text.ENG);
    } else {
      props.changeLang(props.text.UA);
    }
  };
  async function getData() {
    let tempdata = "";
    if (localStorage.getItem("currentProfile") !== "#create") {
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
      tempdata = await response.json();
    }
    const response1 = await fetch("http://localhost:3000/api_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("currentAccount"),
      }),
    });
    let tempdata1 = await response1.json();
    setAcc(tempdata1);

    if (localStorage.getItem("tempData") != "false") {
      setAutoPlay([
        JSON.parse(localStorage.getItem("tempData")).autoPlay0,
        JSON.parse(localStorage.getItem("tempData")).autoPlay1,
      ]);
    } else if (tempdata === "") {
      setAutoPlay(false, false);
    } else {
      setAutoPlay(tempdata.autoPlaySettings);
    }
    ChangeLanguage(
      localStorage.getItem("tempData") != "false"
        ? JSON.parse(localStorage.getItem("tempData")).language
        : tempdata.language === props.text.UA[0]
        ? props.text.UA[0]
        : props.text.ENG[0]
    );
    setProf(tempdata);
  }
  useEffect(() => {
    getData();
    if (localStorage.getItem("currentProfile") == 0) return;
    document.getElementById("name").value =
      localStorage.getItem("tempData") == "false"
        ? localStorage.getItem("currentProfile") === "#create"
          ? null
          : localStorage.getItem("currentProfile")
        : JSON.parse(localStorage.getItem("tempData")).name;
  }, []);

  let img1 = prof ? prof.imgSrc : 0;
  localStorage.setItem(
    "profileImage",
    localStorage.getItem("tempData") == "false"
      ? img1
      : localStorage.getItem("tempPic")
  );
  return (
    <div className={s.edit_profile}>
      <a className={s.text}>{props.lang[44]}</a>
      <hr className={s.line} />
      <div className={s.img}>
        <img
          src={
            localStorage.getItem("tempPic")
              ? props.images[localStorage.getItem("tempPic")]
              : props.images[localStorage.getItem("profileImage")]
          }
          className={s.profile_pic}
          onClick={() => {
            localStorage.setItem(
              "tempData",
              JSON.stringify({
                name: tempName,
                language: props.lang[0],
                img: localStorage.getItem("profileImage"),
                autoPlay0: autoPlay[0],
                autoPlay1: autoPlay[1],
              })
            );
            nav("/selectPicture");
          }}
        />
      </div>
      <div className={s.profile_info}>
        <form>
          <input
            type="text"
            id="name"
            placeholder={props.lang[52]}
            style={{ color: "white" }}
            className={s.name}
            onChange={(e) => {
              setTempName(e.currentTarget.value);
            }}
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
          placeholder={props.lang[49]}
          value={
            localStorage.getItem("currentProfile")
              ? null
              : localStorage.getItem("currentProfile") + "#546408"
          }
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
          onClick={async () => {
            //save
            tempName += "";
            tempName = tempName.trim();
            let prap = 0;
            acc.users.map((e) => {
              if (
                e.name === tempName &&
                localStorage.getItem("currentProfile") !== tempName
              ) {
                prap = 1;
                return;
              }
              console.log(e.imgSrc);

              if (
                e.imgSrc === localStorage.getItem("profileImage") &&
                e.name !== tempName
              ) {
                prap = 2;
                return;
              }
            });
            if (prap === 1) {
              alert("This Username is already taken!");
              <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
              </Alert>;
              return;
            }
            if (prap === 2) {
              alert("This Picture is already taken!");
              <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
              </Alert>;
              return;
            }
            if (
              localStorage.getItem("currentProfile") == "0" &&
              localStorage.getItem("tempPic") > 0 &&
              localStorage.getItem("tempPic") <= props.images.length
            ) {
            }
            if (
              tempName === "" ||
              tempName === "#create" ||
              localStorage.getItem("profileImage") == "0"
            ) {
              return;
            }

            if (localStorage.getItem("currentProfile") === "#create") {
              fetch("http://localhost:3000/process_post_profile", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: localStorage.getItem("currentAccount"),
                  profile: {
                    name: tempName,
                    language: props.lang[0],
                    autoPlaySettings: autoPlay,
                    imgSrc: localStorage.getItem("profileImage"),
                  },
                }),
              });
            } else
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
                  imgSrc: localStorage.getItem("tempPic"),
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
          onClick={() => {
            //cancel
            nav("/selectProfile");
          }}
          type="submit"
          value={props.lang[47]}
          className={s.btn + " " + s.cancel}
        />
        <input
          onClick={async () => {
            //delete
            if (localStorage.getItem("currentProfile") === "#create") {
              nav("/selectProfile");
              return;
            }
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
