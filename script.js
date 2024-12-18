const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Manchester United",
  sport: "Football",
  year: 2025,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Ruben Amorim",
    matches: 7,
  },
  players: [
    {
      name: "Murcus Rashford",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Alejandro Garnacho",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Christian Eriksen",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      nickname: "Young Maestro",
    },
     {
      name: "Manuel Ugarte",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Casemiro",
      position: "midfielder",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Lisandro Martinez",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Harry Maguire",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Amad Dialo",
      position: "forward",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Victor Lindelöf",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Leny Yoro",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Bruno Fernandez",
      position: "midfielder",
      number: 8,
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Antony",
      position: "forward",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kobbie Mainoo",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luke Shaw",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Noussair Mazraoui",
      position: "defender",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Andre Onana",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Diogo Dalot",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rasmus Højlund",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Altay Bayindir",
      position: "goalkeeper",
      number: 31,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Jonny Evans",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Joshua Zirkze",
      position: "forward",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marson Mount",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: "Mase",
    },
    {
      name: "Tom Heaton",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: "Heat",
    },
    {
      name: "Malacia",
      position: "defender",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Deligt",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default:
    
    setPlayerCards();
    break;

  }
});
