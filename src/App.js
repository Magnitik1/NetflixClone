import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage";
import React, { useState } from "react";
import { text } from "./Components/Redux";
import PlanSelectionInfo from "./Components/Authorization/SingUp/PlanSelectionInfo";
import PlanSelection from "./Components/Authorization/SingUp/PlanSelection";
import LogIn from "./Components/Authorization/LogIn/LogIn";
import SingUp from "./Components/Authorization/SingUp/SingUp";
import SelectProfile from "./Components/Authorization/Profiles/SelectProfile";
import EditProfile from "./Components/Authorization/Profiles/EditProfile";
import Account from "./Components/Authorization/Accout/Account";
import SelectPicture from "./Components/Authorization/Profiles/SelectPicture";
import img0 from "./Components/MainPage/picsAndFonts/profilePic.png";
import Player from "./Components/Home/Player/Player";
import img1 from "./Components/MainPage/picsAndFonts/1.png";
import img2 from "./Components/MainPage/picsAndFonts/2.png";
import img3 from "./Components/MainPage/picsAndFonts/3.png";
import img4 from "./Components/MainPage/picsAndFonts/4.png";
import img5 from "./Components/MainPage/picsAndFonts/5.png";
import img6 from "./Components/MainPage/picsAndFonts/6.png";
import img7 from "./Components/MainPage/picsAndFonts/7.png";
import img8 from "./Components/MainPage/picsAndFonts/8.png";
import img9 from "./Components/MainPage/picsAndFonts/9.png";
import img10 from "./Components/MainPage/picsAndFonts/10.png";
import img11 from "./Components/MainPage/picsAndFonts/11.png";
import img12 from "./Components/MainPage/picsAndFonts/12.png";
import img13 from "./Components/MainPage/picsAndFonts/13.png";
import img14 from "./Components/MainPage/picsAndFonts/14.png";
import img15 from "./Components/MainPage/picsAndFonts/15.png";
import img16 from "./Components/MainPage/picsAndFonts/16.png";
let FilmsInfo = {
  0: {
    adult: false,
    backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    genre_ids: [16, 35, 10751, 14, 10749],
    id: 976573,
    original_language: "en",
    original_title: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 3832.175,
    poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    video: false,
    vote_average: 7.8,
    vote_count: 1360,
  },
  1: {
    adult: false,
    backdrop_path: "/xVMtv55caCEvBaV83DofmuZybmI.jpg",
    genre_ids: [53, 28],
    id: 724209,
    original_language: "en",
    original_title: "Heart of Stone",
    overview:
      "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.",
    popularity: 3796.765,
    poster_path: "/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    release_date: "2023-08-09",
    title: "Heart of Stone",
    video: false,
    vote_average: 7,
    vote_count: 734,
  },
  2: {
    adult: false,
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre_ids: [16, 28, 12],
    id: 569094,
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    popularity: 2433.631,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    video: false,
    vote_average: 8.5,
    vote_count: 3722,
  },
  3: {
    adult: false,
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 1596.732,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.5,
    vote_count: 2915,
  },
  4: {
    adult: false,
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 1456.526,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.4,
    vote_count: 3331,
  },
  5: {
    adult: false,
    backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    genre_ids: [28, 12, 878],
    id: 298618,
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    popularity: 1405.843,
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    video: false,
    vote_average: 7,
    vote_count: 2463,
  },
  6: {
    adult: false,
    backdrop_path: "/axIU0Ay88ZSfZHL5AlsQm64Bcb8.jpg",
    genre_ids: [16, 878, 28, 12],
    id: 1121575,
    original_language: "en",
    original_title: "Babylon 5: The Road Home",
    overview:
      "Travel across the galaxy with John Sheridan as he unexpectedly finds himself transported through multiple timelines and alternate realities in a quest to find his way back home. Along the way he reunites with some familiar faces, while discovering cosmic new revelations about the history, purpose, and meaning of the Universe.",
    popularity: 1345.442,
    poster_path: "/qlXLiFKf2kvJ4K2VDBC5Z048vm3.jpg",
    release_date: "2023-08-15",
    title: "Babylon 5: The Road Home",
    video: false,
    vote_average: 7.1,
    vote_count: 25,
  },
  7: {
    adult: false,
    backdrop_path: "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
    genre_ids: [35, 10749],
    id: 884605,
    original_language: "en",
    original_title: "No Hard Feelings",
    overview:
      "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
    popularity: 1336.849,
    poster_path: "/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    release_date: "2023-06-15",
    title: "No Hard Feelings",
    video: false,
    vote_average: 7.1,
    vote_count: 859,
  },
  8: {
    adult: false,
    backdrop_path: "/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: "en",
    original_title: "Meg 2: The Trench",
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    popularity: 1183.525,
    poster_path: "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    video: false,
    vote_average: 6.9,
    vote_count: 568,
  },
  9: {
    adult: false,
    backdrop_path: "/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg",
    genre_ids: [27],
    id: 709631,
    original_language: "en",
    original_title: "Cobweb",
    overview:
      "Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom wall—one that his parents insist is all in his imagination. As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.",
    popularity: 1171.645,
    poster_path: "/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg",
    release_date: "2023-07-19",
    title: "Cobweb",
    video: false,
    vote_average: 6.8,
    vote_count: 193,
  },
  10: {
    adult: false,
    backdrop_path: "/bz66a19bR6BKsbY8gSZCM4etJiK.jpg",
    genre_ids: [28, 27, 53],
    id: 1006462,
    original_language: "en",
    original_title: "The Flood",
    overview:
      "A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.",
    popularity: 1140.926,
    poster_path: "/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg",
    release_date: "2023-07-14",
    title: "The Flood",
    video: false,
    vote_average: 6.9,
    vote_count: 154,
  },
  11: {
    adult: false,
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    genre_ids: [28, 80, 53],
    id: 385687,
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    popularity: 1087.188,
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    video: false,
    vote_average: 7.3,
    vote_count: 3456,
  },
  12: {
    adult: false,
    backdrop_path: "/1Ju8s25F6l1K1cQRU2mHaODQvzj.jpg",
    genre_ids: [28, 12, 10752],
    id: 961420,
    original_language: "ja",
    original_title: "キングダム2 遥かなる大地へ",
    overview:
      "It follows a young man who dreams of becoming a general and Ying Zheng, whose goal is unification.",
    popularity: 1046.559,
    poster_path: "/wE4NqJosSPjiyqStBEv67mQbR1b.jpg",
    release_date: "2022-07-15",
    title: "Kingdom 2: Far and Away",
    video: false,
    vote_average: 7,
    vote_count: 13,
  },
  13: {
    adult: false,
    backdrop_path: "/AioRI7M077BBR33VimFiyFop2Rc.jpg",
    genre_ids: [28, 12, 53],
    id: 1149381,
    original_language: "pl",
    original_title: "Operacja: Soulcatcher",
    overview:
      "A military contractor hired to seize a weapon that turns people into savage killers seeks revenge when his brother falls victim to the device.",
    popularity: 969.106,
    poster_path: "/l1f9JSPjCfNftigEii1SDK1g2b3.jpg",
    release_date: "2023-08-02",
    title: "Soulcatcher",
    video: false,
    vote_average: 6.6,
    vote_count: 139,
  },
  14: {
    adult: false,
    backdrop_path: "/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg",
    genre_ids: [27, 9648, 53],
    id: 614479,
    original_language: "en",
    original_title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    popularity: 929.482,
    poster_path: "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    release_date: "2023-07-05",
    title: "Insidious: The Red Door",
    video: false,
    vote_average: 6.9,
    vote_count: 957,
  },
  15: {
    adult: false,
    backdrop_path: "/97bwlJw220Z5XE3xAHF6G8gA8g6.jpg",
    genre_ids: [27, 14, 28],
    id: 644124,
    original_language: "it",
    original_title: "Dampyr",
    overview:
      "Haunted by nightmares, con artist Harlan Draka wanders through the war-torn Balkan countryside, making money out of ridding superstitious villagers of imaginary monsters. But after being hired by soldiers who are under attack by actual vampires, Harlan discovers the truth: he's a Dampyr, half-human and half-vampire. While trying to stop a Master of the Night and his undead army, Harlan will have to learn to manage his newfound powers and uncover his origins.",
    popularity: 863.7,
    poster_path: "/zAWfB7kaEUUrnTX9ZlaeySAAGgM.jpg",
    release_date: "2022-10-28",
    title: "Dampyr",
    video: false,
    vote_average: 6.7,
    vote_count: 54,
  },
  16: {
    adult: false,
    backdrop_path: "/6IafiYxaqR2MxCnEC29bi6637eo.jpg",
    genre_ids: [27, 14, 28],
    id: 457332,
    original_language: "it",
    original_title: "Hidden Strike",
    overview:
      "Haunted by nightmares, con artist Harlan Draka wanders through the war-torn Balkan countryside, making money out of ridding superstitious villagers of imaginary monsters. But after being hired by soldiers who are under attack by actual vampires, Harlan discovers the truth: he's a Dampyr, half-human and half-vampire. While trying to stop a Master of the Night and his undead army, Harlan will have to learn to manage his newfound powers and uncover his origins.",
    popularity: 863.7,
    poster_path: "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
    release_date: "2022-10-28",
    title: "Hidden Strike",
    video: false,
    vote_average: 6.7,
    vote_count: 54,
  },
  17: {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    genre_ids: [878, 12, 28],
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    popularity: 773.535,
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Vol. 3",
    video: false,
    vote_average: 8,
    vote_count: 18,
  },
  18: {
    adult: false,
    backdrop_path: "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
    genre_ids: [878, 12, 28],
    id: 447277,
    original_language: "en",
    original_title: "The Little Mermaid",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    popularity: 773.535,
    poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    release_date: "2023-05-03",
    title: "The Little Mermaid",
    video: false,
    vote_average: 8,
    vote_count: 18,
  },
  19: {
    adult: false,
    backdrop_path: "/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg",
    genre_ids: [878, 12, 28],
    id: 1083862,
    original_language: "ja",
    original_title: "バイオハザード：デスアイランド",
    overview:
      "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
    popularity: 773.535,
    poster_path: "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
    release_date: "2023-05-03",
    title: "Resident Evil: Death Island",
    video: false,
    vote_average: 8,
    vote_count: 18,
  },
};
localStorage.setItem("tempData", false);

function App(props) {
  let images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  let tempAccount = localStorage.getItem("currentAccount") ? getData() : "";
  let tempProfile = localStorage.getItem("currentProfile")
    ? localStorage.getItem("currentProfile")
    : "";

  let [currentVideo, setCurrentVideo] = useState("");
  let [lang, changeLang] = useState(text.ENG);
  let [selectedFilm, setSelectedFilm] = useState(0);
  const [email, setEmail] = useState("");
  let [currentAccount, setCurrentAccount] = useState(tempAccount);
  let [currentProfile, setCurrentProfile] = useState(tempProfile);
  const [password, setPassword] = useState("");

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
    let tempdata = await response.json();
    return tempdata;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <MainPage lang={lang} changeLang={changeLang} text={text} />
            }
          />
          <Route
            path="/"
            element={
              <MainPage lang={lang} changeLang={changeLang} text={text} />
            }
          />
          <Route
            path="/Home"
            element={
              <Home
                setCurrentVideo={setCurrentVideo}
                images={images}
                FilmsInfo={FilmsInfo}
                lang={lang}
                changeLang={changeLang}
                text={text}
                selectedFilm={selectedFilm}
                setSelectedFilm={setSelectedFilm}
              />
            }
          />
          <Route
            path="/LogIn"
            element={
              <LogIn
                lang={lang}
                changeLang={changeLang}
                text={text}
                setEmail={setEmail}
                email={email}
                setPassword={setPassword}
                password={password}
                setCurrentAccount={setCurrentAccount}
              />
            }
          />
          <Route
            path="/SingUp"
            element={
              <SingUp
                lang={lang}
                changeLang={changeLang}
                text={text}
                setEmail={setEmail}
                email={email}
                setPassword={setPassword}
                password={password}
                setCurrentAccount={setCurrentAccount}
              />
            }
          />
          <Route
            path="/PlanSelectionInfo"
            element={
              <PlanSelectionInfo
                lang={lang}
                changeLang={changeLang}
                text={text}
              />
            }
          />
          <Route
            path="/PlanSelection"
            element={
              <PlanSelection
                lang={lang}
                changeLang={changeLang}
                text={text}
                setEmail={setEmail}
                email={email}
                setPassword={setPassword}
                password={password}
                setCurrentAccount={setCurrentAccount}
                currentAccount={currentAccount}
              />
            }
          />
          <Route
            path="/SelectProfile"
            element={
              <SelectProfile
                images={images}
                email={email}
                text={text}
                lang={lang}
                setCurrentProfile={setCurrentProfile}
                currentAccount={currentAccount}
              />
            }
          />
          <Route
            path="/EditProfile"
            element={
              <EditProfile
                images={images}
                lang={lang}
                changeLang={changeLang}
                text={text}
                email={email}
                currentProfile={currentProfile}
                currentAccount={currentAccount}
              />
            }
          />
          <Route
            path="/Account"
            element={
              <Account
                images={images}
                lang={lang}
                changeLang={changeLang}
                text={text}
                email={email}
                currentProfile={currentProfile}
                currentAccount={currentAccount}
              />
            }
          />
          <Route
            path="/selectPicture"
            element={
              <SelectPicture
                images={images}
                lang={lang}
                text={text}
                email={email}
                currentProfile={currentProfile}
                currentAccount={currentAccount}
              />
            }
          />
          <Route
            path="/Player"
            element={
              <Player
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
