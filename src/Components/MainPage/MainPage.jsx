import MainPageTop from "./MainPageTop/MainPageTop";
import MainPageContent from "./MainPageContent/MainPageContent";
import { useState } from "react";
import { text } from "../Redux.js";
import Footer from "../Footer/Footer";

function MainPage(props) {
  let [lang, changeLang] = useState(text.ENG);
  return (
    <div>
      <MainPageTop lang={lang} changeLang={changeLang}/>
      <MainPageContent lang={lang} changeLang={changeLang}/>
      <Footer lang={lang} text={text} changeLang={changeLang}/>
    </div>
  );
}

export default MainPage;
