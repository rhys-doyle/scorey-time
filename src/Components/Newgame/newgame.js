import React from "react";
import { Radio, Select, Button, Icon, Input } from "antd";
import styles from "./newgame.css";
import games from "../Data/games";
import friends from "../Data/friends";

export default class Newgame extends React.Component {
  state = {
    players: 4,
    teams: 2,
    game: games[0],
    teamsDisabled: false,
    threeDisabled: true,
    teamConfig: ""
  };

  handleOnChangePlayers = event => {
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
    if (this.state.teams === "random") {
      if (this.state.players === 4) {
        let config = Math.random() * Math.floor(2);
        this.setState({ teamConfig: this.state.game.players[0].teams[config] });
      } else if (this.state.players === 6) {
        let config = Math.random() * Math.floor(24);
        let index = 1;

        if (config < 10) {
          index = 0;
        }
        this.setState({
          teamConfig: this.state.game.players[2].teams[index][config]
        });
      }
    }
  };

  handleOnChangeTeams = event => {
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
        <Select.Option key={team}>{team}</Select.Option>
      ));
    } else {
      return teams.map(team => (
        <Select.Option key={team}>{team}</Select.Option>
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
            placeholder="Select Players"
            className={styles.playerSelect}
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
            value={teams}
            onChange={this.handleOnChangeTeams}
            className={styles.teamsBox}
          >
            <Radio.Button
              value="2"
              className={styles.teamsButton}
              children="2"
            />
            <Radio.Button
              value="2"
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
            
        </div>
      </div>
    );
  }
}
