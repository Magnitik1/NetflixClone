import React, { useEffect, useState } from "react";
import "./selectProfile.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SelectProfile = (props) => {
  let [data, setData] = useState(null);
  let [profiles, setProfiles] = useState(null);
  let [manageProfile, setManageProfile] = useState("Manage");
  let tempdata = "";
  let navigate = useNavigate();
  let addProfile = () => {
    props.setCurrentProfile(null);
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
            email: props.email,
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
            }}
            sx={{
              width: "190px",
              height: "240px",
              background: "black",
              margin: "5px",
            }}>
            <CardActionArea>
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
      <h1 className="select-profiles-text">Manage Profiles</h1>
      <div className="profiles-conteiner">
        <Link style={{display:"flex"}} to={manageProfile === "Done" ? "/EditProfile" : "/Home"}>
          {profiles}
        </Link>
        {manageProfile === "Done" ? (
          ""
        ) : (
          <Link
            to="/EditProfile"
            onClick={() => {
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
          setManageProfile(manageProfile === "Manage" ? "Done" : "Manage");
        }}>
        {manageProfile}
      </Button>
    </div>
  );
};

export default SelectProfile;
