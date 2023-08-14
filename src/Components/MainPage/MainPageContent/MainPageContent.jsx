import "./mainPageContent.css";
import WatchEverywhere from "../picsAndFonts/WatchEverywhere.png";
import EnjoyOnYourTV from "../picsAndFonts/EnjoyOnYourTV.png";
import Children from "../picsAndFonts/Children.png";
import DownloadApp from "../picsAndFonts/DownloadApp.png";
import { MainPageQuestions } from "./Questions/MainPageQuestions";

function MainPageContent(props) {
  let content = [6, 8, 10, 12].map((e) => {
    let prap = e % 4 == 0?"Right":"Left";
    let pics = [EnjoyOnYourTV, DownloadApp, WatchEverywhere, Children]
    return (
      <>
        <hr className="myLine" />
        <div className="contentSector">
          <div className={"textInContentSector "+prap+"Text"}>
            <span className="bigTextInContentSector">{props.lang[e]}</span>
            <br />
            <br />
            <span className="smallTextInContentSector">
              {props.lang[e + 1]}
            </span>
          </div>
          <img src={pics[(e-4)/2-1]} className={"pitureInContent pic"+prap} />
        </div>
      </>
    );
  });

  
  return <div className="MainPageContent">
    {content}
    <hr className="myLine" />
    <MainPageQuestions lang={props.lang} changeLang={props.changeLang}/>
    </div>;
}

export default MainPageContent;
