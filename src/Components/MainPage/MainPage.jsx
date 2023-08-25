import MainPageTop from "./MainPageTop/MainPageTop";
import MainPageContent from "./MainPageContent/MainPageContent";
import Footer from "../Footer/Footer";


function MainPage(props) {

  return (
    <div>
      <MainPageTop lang={props.lang} changeLang={props.changeLang}/>
      <MainPageContent lang={props.lang} changeLang={props.changeLang}/>
      <Footer lang={props.lang} changeLang={props.changeLang} text={props.text}/>
    </div>
  );
}

export default MainPage;
