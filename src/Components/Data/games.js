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

export default games;
