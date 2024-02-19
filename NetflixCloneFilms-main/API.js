let express = require("express");
let app = express();
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

let data = [
  {
    nameEng: "In focus",
    nameUkr: "В центрі уваги",
    img: "https://upload.wikimedia.org/wikipedia/ru/c/cb/%D0%92_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5_%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg",

    year: 2015,
    age: 16,
    description:
      "American film directed by Tom McCarthy. It was written by McCarthy in collaboration with Josh Singer and is based on events surrounding the Catholic Church sexual harassment scandal in Boston that led to the resignation of Cardinal Bernard Lowe.",
    genres: "drama",
    author: "Tom McCarthy",
    isFilm: true,
  },
  {
    nameEng: "Royal Tenenbaums",
    nameUkr: "Сімейка Тененбаум",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/07/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_%D0%A2%D0%B5%D0%BD%D0%B5%D0%BD%D0%B1%D0%B0%D1%83%D0%BC%C2%BB.jpg/280px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_%D0%A2%D0%B5%D0%BD%D0%B5%D0%BD%D0%B1%D0%B0%D1%83%D0%BC%C2%BB.jpg",

    year: 2001,
    age: 18,
    description:
      "The film tells the story of the Tenenbaum family - once strong and successful. There are three children in the Tenenbaum family, all of whom achieved great success at a very young age. Margo received an award for a play written in ninth grade, and Ches is an outstanding financier, tennis champion, and artist. Disappointments and failures...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "The Babil",
    nameUkr: "Вавілон",
    img: "https://www.kino-teatr.ru/movie/posters/big/8/146348.jpg",

    year: 2020,
    age: 16,
    description:
      "Irfan is an educated man who works as a teacher at the Institute. He is married and has a small son. They do not have much money, but they have enough for life. Suddenly, Irfan is framed by a colleague and fired from work. Next, it turns out that his son has brain cancer. It takes a lot of money to treat...",
    genres: "animated sitcom, adventure, black comedy, satire, science fiction",
    author: "Justin Roiland, Dan Harmon",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018573.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1547115634_1.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018575.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018572.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018580.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018582.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018578.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018579.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018581.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018581.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/146348/pv_1018574.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://kinoturkey.ru/uploads/posts/2020-01/1579345227_ewvgjrfzcsm.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://kinoturkey.ru/uploads/posts/2020-01/medium/1579345295_airpiol3w-s.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://kinoturkey.ru/uploads/posts/2020-01/medium/1579345279_odnwxidj0ea.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Lives of others",
    nameUkr: "Життя інших",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/The_Lives_of_Others_%28poster%29.jpg/328px-The_Lives_of_Others_%28poster%29.jpg",

    year: 2009,
    age: 16,
    description:
      "East Berlin, 1984. A Stasi employee, Captain Gerd Wiesler, is assigned to follow the playwright Georg Dreyman and his girlfriend, the famous actress Krista-Maria Sieland. Dreyman is suspected of sympathizing with West Germany’s capitalist regime.",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Congenital defect",
    nameUkr: "Вроджена вада",
    img: "https://upload.wikimedia.org/wikipedia/ru/e/e9/Inherent_Vice.jpg",

    year: 2014,
    age: 18,
    description:
      "The film takes place in Los Angeles (California) in 1970. The main character - Larry «Doc» Sportello, is a talented private detective. The investigator deals with complicated cases, solves complicated puzzles, easily finds violent killers, maniacs and dangerous robbers. However, he ...",
    genres: "comedy drama, neonoir, detective",
    author: "Paul Thomas Anderson",
    isFilm: true,
  },
  {
    nameEng: "Godfather",
    nameUkr: "Хрещений батько",
    img: "https://upload.wikimedia.org/wikipedia/ru/c/c4/Godfather_vhs.jpg",

    year: 1992,
    age: 18,
    description:
      "1945, New York. Guests have fun at the wedding of Connie Corleone and Carlo Rizzi. Michael’s youngest son, a retired Marine captain, is a hero of the recently ended war and tells his girlfriend Kay Adams about the wedding guests. Meanwhile, Don Vito Corleone’s father, in the old Sicilian tradition...",
    genres: "crime drama gangster movie",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Amour",
    nameUkr: "Кохання",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/22/Amour_film_2012.jpg/330px-Amour_film_2012.jpg",

    year: 2009,
    age: 16,
    description:
      "The film is set in an ordinary Parisian apartment, except for the opening scene. The 80-year-old Georges (Jean-Louis Trentinyan) and Anne (Emmanuel Riva), the honored music teacher, attend a concert by a former student. Their daughter Eva (Isabel Hupper) lives separately with her family. Completely...",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "Rick and Morty",
    nameUkr: "Рік і морті",
    img: "http://rik-i-morti.ru/uploads/covers/season-1.jpg",

    year: 2013,
    age: 16,
    description:
      "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and a misanthropic grandfather dragging his grandson into hijinks.",
    genres: "animated sitcom, adventure, black comedy, satire, science fiction",
    author: "Justin Roiland, Dan Harmon",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1546978079_1.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1547115634_1.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1547491531_1.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1547657940_1.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1547827848_1.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549374891_1.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549286618_1.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549196524_1.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549101439_1.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-01/1548755654_1.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549634132_1.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549804677_1.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549890792_1.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549892760_1.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Carole",
    nameUkr: "Керол",
    img: "https://upload.wikimedia.org/wikipedia/ru/5/5b/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%C2%AB%D0%9A%D1%8D%D1%80%D0%BE%D0%BB%C2%BB.jpg",

    year: 2001,
    age: 13,
    description:
      "Set in New York City in the 1950s. Young salesgirl Therese (Rooney Mara) meets an irresistible woman named Carol (Kate Blanchett). The women are gradually bonding and Therese realizes she is in love. Carol’s husband, whom she is in the process of divorcing, is trying to use a love ...",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Melancholy",
    nameUkr: "Меланхолія",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/97/MelancholiaPoster.jpg/337px-MelancholiaPoster.jpg",

    year: 2011,
    age: 16,
    description:
      "The film consists of two narrative parts and the opening film of the 8-minute prologue, which evokes the «Cosmic odyssey of 2001» and decided as a sequence of flashforwards. The prologue tells of the death of the Earth as a result of a collision with the planet Melancholia.",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Almost Famous",
    nameUkr: "Майже знаменитий",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/%D0%9F%D0%BE%D1%87%D1%82%D0%B8_%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/303px-%D0%9F%D0%BE%D1%87%D1%82%D0%B8_%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",

    year: 2020,
    age: 16,
    description:
      "This film is about a fictional teenager William, who became the will of fate journalist of the music magazine «Rolling Stone» while traveling with the rock band Stillwater with the aim of publishing a main article about this group. The film is based on Cameron Crowe’s real-life experience during a tour with The...",
    genres: "drama, road movie",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "The Good Doctor",
    nameUkr: "Добрий Лікар",
    img: "https://flxt.tmsimg.com/assets/p14159625_b_v9_ab.jpg",

    year: 2013,
    age: 16,
    description:
      "The story is about a young and talented doctor with savant syndrome, which makes him feel nothing for other people, but it does not prevent him from saving their lives..",
    genres: "drama",
    author:
      "Daniel Dae Kim, David Shore, David Kim, Mary Rolich, Sebastian Lee, Lindsay Hoffman, Erin Gunn",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871946.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Sean Murphy suffers from autism, which causes him to have social problems, and savant syndrome, which makes him an expert in medicine. He arrives in San Jose to become a hospital resident",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871947.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871948.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871949.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871949.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871950.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871951.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871951.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "http://rik-i-morti.ru/uploads/posts/2019-02/1549101439_1.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871952.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871955.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871956.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871956.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/136659/pv_871957.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Shawshank redemption",
    nameUkr: "Втеча з Шоушенка",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/317px-Movie_poster_the_shawshank_redemption.jpg",

    year: 1999,
    age: 13,
    description:
      "1947. In the Maine State Court (US), the case of the vice president of a major bank, Andy Dufresne (Tim Robbins), who is falsely accused of murdering his wife and her lover, is heard. Dufresne admits no guilt, but can’t remember what he was doing the night of the murder because he was drunk. Shortly before the murder, Dufresne s...",
    genres: "drama",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "One and two",
    nameUkr: "Один та два",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2f/%D0%9E%D0%B4%D0%B8%D0%BD_%D0%B8_%D0%B4%D0%B2%D0%B0.jpeg/360px-%D0%9E%D0%B4%D0%B8%D0%BD_%D0%B8_%D0%B4%D0%B2%D0%B0.jpeg",

    year: 2003,
    age: 18,
    description:
      "The film depicts a critical period in the life of a Taiwanese middle-class family. Shortly after the unsuccessful marriage of a family member, his mother suffers a heart attack and falls into a coma. Her daughter Min-Min is worried that she can not communicate with her mother and goes to a secluded place, ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Oldboy",
    nameUkr: "Олдбой",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9%C2%BB_%282003%29.jpg/345px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D0%BB%D0%B4%D0%B1%D0%BE%D0%B9%C2%BB_%282003%29.jpg",

    year: 2012,
    age: 13,
    description:
      "The film begins in 1988. An ordinary and unremarkable businessman named Oh Dae-soo (Choi Min-sik) gets drunk on his three-year-old daughter’s birthday on his way home, starts to bully her and naturally ends up at the police station. Taking him off the station on his own recognizance...",
    genres: "drama, thriller, detective",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Hurt Locker",
    nameUkr: "Володар бурі",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/The_Hurt_Locker_poster.jpg/315px-The_Hurt_Locker_poster.jpg",

    year: 2008,
    age: 18,
    description:
      "2004, the second year of the war in Iraq, US Army engineers are working in the country in the shift «Bravo», before the rotation which is a little more than a month. While defusing an improvised explosive device in Baghdad, Sergeant Thompson, the leader of the demining and explosive ordnance disposal team, is killed. To replace the ...",
    genres: "military thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Shame",
    nameUkr: "Сором",
    img: "https://upload.wikimedia.org/wikipedia/ru/2/2c/Shame_2011.jpg",

    year: 2011,
    age: 16,
    description:
      "Brandon is the main character of the film, a single man living in New York City. He suffers from an inability to control his sex life, has frequent sex with prostitutes, and masturbates several times a day.",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Fight club",
    nameUkr: "Боєвничий клуб",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/Fight_club.jpg/316px-Fight_club.jpg",

    year: 1999,
    age: 18,
    description:
      "The 1999 American psychological thriller, directed by David Fincher, is based on the novel of the same name by Chuck Palanick, released three years earlier. It stars Edward Norton, Brad Pitt and Helena Bonham Carter. Norton played the role of the nameless narrator - the impersonal layman who...",
    genres: "psychological thriller drama criminal",
    author: "David Fincher",
    isFilm: true,
  },
  {
    nameEng: "In the Mood for Love",
    nameUkr: "Любовний настрій",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/45/In_the_Mood_for_Love_movie.jpg/320px-In_the_Mood_for_Love_movie.jpg",

    year: 2000,
    age: 16,
    description:
      "The film takes place in Hong Kong in the 1960s. Journalist Chow Mo Wang (Tony Leung) and Soo Lee Jeong (Maggie Chung) move into two adjacent rooms in the apartment building on the same day. Both have spouses who often work late. Despite the good-natured landlords and neighbors, Chow and Soo often ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Inherent Vice",
    nameUkr: "Вроджена вада",
    img: "https://upload.wikimedia.org/wikipedia/ru/e/e9/Inherent_Vice.jpg",

    year: 2007,
    age: 16,
    description:
      "In the first story (1970), Shasta Fay Hepworth visits the beach house of his former beloved Larry «Doc» Sportello, a private detective and hippies in Gorda Beach (Los Angeles). She tells him about her new lover, Michael Z. «Mickey» Wolfmann, a wealthy developer, and asks for help in preventing ...",
    genres: "romantic comedy, neo-noir",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Mulholland Drive",
    nameUkr: "Малхолланд Драйв",
    img: "https://upload.wikimedia.org/wikipedia/ru/6/64/Mulholland_Drive_%28poster%29.jpg",

    year: 2001,
    age: 16,
    description:
      "The dark-haired unknown girl (Laura Harring) drives a limousine through Mulholland Drive (named after William Mulholland), which houses the homes of many Hollywood celebrities - John Travolta, Marlon Brando. The girl is alerted when the driver (Scott Wolff) unexpectedly ...",
    genres: "romantic comedy, psychological thriller",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Аdolescence",
    nameUkr: "Отроцтво",
    img: "https://upload.wikimedia.org/wikipedia/ru/f/f2/Boyhood_poster.jpg",

    year: 2003,
    age: 13,
    description:
      "The film tells the story of Mason’s life, childhood, and adolescence. Mason lives in Texas with his mother and older sister Samantha. He survives his parents' divorce due to his father’s alcoholism, his mother’s remarriage, and another divorce. The boy is fond of music, Harry Potter and Star ...",
    genres: "epic drama",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "City of God",
    nameUkr: "Місто Бога",
    img: "https://upload.wikimedia.org/wikipedia/ru/6/6f/%D0%93%D0%BE%D1%80%D0%BE%D0%B4_%D0%91%D0%BE%D0%B3%D0%B0_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_1.jpg",

    year: 2002,
    age: 18,
    description:
      "A crime film by Brazilian directors Fernando Meirellis and Kati Lund, based on the novel of the same name by Paulo Lins, chronologizing the life of Brazilian slum characters - a favela of Rio de Janeiro in the style of social realism. The film also addresses racial and social inequalities in...",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "New World",
    nameUkr: "Новий світ",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/The_new_world_-_poster.jpg/301px-The_new_world_-_poster.jpg",

    year: 2006,
    age: 13,
    description:
      "The film takes place in 17th-century America, at Jamestown. North America is home to many different tribal cultures. They have managed to find a common language and live in harmony with the world around them, as well as with each other. To break this harmony can uninvited ...",
    genres: "comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Leviathan",
    nameUkr: "Левіафан",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/%D0%9B%D0%B5%D0%B2%D0%B8%D0%B0%D1%84%D0%B0%D0%BD_%D0%BA%D0%B0%D0%B4%D1%80.jpg/318px-%D0%9B%D0%B5%D0%B2%D0%B8%D0%B0%D1%84%D0%B0%D0%BD_%D0%BA%D0%B0%D0%B4%D1%80.jpg",

    year: 2014,
    age: 18,
    description:
      "The main character, car mechanic Nikolai Sergeev, lives with his wife Lilia and son from his first wife Roma in a small seaside town Coastal, in a house on the shore of a small bay, where whales sometimes swim. Nikolai maintains friendly relations with local policeman Polivanov and his wife, and...",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Lord of the Rings Return of the King",
    nameUkr: "Володар кілець: Повернення короля",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/The_Lord_of_the_Rings._The_Return_of_the_King_%E2%80%94_movie.jpg/383px-The_Lord_of_the_Rings._The_Return_of_the_King_%E2%80%94_movie.jpg",

    year: 2003,
    age: 16,
    description:
      "2003 epic fantasy adventure film directed by Peter Jackson and written by Fran Walsh, Philippa Boyens and Jackson. It is based on the third volume of the novel «Lord of the Rings» by J. R. R. Tolkien «Return of the King». Continuation of the film «Lord of the Rings: Two Fortresses», the third and...",
    genres: "epic fantasy, adventure",
    author: "Peter Jackson",
    isFilm: true,
  },
  {
    nameEng: "Murderer",
    nameUkr: "Вбивця",
    img: "https://upload.wikimedia.org/wikipedia/ru/6/6a/%D0%A3%D0%B1%D0%B8%D0%B9%D1%86%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2015%2C_%D0%A2%D0%B0%D0%B9%D0%B2%D0%B0%D0%BD%D1%8C%29.jpg",

    year: 2015,
    age: 18,
    description:
      "The film takes place in China of the ninth century, in the last years of the Tang dynasty[10][11]. The film centers on Ne Yinniang, a murderer who is sent to kill corrupt government officials by her teacher Jiaxin, a nun who has been raising her since the age of ten. When ...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Her",
    nameUkr: "вона",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6a/Her_%28Film_2013%29.jpg/300px-Her_%28Film_2013%29.jpg",

    year: 2016,
    age: 18,
    description:
      "The film takes place in the near future. People have stopped writing letters themselves and special organizations do it for them, one of which employs the protagonist. The powers of artificial intelligence have advanced. Theodore Tuombli, a lone writer, buys an operating system with...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Spring Breakers",
    nameUkr: "Відв'язні канікули",
    img: "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9E%D1%82%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B5_%D0%BA%D0%B0%D0%BD%D0%B8%D0%BA%D1%83%D0%BB%D1%8B%C2%BB.jpg",

    year: 2018,
    age: 18,
    description:
      "Four college students have been best friends since high school. Now they live in a boring dorm and crave adventure. There is a spring break ahead, and you really want to spend them fun and unforgettable. Girls decide to make money to have enough fun.",
    genres: "romantic comedy, comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Social network",
    nameUkr: "Соціальна мережа",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/95/%D0%A1%D0%BE%D1%86%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C.jpg/360px-%D0%A1%D0%BE%D1%86%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C.jpg",

    year: 2009,
    age: 13,
    description:
      "In 2003, Harvard University student Mark Zuckerberg came up with the idea of creating a site that allows to form a ranking of female students by attractiveness. This happens right after Mark dumps his girlfriend Erika Albright. Mark hacks into the databases of various hostels, ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Children of Men",
    nameUkr: "Дитя людське",
    img: "https://upload.wikimedia.org/wikipedia/ru/b/b3/Children_of_men_2006_poster.jpg",

    year: 2006,
    age: 16,
    description:
      "2027. Mass infertility struck mankind - 18 years since the last child was born. The whole world is in chaos, and only the United Kingdom is able to maintain order, turning the state into a military camp. Illegal immigrants try to enter the country, but they are caught, put in...",
    genres: "adventure drama, movie fiction, thriller, utopia",
    author: "Alfonso Cuarón",
    isFilm: true,
  },
  {
    nameEng: "Mad Max: Fury Road",
    nameUkr: "Божевільний Макс: Дорога люті",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6e/Mad_Max_Fury_Road.jpg/300px-Mad_Max_Fury_Road.jpg",

    year: 2015,
    age: 16,
    description:
      "Post-apocalyptic action film directed by George Miller, fourth in the Max Rokatanski film series. The film stars British actor Tom Hardy; other key roles include Charlize Theron, Nicholas Holt, and Hugh Keyes-Byrne. The «Road of Rage» is the relaunch of the series...",
    genres: "post-apocalyptic action film, diesel punk",
    author: "George Miller",
    isFilm: true,
  },
  {
    nameEng: "New York, New York",
    nameUkr: "Нью-Йорк, Нью-Йорк",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Synecdoche%2C_New_York.jpg/293px-Synecdoche%2C_New_York.jpg",

    year: 2008,
    age: 12,
    description:
      "Theatrical director Kaden Kotar puts on a new play. After the successful production of «Death of the Salesman», he receives the «grant of geniuses» of MacArthur. Cayden is determined to create a mixture of tough realism and honesty, something in which he could realize all of himself.",
    genres: "comedy drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Lord of the Rings The Brotherhood",
    nameUkr: "Володар кілець: Братство Кільця",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/08/The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_%E2%80%94_movie.jpg/296px-The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_%E2%80%94_movie.jpg",

    year: 2001,
    age: 16,
    description:
      "2003 epic fantasy adventure film directed by Peter Jackson and written by Fran Walsh, Philippa Boyens and Jackson. It is based on the third volume of the novel «Lord of the Rings» by J. R. R. Tolkien «Return of the King». Continuation of the film «Lord of the Rings: Two Fortresses», the third and...",
    genres: "epic fantasy, adventure",
    author: "Peter Jackson",
    isFilm: true,
  },
  {
    nameEng: "Dark Knight",
    nameUkr: "Темний лицар",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/375px-%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",

    year: 2020,
    age: 12,
    description:
      "A gang of criminals in clown masks is robbing a bank in Gotham City. In pursuit of a larger share, the criminals kill each other, leaving only the Joker (Heath Ledger), who runs off with the money. Batman (Christian Bale), District Attorney Harvey Dent (",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "The Vampire Diaries",
    nameUkr: "Щоденники вампіра",
    img: "https://upload.wikimedia.org/wikipedia/ru/a/a5/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8_%D0%B2%D0%B0%D0%BC%D0%BF%D0%B8%D1%80%D0%B0_4_%D1%81%D0%B5%D0%B7%D0%BE%D0%BD.jpg",

    year: 2010,
    age: 16,
    description:
      "Mystic Falls is a small town in Virginia that is filled with supernatural creatures. It is here that a 17-year-old girl named Elena Gilbert lives, who one day meets Stefan Salvatore and falls in love with him. Stefan, being a 162-year-old vampire, carefully hides from ...",
    genres: "drama, horrors, fantasy",
    author: "Justin Roiland, Dan Harmon",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219193.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219194.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219195.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219196.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219197.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219198.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219200.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219201.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219201.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219202.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219206.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_219207.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_843387.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/86702/pv_857667.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Asylum",
    nameUkr: "Притулок",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/36/Shelter_poster.jpg/316px-Shelter_poster.jpg",

    year: 2009,
    age: 13,
    description:
      "It’s a thriller about a woman who specializes in multiple personality cases. It is about such a patient we are talking about - a vagrant picked up on the street (he calls himself Adam), but with a bright and completely unconventional transition from one person to another. Doctor Caroline will help him...",
    genres: "romantic comedy, thriller",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "Stranger Things",
    nameUkr: "Дуже дивні справи",
    img: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==",

    year: 2016,
    age: 16,
    description:
      "In order to retrieve his missing son, his mother had to confront a terrible force.",
    genres: "drama, horrors, fantasy",
    author:
      "Sean Levy, Dan Cohen, Iain Paterson, Karl Haidusek, Alison Tutlock, Justin Doble, Rand Gage",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_832346.jpg",
          seriesName: "Will’s disappearance",
          seriesDescription:
            "Lucas, Mike, and Dustin meet a little girl and try to talk to her. Hopper questions Joyce about the phone call.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_832347.jpg",
          seriesName: "Maple Street weirdo",
          seriesDescription:
            "Nancy is looking for Barb. At school, she learns what Jonathan was doing that night. Joyce is convinced that Will is trying to talk to her.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_832348.jpg",
          seriesName: "Holly, Jolly",
          seriesDescription:
            "Joyce doesn’t believe that the body she found is her son. She comes up with a way to contact him. Nancy and Jonathan form an alliance.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_833274.jpg",
          seriesName: "The Body",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_858492.jpg",
          seriesName: "The Flea and the Acrobat",
          seriesDescription:
            "Hopper breaks into the lab. Nancy and Jonathan confront the force that took Will. Mr Clark tells the boys about parallel worlds and how to get there",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_854780.jpg",
          seriesName: "MADMAX",
          seriesDescription:
            "Everyone prepares for Halloween. Meanwhile, a rival appears in the arcade, scoring more points than Dustin. Hopper inspects a field of rotting pumpkins.",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_858499.jpg",
          seriesName: "rick or Treat, Freak",
          seriesDescription:
            "Will feels something from the past in his body. Mike misses Odie very much. Nancy struggles with the truth about Barb. Hopper begins to speculate on what may be happening to pumpkins.",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_858491.jpg",
          seriesName: "The Pollywog",
          seriesDescription:
            "Dustin finds a new pet. Odie is angry at Hopper and his prohibitions. She wants to see Mike. Bob convinces Will to confront his fears.",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_858491.jpg",
          seriesName: "Will the Wise",
          seriesDescription:
            "Hopper is trying to figure out what is actually ruining the pumpkins. Joyce is beginning to suspect that Will is far from the boy she remembers. Odie runs away from home.",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_854783.jpg",
          seriesName: "Dig Dug",
          seriesDescription:
            "Nancy and Jonathan share conspiracy theories with a new ally. Eleven are looking for someone from their past. Bob is genius at solving a complex problem.",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_855577.jpg",
          seriesName: "The Spy",
          seriesDescription:
            "Will’s connection to dark evil is growing stronger, but no one is sure how to stop it. Dustin is beginning to understand Will’s connection to evil. Will rents the location of all the guys.",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_942784.jpg",
          seriesName: "The Lost Sister",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_858493.jpg",
          seriesName: "The Mind Flayer",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/121590/pv_942781.jpg",
          seriesName: "The Gate",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "VALL-I",
    nameUkr: "Валл-І",
    img: "https://upload.wikimedia.org/wikipedia/ru/c/c4/WALL-E_poster.png",

    year: 2008,
    age: 6,
    description:
      "A 2008 feature-length computer animated science fiction film produced by Pixar Animation Studios. The film premiered in the United States on June 27, 2008. The film was released on DVD and Blu-ray on November 18, 2008[6]. The film was directed by Andrew Stanton, whose previous film, In search of...",
    genres:
      "fantasy, adventure, melodrama, comedy, post-apocalypse, antiutopia",
    author: "Andrew Stanton",
    isFilm: true,
  },
  {
    nameEng: "Aquarium",
    nameUkr: "Aкваріум",
    img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Fish_Tank_film.jpg",

    year: 2009,
    age: 16,
    description:
      "«Aquarium» (English: Fish Tank) is a 2009 drama film directed by Andrea Arnold. The film won the Jury Prize at the Cannes Film Festival, the award",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Beginning",
    nameUkr: "Початок",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Poster_Inception_film_2010.jpg/318px-Poster_Inception_film_2010.jpg",

    year: 2009,
    age: 16,
    description:
      "Dominic Cobb and Arthur - «Extractors»: They engage in corporate espionage using experimental military technology to infiltrate the subconscious of their «objectives» and extract information through the common world of dreams. Their final target, Saito, says he arranged a meeting to see if...",
    genres: "thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Tree of life",
    nameUkr: "Дерево життя",
    img: "https://upload.wikimedia.org/wikipedia/ru/f/f2/%D0%94%D1%80%D0%B5%D0%B2%D0%BE_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg",

    year: 2002,
    age: 16,
    description:
      "The story begins with the death of a child that is hard for a mother, father and brother to accept. Each of them asks God questions that only God can answer. A grown-up Jack feels he is not needed in this world and tries to find answers in memories of the past.",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Zodiac",
    nameUkr: "Зодіак",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/Zodiac_poster.jpg/330px-Zodiac_poster.jpg",

    year: 2012,
    age: 16,
    description:
      "The film begins on July 4, 1969, when the Zodiac committed his second attack (shooting in the car of a young man named Michael Mageau and his girlfriend Darlene Ferrin). On August 1, the killer sent three coded letters to major newspapers, including the San Francisco Chronicle. His messages ...",
    genres: "romantic comedy, detective",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "before sunset",
    nameUkr: "Перед заходом сонця",
    img: "https://upload.wikimedia.org/wikipedia/ru/d/d1/Before_Sunset_poster.jpg",

    year: 2005,
    age: 14,
    description:
      "American Jesse (Ethan Hawk) and French Celine (Julie Delpi) meet again nine years after the night in which the film «Before Dawn» takes place. Jesse wrote a best-selling book in the United States based on his meeting with Celine, and is coming to Europe for a press conference ...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Аrtificial intelligence",
    nameUkr: "Штучний розум",
    img: "https://upload.wikimedia.org/wikipedia/ru/5/5b/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D1%83%D0%BC.jpg",

    year: 2005,
    age: 13,
    description:
      "In the 21st century, global warming led to the melting of polar ice, flooding of coastlines, forcing the US government to enact laws strictly limiting childbearing. A new class of robots is emerging - androids capable of emulating thoughts and emotions. Humans and robots are called Pra...",
    genres: "science fiction, drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Eternal radiance of pure mind",
    nameUkr: "Бескінечне сяйво чистого розуму",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg/303px-Eternal_Sunshine_of_the_Spotless_Mind.jpg",

    year: 2004,
    age: 16,
    description:
      "A romantic fantasy drama directed by Michel Gondry in 2004 by Charlie Kaufman. The film was awarded «Oscar» for the best original script. One of the few films where Jim Kerry is not in a comedy role.",
    genres: "romantic comedy, fantasy, adventure",
    author: "Michel Gondry",
    isFilm: true,
  },
  {
    nameEng: "Master",
    nameUkr: "Майстер",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/Master_2012.jpg/316px-Master_2012.jpg",

    year: 2012,
    age: 16,
    description:
      "1950. The main character, a sailor who fought in Japan during World War II, and now a simple vagrant-alcoholic Freddy Quell (Joaquín Phoenix), has just demobilized, and recalls all the joys of life at the «citizen», where he gets a job at an ordinary photo studio. In his spare time, he does...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Amelie",
    nameUkr: "Амелі",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9b/Amelie_DVD_box.jpg/299px-Amelie_DVD_box.jpg",

    year: 2001,
    age: 16,
    description:
      "French romantic comedy directed by Jean-Pierre Jeunet. In the Russian release was called by the name of the main heroine - «Amélie» ",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Adele",
    nameUkr: "Адель",
    img: "https://upload.wikimedia.org/wikipedia/ru/9/98/Blue_Is_the_Warmest_Colour_poster.jpg",

    year: 2013,
    age: 16,
    description:
      "Adele (Adele Exarcopoulos) is an average 17-year-old French high school student who lives in a suburb of Lille and hardly ever ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "A History of Violence",
    nameUkr: "Виправдана жорстокість",
    img: "https://upload.wikimedia.org/wikipedia/ru/d/d6/A_History_of_Violence_%28poster%29.jpg",

    year: 2001,
    age: 18,
    description:
      "Two bandits, Leland Jones and Billy Orser, travel through the American province. Leaving the family motel where they spent the night, the bandits kill its owners, including a minor daughter. Deciding they should stay away from the big cities, they end up in the quiet town of Millbrook, ...",
    genres: "drama, thriller, crime drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "The Resident",
    nameUkr: "Резидент",
    img: "https://rezka.gg/uploads/mini/fullstory/2e/610x900_2497.webp",

    year: 2013,
    age: 16,
    description:
      "The series follows a young doctor with idealistic views of life who begins working under a brilliant and more experienced doctor. Over time, the protagonist realizes that things are not that simple, and his work has a hundred nuances that cannot be ignored.",
    genres: "drama",
    author:
      "Antoine Fuqua, Amy Holden Jones, Oli Obst, David Alex Bourstein, David Blake Hartley",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988497.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988508.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988519.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988486.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988484.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988488.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988487.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988490.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988492.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988493.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988494.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988495.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988496.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/144846/pv_988498.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Prophet",
    nameUkr: "Пророк",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/NextPoster.jpg/315px-NextPoster.jpg",

    year: 2001,
    age: 18,
    description:
      "The film begins with a feather that descends from the sky to the feet of an adult Forrest sitting at a bus stop in the city, where he responded to a letter from a mortally ill beloved; the film ends with a reverse scene who has imprisoned his...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "Chicago Fire",
    nameUkr: "Пожарні Чікаго",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Chicago_Fire_Season_9_Poster.jpg/220px-Chicago_Fire_Season_9_Poster.jpg",

    year: 2013,
    age: 16,
    description:
      "The series is filmed at a real fire station in Chicago: its main characters are firefighters who daily save lives in trouble. By the way, in the United States firefighters - like the Russian Emergencies Ministry, that is, they leave not only when something is on fire. The drama here hides both in the frightening moments of catastrophes, and in personal ...",
    genres: "comedy",
    author: "Justin Roiland, Dan Harmon",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_393665.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_393666.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_393667.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_393668.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_632923.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/99998/pv_858500.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30815.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30813.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30812.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30818.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/art/2936/30819.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30820.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/art/2936/30816.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "Remember",
    nameUkr: "Пам'ятай",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c7/Memento_poster.jpg/306px-Memento_poster.jpg",

    year: 2000,
    age: 16,
    description:
      "The film’s protagonist Leonard Shelby (Guy Pierce), an insurance investigator, is looking for his wife’s killer. The main difficulty is that Leonard suffered severe head trauma and, due to anterograde amnesia, could not retain anything longer than 5 minutes. He has to ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Forest Gump",
    nameUkr: "Форрест Гамп",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg/341px-%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg",

    year: 2001,
    age: 18,
    description:
      "The film begins with a feather that descends from the sky to the feet of an adult Forrest sitting at a bus stop in the city, where he responded to a letter from a mortally ill beloved; the film ends with a reverse scene who has imprisoned his...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Margaret",
    nameUkr: "Маргарет",
    img: "https://upload.wikimedia.org/wikipedia/ru/0/0f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83_%C2%AB%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B5%D1%82%C2%BB.jpg",

    year: 2009,
    age: 16,
    description:
      "The film follows a high school girl named Lisa Cohen who witnessed a terrible bus accident that affected her life due to her careless behavior.",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Labyrinth of the Faun",
    nameUkr: "Лабіринт Фавна",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c7/El_laberinto_del_fauno_%28poster%29.jpg/309px-El_laberinto_del_fauno_%28poster%29.jpg",

    year: 2006,
    age: 18,
    description:
      "The film takes place in two parallel worlds. The grim reality of the Spanish Civil War is intertwined with the equally grim magical world surrounding the girl Ophelia. Guillermo del Toro confirmed in an interview that the magical world in the film is real, which in the plot there are obvious ...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "No Country for Old Men",
    nameUkr: "Старим тут не місце",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/No_country_rus.jpg/317px-No_country_rus.jpg",

    year: 2001,
    age: 15,
    description:
      "Desert and wilderness landscapes of Terrell County in western Texas in June 1980. Off-screen, Sheriff Ed Tom Bell (Tommy Lee Jones) recounts the changes: crime in the region is on the rise, and the criminals themselves are becoming increasingly violent and inhuman. This will be a cross-cutting theme for the elderly ...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Wolf of Wall Street",
    nameUkr: "Вовк з Уолл Стріт",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/72/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%92%D0%BE%D0%BB%D0%BA_%D1%81_%D0%A3%D0%BE%D0%BB%D0%BB-%D1%81%D1%82%D1%80%D0%B8%D1%82%C2%BB.jpg/316px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%92%D0%BE%D0%BB%D0%BA_%D1%81_%D0%A3%D0%BE%D0%BB%D0%BB-%D1%81%D1%82%D1%80%D0%B8%D1%82%C2%BB.jpg",

    year: 2013,
    age: 18,
    description:
      "American epic biographical crime black comedy directed by Martin Scorsese, based on Jordan Belfort’s memoirs of the same name, was released worldwide on December 25, 2013. The script was written by Terence Winter. The lead role was played by Leonardo DiCaprio, who performed and...",
    genres: "epic biographical, criminal, black comedy",
    author: "Martin Scorsese",
    isFilm: true,
  },
  {
    nameEng: "Brooklyn",
    nameUkr: "Бруклін",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/Brooklyn_%282015%29.jpg/316px-Brooklyn_%282015%29.jpg",

    year: 2015,
    age: 16,
    description:
      "Directed by John Crawley, the film was released in 2015. The film is based on the novel of the same name by Colm Toybin. The premiere took place on January 26, 2015 at the film festival «Sundance»[4]. The film received three nominations for the «Oscar» award, including for the best film of the year, as well as a number of other ...",
    genres: "drama",
    author: "John Crowley",
    isFilm: true,
  },
  {
    nameEng: "Inside Lewin Davis",
    nameUkr: "Всередині Льюїна Девіса",
    img: "https://upload.wikimedia.org/wikipedia/ru/1/16/Inside_Llewyn_Davis_poster.jpg",

    year: 2013,
    age: 16,
    description:
      "The Cohen Brothers American Music Film. The film premiered on May 19, 2013 at the 66th Cannes Film Festival, where it was highly acclaimed by critics and awarded the Grand Prix of the jury[4]. The film is based on the memoirs of «Mayor of McDougal Street» American folk musician Dave Van Ronk.",
    genres: "tragicomedy",
    author: "Joel Coen",
    isFilm: true,
  },
  {
    nameEng: "Puzzle",
    nameUkr: "Головоломка",
    img: "https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BC%D0%BA%D0%B0_2015.jpg",

    year: 2015,
    age: 6,
    description:
      "Dokter came up with «The Puzzle» in late 2009, noticing changes in his daughter’s personality as she grew up. Based on Doxter and Del Carmen’s recollections, the emotions were altered for use in the film due to its origin. The filmmakers convinced some psychologists to consider... ",
    genres: "comedy drama",
    author: "Pete Docter",
    isFilm: true,
  },
  {
    nameEng: "Hotel «Grand Budapest»",
    nameUkr: "Готель «Гранд Будапешт»",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f5/The_Grand_Budapest_Hotel.jpg/316px-The_Grand_Budapest_Hotel.jpg",

    year: 2002,
    age: 16,
    description:
      "Time: Our Days. A young woman visits the grave of an unknown writer in an old cemetery in the fictional town of Lutz. On the monument, hung with many keys, instead of the name is indicated simply: «Author». The woman is holding the book «Hotel Grand Budapest",
    genres: "tragicomedy",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Ratatouille",
    nameUkr: "Рататуй",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d1/Ratatui.jpg/411px-Ratatui.jpg",

    year: 2007,
    age: 12,
    description:
      "Ratty Remy lives with his family in the attic of a farmhouse. Remi’s main feature, distinguishing him from other rats, is his extremely delicate sense of smell and taste. TV program about the book of the best chef of France Auguste Gusteau opens before him the world of cooking. From now on, he dreams of becoming...",
    genres: "drama",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    nameEng: "Spirited Away",
    nameUkr: "Віднесені привидами",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/61/Spirited_away.jpg/345px-Spirited_away.jpg",

    year: 2001,
    age: 13,
    description:
      "Akio’s father, Yuko’s mother, and their ten-year-old daughter Chihiro move to a new home in a remote part of Japan. After confusing the road to the new house and driving through a strange forest, they get to a dead end: they stop in front of a high wall in which the entrance is dark. Going in there and following the long...",
    genres: "romantic comedy, fantasy",
    author: "Hayao Miyazaki",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "Anatomy of passion",
    nameUkr: "Анатомія пристрасті",
    img: "https://m.media-amazon.com/images/M/MV5BMDc1ZGNkOGUtOGJiMi00MjMxLWE0MDgtNGY2YzM2ZjAyODEwXkEyXkFqcGdeQXVyNDM1NzQzODA@._V1_FMjpg_UX1000_.jpg",

    year: 2005,
    age: 16,
    description:
      "The story of the life of the aspiring surgeon Meredith Grey, who has the reputation of her mother. She works at the city hospital, and together with other aspiring doctors she begins to learn the basics of her profession as well as life itself. Young people try to cope with their uncertainty, learn...",
    genres: "drama, Romance",
    author: "Adam Davidson, Wendy Stanzler, Rob Korn",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_857923.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_878858.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233192.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233192.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_857923.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_878858.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_878859.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233192.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233193.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233193.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_857923.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_878858.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/25551/pv_1233193.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    path: "/serials/",
    nameEng: "House of Cards",
    nameUkr: "Картковий будиночок",
    img: "https://m.media-amazon.com/images/M/MV5BNmVhMGFlMjUtN2I0NS00MTM4LWFlZTgtMWI1Y2QyMmI1ODdjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",

    year: 2013,
    age: 16,
    description:
      "Congressman Frank Underwood intends to become Secretary of State to the new President of the United States. He makes a promise to that effect from Garrett Walker’s candidate in exchange for help in the race. But the president-elect is not living up to his promise. Underwood is angry and is going to take revenge.",
    genres: "drama",
    author: "Joel Schumacher, Charles McDougall, Allen Coulter",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_391834.jpg",
          seriesName: "Pilot",
          seriesDescription:
            "Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth.",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_391835.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_391836.jpg",
          seriesName: "Anatomy Park",
          seriesDescription:
            "On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_391837.jpg",
          seriesName: "Meeseeks and Destroy",
          seriesDescription:
            "After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing",
          seson: "1",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_866666.jpg",
          seriesName: "M. Night Shaym-Aliens!",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_866669.jpg",
          seriesName: "A Rickle in Time",
          seriesDescription:
            'Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it',
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_866670.jpg",
          seriesName: "Mortynight Run",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_881174.jpg",
          seriesName: "Auto Erotic Assimilation",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_881175.jpg",
          seriesName: "Total Rickall",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_887852.jpg",
          seriesName: "Get Schwifty",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_887853.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_893862.jpg",
          seriesName: "Rickmancing the Stone",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_893870.jpg",
          seriesName: "Pickle Rick",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://www.kino-teatr.ru/movie/kadr/103803/pv_914720.jpg",
          seriesName: "Vindicators 3: The Return of Worldender",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
  {
    nameEng: "a Serious man",
    nameUkr: "Серйозна людина",
    img: "https://upload.wikimedia.org/wikipedia/ru/b/b2/A-serious-man.jpg",

    year: 2009,
    age: 13,
    description:
      "The film opens with a prologue-parable. The beginning of the 20th century is on the court, and the action takes place in a Galician place. The dialogue is conducted entirely in Yiddish. There’s a blizzard outside. Vell (Allen Rickman) returns home from a trip and informs his wife Dora (Elena Shmulenson) that a wheel flew off the road, but...",
    genres: "romantic comedy",
    author: "Wife, Jean-Pierre",
    isFilm: true,
  },
  {
    nameEng: "Cache",
    nameUkr: "Приховане",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d8/Cache_%28poster%29.jpg/304px-Cache_%28poster%29.jpg",

    year: 2001,
    age: 18,
    description:
      "Georges Laurent, a television literary commentator, begins to receive tapes of his family members taken secretly off the street. Over time, the notes are supplemented by drawings drawn as if by a child’s hand and depicting a man whose breath is bleeding, or a rooster with a severed...",
    genres: "drama, thriller",
    author: "Andrea Arnold",
    isFilm: true,
  },
  {
    path: "/serials/",
    nameEng: "The Walking Dead",
    nameUkr: "Ходячі мерці",
    img: "https://fwcdn.pl/fpo/47/87/10024787/8075335.3.jpg",

    year: 2010,
    age: 16,
    description:
      "Sheriff Rick Grimes wakes up after an accident alone in a hospital and realizes that the world has changed: there are no living people in the city, all turned into zombies. Then he decides to go in search of his family. Rick accidentally encounters a group of people, among whom his wife and son have settled. But...",
    genres: "drama, thriller, horrors",
    author: "Ernest R. Dickerson, Gwyneth Horder-Payton",
    isFilm: false,
    sesonsAmount: 3,
    series: [
      [
        {
          img: "https://b1.filmpro.ru/c/257078.300x213.jpg",
          seriesName: "At the time of apprehending the gang",
          seriesDescription:
            "During the capture of a gang of criminals, police officer Rick Grimes of a small town in Georgia is seriously injured and loses consciousness. After an unknown period of time, he wakes up in the hospital room. His calls for help are not answered. Then he starts looking for help, but...",
          seson: "1",
        },
        {
          img: "https://b1.filmpro.ru/c/324218.300x213.jpg",
          seriesName: "Lawnmower Dog",
          seriesDescription:
            "Grimes is rescued by Glenn, an Asian-looking young man. He takes Rick to a department store where there is a group of survivors: Andrea, Jackie, Morales, T-Dog, and Merle Dixon. They tell Grimes that they came to town from a nearby survivors' camp to resupply. However, by bailing out...",
          seson: "1",
        },
        {
          img: "https://b1.filmpro.ru/c/418260.300x213.jpg",
          seriesName: "Grimes helps out Glenn",
          seriesDescription:
            "At the camp, Grimes meets his wife and son. He’s going back to Atlanta to rescue Myrl Dixon and pick up a lost bag of guns in town. Glenn, T-Dog, and Daryl, Merle’s brother, go with him. As they reach the roof, the heroes discover that Merle has been able to free himself from the handcuffs ...",
          seson: "1",
        },
        {
          img: "https://b1.filmpro.ru/c/274189.300x213.jpg",
          seriesName: "At the camp, Grimes meets his wife and son.",
          seriesDescription:
            "There are serious problems during the Atlanta mission. It is revealed that in addition to the four travelers in the city, there are still people alive, they attack and take Glenn away. However, Rick gets one of the attackers - a kid named Miguel. What happened is a misunderstanding, the attackers were ...",
          seson: "1",
        },
        {
          img: "https://b1.filmpro.ru/c/100001.300x213.jpg",
          seriesName:
            "There are serious problems during the mission in Atlanta",
          seriesDescription:
            "Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers ",
          seson: "1",
        },
      ],
      [
        {
          img: "https://b1.filmpro.ru/c/563199.11.300x213.jpg",
          seriesName: "Amy and Ed die after a night attack by the dead",
          seriesDescription:
            "After a night attack of the dead, Amy and Ed are killed and Jim is bitten on the side. Rick recalls the CDC (Center for Disease Control) near Atlanta and decides to take the remaining survivors there, hoping that the scientists working there have succeeded in creating a vaccine. Jim, realizing he doesn’t have much time left...",
          seson: "2",
        },
        {
          img: "https://b1.filmpro.ru/c/478725.7.300x213.jpg",
          seriesName: "The fight for Carl’s life continues",
          seriesDescription:
            "The fight for Carl’s life continues. Shane and Otis try to break out of the destroyed rescue center, but are followed by a crowd of dead soldiers. At this time, Darryl, unable to sleep from the sight of Carol, again goes looking for Sophia in the forest, to him",
          seson: "2",
        },
        {
          img: "https://b1.filmpro.ru/c/71379.269x269c5020.jpg",
          seriesName: "The survivors hold a memorial service for Otis",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://b1.filmpro.ru/c/522936.0.300x213.jpg",
          seriesName: "Friend",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
        {
          img: "https://b1.filmpro.ru/c/478725.7.300x213.jpg",
          seriesName: "Flash back from the evacuation:",
          seriesDescription:
            "Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat",
          seson: "2",
        },
      ],
      [
        {
          img: "https://b1.filmpro.ru/c/478725.7.300x213.jpg",
          seriesName: "The Rickshank Rickdemption",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://b1.filmpro.ru/c/207476.269x269c5020.jpg",
          seriesName: "Glenn can’t lie about being pregnant",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://b1.filmpro.ru/c/133868.269x269c5020.jpg",
          seriesName: "Glen tells the band",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
        {
          img: "https://b1.filmpro.ru/c/71385.269x269c5020.jpg",
          seriesName:
            "After slaughtering all the walkers in the shed, the grieving Hershel demanded",
          seriesDescription:
            "Rick is interrogated via a mind-computer link, inside a galactic federal prison. Summer and Morty attempt to rescue him but they are captured by SEAL Team",
          seson: "3",
        },
      ],
    ],
  },
];

app.use("/films", express.static(`${__dirname}/films`));

app.use(express.json());

app.get("/get", function (request, response) {
  response.json(data);
});

app.post("/get_film", function (request, response) {
  let r = request.body.name;
  let t = data.flatMap((e) => {
    if (e.nameEng === r) {
      return `http://localhost:2999/films/${e.nameEng}.mp4`;
    }
    return [];
  });
  console.log(t[0]);
  response.json(t[0]);
});

app.listen(2999);
