const totalPlayers = 6;
const teams = 2;
const playersPerTeam = totalPlayers / teams;
const players = [1, 2, 3, 4, 5, 6];

let team1 = [];
let team2;
let configs = [];
let lastPushed = [];
let totalConfigs = [];
const factorial = number => {
  let y = number;
  for (let i = 1; i < number; i++) {
    y = y * (number - i);
    number = number - 1;
  }
  return y;
};
let playersClone = players.slice();
const randomIndex = arraySize => {
  return Math.round(Math.random() * (arraySize - 1));
};
const totalCombos =
  factorial(totalPlayers) /
  (factorial(playersPerTeam) * factorial(totalPlayers - playersPerTeam));

const generateTeams = () => {
  while (playersClone.length > playersPerTeam) {
    let player = randomIndex(playersClone.length);
    team1.push(playersClone[player]);
    playersClone.splice(player, 1);

    if (playersClone.length === playersPerTeam) {
      team2 = playersClone.slice().sort();
      team1 = team1.sort();
    }
  }
};

const newConfig = () => {
  const exists = lastPushed.find(value => value === team1);
  if (exists) {
    generateTeams();
  } else {
    lastPushed.push(team1, team2);
    configs.push(team1, team2);
    totalConfigs.push(configs);
    configs.splice(0, 2);
    team1.splice(0, 3);
    team2.splice(0, 3);
  }
};

const fillConfigs = () => {
  generateTeams();
  while (totalConfigs.length < totalCombos) {
    newConfig();
  }
};

fillConfigs();
console.log(totalConfigs);

// const totalPlayers = 6;
// const teamCounts = [2];

// const teams = [];

// teamCounts.forEach(teamCount => {
//   const playersPerTeam = totalPlayers / teamCount;
//   const playersArrayNew = new Array(totalPlayers);
//   const playersArray = [];

//   for (var i = 0; i < playersArrayNew.length; i++) {
//     playersArray.push(i + 1);
//   }

//   function combo(c) {
//     var r = [],
//       len = c.length,
//       tmp = [];
//     function nodup() {
//       var got = {};
//       for (var l = 0; l < tmp.length; l++) {
//         if (got[tmp[l]]) return false;
//         got[tmp[l]] = true;
//       }
//       return true;
//     }
//     function iter(col, done) {
//       var l, rr;
//       if (col === len) {
//         if (nodup()) {
//           rr = [];
//           for (l = 0; l < tmp.length; l++) rr.push(c[tmp[l]]);
//           r.push(rr);
//         }
//       } else {
//         for (l = 0; l < len; l++) {
//           tmp[col] = l;
//           iter(col + 1);
//         }
//       }
//     }
//     iter(0);
//     return r;
//   }

//   // console.log(playersArray);

//   let totalCombinations = combo(playersArray);

//   totalCombinations = totalCombinations.map(combination => {
//     let temparray = [];
//     var i, j;
//     for (i = 0, j = combination.length; i < j; i += playersPerTeam) {
//       const unordered = combination.slice(i, i + playersPerTeam);
//       temparray.push(unordered.sort());
//       // do whatever
//     }

//     return temparray;
//   });

//   const existing = [];

//   console.log(totalCombinations);

//   teams.push(totalCombinations);
// });

// // console.log(teams);
