import "./mainPage.css";
import MainPageTop from "./MainPageTop/MainPageTop";
import MainPageContent from "./MainPageContent/MainPageContent";
import { useState } from "react";
import { text } from "../Redux.js";

function MainPage(props) {
  let [lang, changeLang] = useState(text.ENG);
  return (
    <div>
      <MainPageTop lang={lang} changeLang={changeLang}/>
      <MainPageContent lang={lang} changeLang={changeLang}/>
    </div>
  );
}

export default MainPage;
