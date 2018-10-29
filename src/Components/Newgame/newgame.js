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

  };

  handleOnChangeTeams = event => {
    this.setState({ teams: event.target.value });
  };

  render() {
    const players = this.state.players;
    const teams = this.state.teams;

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
            className={styles.gameSelect}
            children={games.map(value => (
              <Select.Option key={value.game}>{value.game}</Select.Option>
            ))}
          />
        </div>
        <div className={styles.playerBox}>
          <Button
            type="primary"
            children="PLAYERS"
            className={styles.playerButton}
          />
          <Radio.Group
            value={players}
            onChange={this.handleOnChangePlayers}
            className={styles.buttonBox}
          >
            <Radio.Button value="4" children="4" />
            <Radio.Button value="5" children="5" />
            <Radio.Button value="6" children="6" />
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
