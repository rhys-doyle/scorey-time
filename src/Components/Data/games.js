const games = [
  {
    name: "500",
    players: [
      {
        number: 4,
        configuartion: 2,
        teams: ["1&2 vs 3&4", "1&3 vs 2&4", "1&4 vs 2&3"]
      },
      {
        number: 5,
        configuration: [5],
        teams: ["Individual Teams"]
      },
      {
        number: 6,
        configuration: [2, 3],
        teams: [
          [
            "1&2&3 vs 4&5&6",
            "1&2&4 vs 3&5&6",
            "1&2&5 vs 3&4&6",
            "1&2&6 vs 3&4&5",
            "1&3&4 vs 2&5&6",
            "1&3&5 vs 2&4&6",
            "1&3&6 vs 2&4&5",
            "1&4&5 vs 2&3&6",
            "1&4&6 vs 2&3&5",
            "1&5&6 vs 2&3&4"
          ],
          [
            "1&2 vs 3&4 vs 5&6",
            "1&2 vs 3&5 vs 4&6",
            "1&2 vs 3&6 vs 4&5",
            "1&3 vs 2&4 vs 5&6",
            "1&3 vs 2&5 vs 4&6",
            "1&3 vs 2&6 vs 4&5",
            "1&4 vs 2&3 vs 5&6",
            "1&4 vs 2&5 vs 3&6",
            "1&4 vs 2&6 vs 3&5",
            "1&5 vs 2&3 vs 4&6",
            "1&5 vs 2&4 vs 3&6",
            "1&5 vs 2&6 vs 3&4",
            "1&6 vs 2&3 vs 4&5",
            "1&6 vs 2&4 vs 3&5",
            "1&6 vs 2&5 vs 3&6"
          ]
        ]
      }
    ]
  },
  {
    name: "Euchre",
    players: [
      {
        number: 4,
        configuration: 2,
        teams: ["1&2 vs 3&4", "1&3 vs 2&4", "1&4 vs 2&3"]
      },
      {
        number: 5,
        configuration: 5,
        teams: "Individual Teams"
      },
      {
        number: 6,
        configuration: [2, 3],
        teams: [
          [
            "1&2&3 vs 4&5&6",
            "1&2&4 vs 3&5&6",
            "1&2&5 vs 3&4&6",
            "1&2&6 vs 3&4&5",
            "1&3&4 vs 2&5&6",
            "1&3&5 vs 2&4&6",
            "1&3&6 vs 2&4&5",
            "1&4&5 vs 2&3&6",
            "1&4&6 vs 2&3&5",
            "1&5&6 vs 2&3&4"
          ],
          [
            "1&2 vs 3&4 vs 5&6",
            "1&2 vs 3&5 vs 4&6",
            "1&2 vs 3&6 vs 4&5",
            "1&3 vs 2&4 vs 5&6",
            "1&3 vs 2&5 vs 4&6",
            "1&3 vs 2&6 vs 4&5",
            "1&4 vs 2&3 vs 5&6",
            "1&4 vs 2&5 vs 3&6",
            "1&4 vs 2&6 vs 3&5",
            "1&5 vs 2&3 vs 4&6",
            "1&5 vs 2&4 vs 3&6",
            "1&5 vs 2&6 vs 3&4",
            "1&6 vs 2&3 vs 4&5",
            "1&6 vs 2&4 vs 3&5",
            "1&6 vs 2&5 vs 3&6"
          ]
        ]
      }
    ]
  },
  {
    name: "Hearts",
    players: {
      number: 4,
      configuration: 4,
      teams: "Individual Teams"
    }
  }
];

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

const fillConfigs = () => {
  if (configs.length) {
    let i;
    for (i = 0; i < configs.length; i += 2) {}
  } else {
    if (lastPushed.find(value => value === team1)) {
    } else {
      lastPushed.push(team1);
    }
  }
  if (!lastPushed.find(combo => combo === team1.sort())) {
    configs.push(team1.sort());
    configs.push(team2.sort());
    totalConfigs.push(configs);
  }
};

while (totalConfigs.length < totalCombos) {
  fillCombo();
}

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

export default games;
