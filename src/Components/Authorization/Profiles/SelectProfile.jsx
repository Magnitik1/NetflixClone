import React, { useEffect, useState } from "react";
import "./selectProfile.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const SelectProfile = (props) => {
  let [data, setData] = useState(null);
  let [profiles, setProfiles] = useState(null);
  let [manageProfile, setManageProfile] = useState("Manage");
  let tempdata = "";
  let addProfile = () => {
    props.setCurrentProfile(null);
    localStorage.setItem("currentProfile", "");
  };
  useEffect(() => {
    async function container() {
      async function getData() {
        const response = await fetch("http://localhost:3000/api_account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("currentAccount"),
          }),
        });
        tempdata = await response.json();
        setData(tempdata);
      }
      if (data === null) {
        await getData();
      }
      setProfiles(
        tempdata.users.map((e) => (
          <Card
            onClick={() => {
              props.setCurrentProfile(e.name);
              localStorage.setItem("currentProfile", e.name);
            }}
            sx={{
              width: "190px",
              height: "240px",
              background: "black",
              margin: "5px",
            }}>
            <CardActionArea>
              <div
                style={{
                  backgroundColor: "black",
                  opacity: "0",
                  width: "190px",
                  height: "190px",
                  position: "absolute",
                  
                }}
                id={"editBG"+e.name}/>
              <svg
                zIndex="-2"
                style={{ position: "absolute", margin: "60px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="white"
                id={"edit"+e.name}
                opacity="0">
                <path d="M67.982 14.221a10.606 10.606 0 0 0-3.049-6.792l-.436-.435c-1.881-1.882-4.354-2.918-6.961-2.918-2.465 0-4.764.941-6.475 2.652L10.94 46.85c-3.097 3.096-6.277 15.676-6.883 18.166-.165.68.035 1.395.529 1.889l.435.434a1.993 1.993 0 0 0 1.844.539c2.541-.559 15.373-3.506 18.484-6.617L65.474 21.14c1.776-1.776 2.667-4.233 2.508-6.919zm-18.074 4.762a.997.997 0 0 0 1.414 0l3.016-3.016 1.896 1.895-34.987 34.987-1.895-1.895 29.076-29.075a.999.999 0 1 0-1.414-1.414L17.938 49.54l-2.016-2.017 34.986-34.985 2.016 2.015-3.016 3.016a1 1 0 0 0 0 1.414zM24.675 56.277l-2.015-2.015 34.987-34.986 2.016 2.015-34.988 34.986zM10.28 57.71l4.087 4.088a123.412 123.412 0 0 1-5.755 1.565 123.02 123.02 0 0 1 1.668-5.653zm6.24 3.413l-5.529-5.53c.991-2.821 1.994-5.133 2.777-5.915l.74-.74 2.722 2.722.001.002.002.001 6.028 6.029-.74.74c-.779.779-3.128 1.748-6.001 2.691zM62.645 18.31l-1.568 1.568-6.03-6.03-.001-.001-.002-.001-2.721-2.721 1.568-1.568c.955-.955 2.25-1.48 3.646-1.48 1.539 0 3.007.62 4.133 1.746l.435.435a6.55 6.55 0 0 1 1.885 4.199c.089 1.527-.388 2.896-1.345 3.853z"></path>
              </svg>
              <CardMedia
                component="img"
                height="190px"
                style={{ borderRadius: "5px" }}
                image={e.imgSrc}
                alt="img"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="#848484"
                  style={{ textAlign: "center" }}>
                  {e.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      );
    }
    container();
  }, []);

  return (
    <div className="select-profiles">
      <a className="select-profiles-text">Manage Profiles</a>
      <div className="profiles-conteiner">
        <Link
          style={{ display: "flex" }}
          to={manageProfile === "Done" ? "/EditProfile" : "/Home"}>
          {profiles}
        </Link>
        {manageProfile === "Done" ? (
          ""
        ) : (
          <Link
            to="/EditProfile"
            onClick={() => {
              localStorage.setItem("currentProfile", "");
              props.setCurrentProfile(null);
            }}
            style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="115"
              height="115"
              viewBox="0 0 115 115"
              fill="none">
              <path
                d="M57.4999 9.58301C31.0787 9.58301 9.58325 31.0784 9.58325 57.4997C9.58325 83.9209 31.0787 105.416 57.4999 105.416C83.9212 105.416 105.417 83.9209 105.417 57.4997C105.417 31.0784 83.9212 9.58301 57.4999 9.58301ZM81.4583 62.2913H62.2916V81.458H52.7083V62.2913H33.5416V52.708H52.7083V33.5413H62.2916V52.708H81.4583V62.2913Z"
                fill="#848484"
              />
            </svg>
          </Link>
        )}
      </div>

      <Button
        onClick={() => {
          let z=0,o=0;
          if(manageProfile==="Manage"){z=0.5;o=1}
          data.users.map((e)=>{
          document.getElementById("edit"+e.name).style.opacity=o;
          document.getElementById("editBG"+e.name).style.opacity=z;
        })
          setManageProfile(manageProfile === "Manage" ? "Done" : "Manage");
        }}>
        {manageProfile}
      </Button>
    </div>
  );
};

export default SelectProfile;
