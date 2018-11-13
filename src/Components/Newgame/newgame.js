import React from "react";
import { message, Radio, Select, Button } from "antd";
import styles from "./newgame.css";
import games from "../Data/games";
import friends from "../Data/friends";

const abc123 = "0123456789abcdefghijklmnopqrstuvwxyz";

export default class Newgame extends React.Component {
  state = {
    players: 4,
    teams: 2,
    game: games[0],
    teamsDisabled: false,
    threeDisabled: true,
    teamSelect: "",
    gameInfo: [],
    playerNames: []
  };

  handlePlayerSelect = value => {
    let playerNamesClone = value.slice();
    console.log(value);
    this.setState({ playerNames: playerNamesClone });
  };

  idGenerator = () => {
    const generateId = () => {
      let id = "";
      let i = 0;
      for (i = 0; i < 10; i++) {
        id = id.concat(abc123.charAt(Math.round(Math.random() * 35)));
      }
      return id;
    };

    const generateUniqueId = id => {
      const exists = this.state.gameInfo.find(game => game._id === id);

      if (exists) {
        generateUniqueId(generateId());
      } else {
        return id;
      }
    };

    return generateUniqueId(generateId());
  };

  startGameHandler = id => {
    if (this.state.playerNames.length < this.state.players - 1) {
      message.error(
        `Please select ${this.state.players -
          1 -
          this.state.playerNames.length} more player to continue!`,
        4
      );
    } else {
      let playerNamesClone = this.state.playerNames.slice();
      playerNamesClone.unshift(
        JSON.parse(localStorage.getItem("token")).currentUser
      );

      console.log(playerNamesClone);

      let teamSelect = this.state.teamSelect;

      if (!teamSelect || this.state.teams === "random") {
        teamSelect = this.handleRandomTeam();
      }
      console.log(teamSelect, "handler");
      let teamsConfig = [];

      if (teamSelect.length === 17) {
        let team1 = [];
        let team2 = [];
        let team3 = [];
        team1.push(playerNamesClone[teamSelect.charAt(0) - 1]);
        team1.push(playerNamesClone[teamSelect.charAt(2) - 1]);
        teamsConfig.push(team1);
        team2.push(playerNamesClone[teamSelect.charAt(7) - 1]);
        team2.push(playerNamesClone[teamSelect.charAt(9) - 1]);
        teamsConfig.push(team2);
        team3.push(playerNamesClone[teamSelect.charAt(14) - 1]);
        team3.push(playerNamesClone[teamSelect.charAt(16) - 1]);
        teamsConfig.push(team3);
      } else if (teamSelect.length === 14) {
        let team1 = [];
        let team2 = [];
        team1.push(playerNamesClone[teamSelect.charAt(0) - 1]);
        team1.push(playerNamesClone[teamSelect.charAt(2) - 1]);
        team1.push(playerNamesClone[teamSelect.charAt(4) - 1]);
        teamsConfig.push(team1);
        team2.push(playerNamesClone[teamSelect.charAt(9) - 1]);
        team2.push(playerNamesClone[teamSelect.charAt(11) - 1]);
        team2.push(playerNamesClone[teamSelect.charAt(13) - 1]);
        teamsConfig.push(team2);
      } else if (teamSelect.length === 10) {
        let team1 = [];
        let team2 = [];
        team1.push(playerNamesClone[teamSelect.charAt(0) - 1]);
        team1.push(playerNamesClone[teamSelect.charAt(2) - 1]);
        teamsConfig.push(team1);
        team2.push(playerNamesClone[teamSelect.charAt(7) - 1]);
        team2.push(playerNamesClone[teamSelect.charAt(9) - 1]);
        teamsConfig.push(team2);
      }

      const cloneGameInfo = this.state.gameInfo.slice();
      cloneGameInfo.push({
        _id: id,
        game: this.state.game.name,
        players: this.state.players,
        teams: this.state.teams,
        teamSelect: teamSelect,
        playerNames: playerNamesClone,
        teamsConfig: teamsConfig,
        gameStart: new Date()
      });
      console.log(cloneGameInfo);
      this.setState({ gameInfo: cloneGameInfo }, () => {
        this.props.gameInfoState(this.state.gameInfo);
        this.props.history.push(`/game/${id}`);
      });
    }
  };

  teamSelectReset = () => {
    this.setState({ teamSelect: "" });
  };

  handleOnChangePlayers = event => {
    this.teamSelectReset();
    let { threeDisabled } = this.state;
    let { teamsDisabled } = this.state;
    if (event.target.value === 4) {
      teamsDisabled = false;
      threeDisabled = true;
    } else if (event.target.value === 5) {
      teamsDisabled = true;
    } else if (event.target.value === 6) {
      teamsDisabled = false;
      threeDisabled = false;
    }
    this.setState({
      players: event.target.value,
      threeDisabled,
      teamsDisabled
    });
  };

  handleRandomTeam = () => {
    if (this.state.players === 4) {
      let config = Math.round(Math.random() * Math.floor(2));
      return this.state.game.players[0].teams[config];
    } else if (this.state.players === 6) {
      let config = Math.round(Math.random() * Math.floor(24));
      let index = 1;

      if (config < 10) {
        index = 0;
      }
      return this.state.game.players[2].teams[index][config];
    }
  };

  handleOnChangeTeams = event => {
    if (this.state.players === 6) {
      if (
        (this.state.teams === 2 && event.target.value === 3) ||
        (this.state.teams === 3 && event.target.value === 2)
      ) {
        this.teamSelectReset();
      }
    }
    this.setState({ teams: event.target.value });
  };

  handleGameChange = event => {
    this.setState({ game: event.target.value });
  };

  handleTeamSelect = () => {
    if (this.state.teams === "random") {
      return [];
    }
    const players = this.state.game.players.find(
      players => players.number === this.state.players
    );

    const teams = players.teams;
    if (this.state.players === 6) {
      return teams[this.state.teams - 2].map(team => (
        <Select.Option key={team} value={team}>
          {team}
        </Select.Option>
      ));
    } else {
      return teams.map(team => (
        <Select.Option key={team} value={team}>
          {team}
        </Select.Option>
      ));
    }
  };

  render() {
    return (
      <div className={styles.setup}>
        <h1 className={styles.setupHeader}>Game Setup</h1>
        <div className={styles.gameBox}>
          <Button
            type="primary"
            children="GAME"
            className={styles.gameButton}
          />
          <Select
            placeholder="Select Game"
            defaultValue={this.state.game.name}
            className={styles.gameSelect}
            children={games.map(value => (
              <Select.Option key={value.name}>{value.name}</Select.Option>
            ))}
            onChange={this.handleGameChange}
          />
        </div>
        <div className={styles.playerBox}>
          <Button
            type="primary"
            children="PLAYERS"
            className={styles.playerButton}
          />
          <Radio.Group
            value={this.state.players}
            onChange={this.handleOnChangePlayers}
            className={styles.buttonBox}
          >
            <Radio.Button value={4} children="4" />
            <Radio.Button value={5} children="5" />
            <Radio.Button value={6} children="6" />
          </Radio.Group>
          <Select
            mode="multiple"
            placeholder={`Select ${this.state.players - 1} Players`}
            className={styles.playerSelect}
            onChange={value => this.handlePlayerSelect(value)}
            children={friends.map(value => (
              <Select.Option key={value}>@{value}</Select.Option>
            ))}
          />
        </div>
        <div className={styles.teamBox}>
          <Button
            className={styles.teamButton}
            type="primary"
            children="TEAMS"
          />
          <Radio.Group
            disabled={this.state.teamsDisabled}
            value={this.state.teams}
            onChange={this.handleOnChangeTeams}
            className={styles.teamsBox}
          >
            <Radio.Button
              value={2}
              className={styles.teamsButton}
              children="2"
            />
            <Radio.Button
              disabled={this.state.threeDisabled}
              value={3}
              className={styles.teamsButton}
              children="3"
            />
            <Radio.Button
              value="random"
              className={styles.teamsButton}
              children="RANDOM"
            />
          </Radio.Group>

          <Select
            className={styles.teamSelect}
            children={this.handleTeamSelect()}
            value={this.state.teamSelect}
            onChange={value => this.setState({ teamSelect: value })}
            placeholder="Select Teams"
            style={{
              visibility: this.state.teams !== "random" ? "visible" : "hidden"
            }}
          />
        </div>
        <div className={styles.startBox}>
          <Button
            className={styles.startButton}
            size="large"
            block
            type="primary"
            onClick={() => {
              this.startGameHandler(this.idGenerator());
            }}
          >
            Start Game!
          </Button>
        </div>
      </div>
    );
  }
}
