import React, { useEffect, useState } from "react";
import s from "./editProfile.module.css";

// import temppic from `../../MainPage/picsAndFonts/${localStorage.getItem('profileImage')}.png`;
import { Link, useNavigate } from "react-router-dom";

const SelectPicture = (props) => {
  let [pic, setPic] = useState(localStorage.getItem("profileImage"));
  let nav = useNavigate();
  let change = () => {
    console.log(pic);
    localStorage.setItem("tempPic", pic);
  };

  let choose = (e, num) => {
    localStorage.setItem("profileImage", num);
    setPic(num);
  };
  return (
    <>
      <img
        src={props.images[localStorage.getItem("profileImage")]}
        className={s.prof_img}
      />
      <div className={s.selectPicture}>
        <Link to="/editProfile">
          <a
            className="logo"
            onClick={change}
            style={{ left: "25px", top: "-5px" }}>
            Back
          </a>
        </Link>
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
        <div>The Classics</div>
        <br />
        <div>
          {[1, 2, 3, 4, 5, 6].map((e) => {
            return (
              <img
                src={props.images[e]}
                onClick={() => choose(props.images[e], e)}
              />
            );
          })}
        </div>
        <br />
        <br />
        <div>BlackWhite</div>
        <br />
        <div>
          {[7, 8, 9, 10, 11].map((e) => {
            return (
              <img
                src={props.images[e]}
                onClick={() => choose(props.images[e], e)}
              />
            );
          })}
        </div>
        <br />
        <br />
        <div>Hehe</div>
        <br />
        <div>
          {[12, 13].map((e) => {
            return (
              <img
                src={props.images[e]}
                onClick={() => choose(props.images[e], e)}
              />
            );
          })}
        </div>
        <br />
        <br />
        <div>Bonjour</div>
        <br />
        <div>
          {[14, 15, 16].map((e) => {
            return (
              <img
                src={props.images[e]}
                onClick={() => choose(props.images[e], e)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectPicture;
