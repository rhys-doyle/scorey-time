import React from "react";
import { Button, Icon, Input } from "antd";
import styles from "./newgame.css";
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
            prefix={<Icon type="search" style={{ color: "#00000055" }} />}
            placeholder="Find game"
            className={styles.gameFind}
          />
        </div>
        <div className={styles.setupBox}>
          <Button type="primary" children="PLAYERS" />
          <ButtonGroup>
            <Button type="default" children="4" />
            <Button type="default" children="5" disabled />
            <Button type="default" children="6" />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
