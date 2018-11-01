import React from "react";
import styles from "./game.css";
import { Button, Slider, Select, Radio, Icon } from "antd";

export default class Game extends React.Component {
  render() {
    return (
      <div className={styles.bidForm}>
        Winning Bid
        <div className={styles.teamBox}>
          <Button
            type="primary"
            className={styles.teamButton}
            children="Player"
          />
          <Select placeholder="Select Player" className={styles.playerSelect} />
        </div>
        <div className={styles.suitBox} />
        <div className={styles.tricksBox} />
        <div className={styles.confirmBox} />
      </div>
    );
  }
}
