import React from "react";
import { Radio, Select, Button, Icon, Input } from "antd";
import styles from "./newgame.css";
import games from "../Data/games";
import friends from "../Data/friends";

export default class Newgame extends React.Component {
  state = {
    players: 4
  };

  handleOnChange = event => {
    this.setState({ players: event.target.value });
  };

  render() {
    const { players } = this.state;
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
            dataSource={friends}
            prefix={<Icon type="search" style={{ color: "#00000055" }} />}
            placeholder="Select Game"
            className={styles.gameSelect}
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
            onChange={this.handleOnChange}
            className={styles.buttonBox}
          >
            <Radio.Button value="4" children="4" />
            <Radio.Button value="5" children="5" />
            <Radio.Button value="6" children="6" />
          </Radio.Group>
          <Input
            prefix={<Icon type="user" style={{ color: "#00000055" }} />}
            placeholder="Select Players"
            className={styles.playerSelect}
          />
        </div>
        <div className={styles.teamBox}>
          <Button
            className={styles.teamButton}
            type="primary"
            children="TEAMS"
          />
          <Radio.Group className={styles.teamsBox}>
            <Radio.Button
              className={styles.teamsButton}
              type="default"
              children="2"
            />
            <Radio.Button
              className={styles.teamsButton}
              type="default"
              children="3"
            />
          </Radio.Group>
        </div>
      </div>
    );
  }
}
