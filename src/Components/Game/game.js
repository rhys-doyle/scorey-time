import React from "react";
import styles from "./game.css";
import { Button, Slider, Select, Radio, Icon } from "antd";

export default class Game extends React.Component {
  state = {};

  render() {
    console.log(this.props.appState);
    return (
      <div className={styles.bidForm}>
        <div className={styles.titleBox}>
          <h1 className={styles.titleHeader} children="Winning Bid" />
        </div>
        <div className={styles.handBox}>
          {`Hand #${1}`}
          <div className={styles.borderBox} />
        </div>
        <div className={styles.teamBox}>
          <Button
            type="primary"
            className={styles.teamButton}
            children="PLAYER"
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
        <div className={styles.suitBox}>
          <Button
            className={styles.suitBoxButton}
            children="SUIT"
            type="primary"
          />
          <Radio.Group
            className={styles.suitRadio}
            value="Spades"
            // onChange={this.handleSuitChange}
          >
            <Radio.Button
              className={styles.suitButton}
              value="Spades"
              children="♠️"
            />
            <Radio.Button
              className={styles.suitButton}
              value="Clubs"
              children="♣️"
            />
            <Radio.Button
              className={styles.suitButton}
              value="Diamonds"
              children="♦️"
            />
            <Radio.Button
              className={styles.suitButton}
              value="Hearts"
              children="❤️"
            />
            <Radio.Button
              className={styles.suitButton}
              disabled
              value="No Trumps"
              children="🚫"
            />
            <Radio.Button
              className={styles.suitButton}
              disabled
              value="Misère"
              children="Misère"
            />
            <Radio.Button
              className={styles.suitButton}
              disabled
              value="Open Misère"
              children="Open Misère"
            />
          </Radio.Group>
        </div>
        <div className={styles.tricksBox}>
          <Button
            type="primary"
            children="TRICKS"
            className={styles.tricksButton}
          />
          <Slider
            className={styles.tricksSlider}
            max={10}
            min={6}
            step={1}
            // onChange={}
          />
        </div>
        <div className={styles.confirmBox}>
          <Button
            type="primary"
            className={styles.confirmButton}
            block
            size="large"
            //onClick={}
            children="Confirm Winning Bid"
          />
        </div>
      </div>
    );
  }
}
