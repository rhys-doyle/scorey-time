import React from "react";
import styles from "./game.css";
import { Button, Slider, Select, Radio, Icon } from "antd";

export default class Game extends React.Component {
  state = {};

  render() {
    return (
      <div className={styles.bidForm}>
        <div className={styles.titleBox}>
          <h1 className={styles.titleHeader} children="Winning Bid" />
        </div>
        <div className={styles.handBox} children={`Hand #${1}`} />
        <div className={styles.teamBox}>
          <Button
            type="primary"
            className={styles.teamButton}
            children="Player"
          />
          <Select
            placeholder="Select Player"
            className={styles.playerSelect}
            // children={this.state.gameInfo[
            //   this.state.gameInfo.length - 1
            // ].playerNames.map(name => (
            //   <Select.Option key={name}>@{name}</Select.Option>
            // ))}
          />
        </div>
        <div className={styles.suitBox} />
        <div className={styles.tricksBox} />
        <div className={styles.confirmBox} />
      </div>
    );
  }
}
