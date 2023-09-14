import React, { useEffect, useState } from "react";
import "./editProfile.css";
import pic from "../../MainPage/picsAndFonts/profilePic.jpg"
const EditProfile = (props) => {
  let [prof, setProf] = useState("");
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
    setProf(tempdata)
    console.log(tempdata)
  }
  useEffect(()=>{getData();},[])
  console.log(prof)
  let img1 = prof?prof.imgSrc:pic;
  let name = prof?prof.name:"some text";
  return (
    <div className="edit-profile">
      <img src={img1}/>
      {name}
    </div>
  );
};

export default EditProfile;
