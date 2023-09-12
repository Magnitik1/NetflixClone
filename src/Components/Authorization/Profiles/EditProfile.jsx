import React from "react";
import "./editProfile.css";
import pic from "../../MainPage/picsAndFonts/profilePic.jpg"
const EditProfile = (props) => {
  let profile = props.currentAccount.users[props.currentAccount.users.findIndex((e)=>e.name===props.currentProfile)];
  let img1 = profile?profile.imgSrc:pic;
  let name = profile?profile.name:"Still no name u need to write down one";
  return (
    <div className="edit-profile">
      <img src={img1}/>
      {name}
    </div>
  );
};

export default EditProfile;
