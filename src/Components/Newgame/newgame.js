import React from "react";
import { Button, Icon, Input } from "antd";
import styles from "./newgame.css";
import games from "../Data/games";
import friends from "../Data/friends";
const ButtonGroup = Button.Group;

export default class Newgame extends React.Component {
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
          <Input
            list="games"
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
          <ButtonGroup className={styles.buttonBox}>
            <Button type="default" children="4" />
            <Button type="default" children="5" />
            <Button type="default" children="6" />
          </ButtonGroup>
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
          <ButtonGroup className={styles.teamsBox}>
            <Button
              className={styles.teamsButton}
              type="default"
              children="2"
            />
            <Button
              className={styles.teamsButton}
              type="default"
              children="3"
            />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
