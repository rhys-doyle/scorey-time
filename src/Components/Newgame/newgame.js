import React from "react";
import { Button, Icon, Input } from "antd";
import styles from "./newgame.css";
const ButtonGroup = Button.Group;

export default class Newgame extends React.Component {
  render() {
    return (
      <div className={styles.setup}>
        <h1 className={styles.setupHeader}>Game Setup</h1>
        <div className={styles.gameSetup}>
          <ButtonGroup>
            <Button type="primary" children="4" />
            <Button type="primary" children="5" disabled />
            <Button type="primary" children="6" />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
