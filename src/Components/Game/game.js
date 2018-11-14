import React from "react";
import styles from "./game.css";
import { Button, Slider, Select, Radio, Icon } from "antd";
import classnames from "classnames";

export default class Game extends React.Component {
  state = {
    gameInfo: this.props.appState.gameInfo,
    round: [],
    handNumber: 1,
    suit: "Spades",
    biddingPlayer: "",
    tricksNumber: 6
  };

  handleConfirmBid = () => {
    let roundClone = this.state.round.slice();
    roundClone.push({
      handNumber: this.state.handNumber,
      suit: this.state.suit,
      tricksNumber: this.state.tricksNumber,
      biddingPlayer: this.state.biddingPlayer
    });
    this.setState({
      round: roundClone,
      handNumber: this.state.handNumber + 1,
      suit: "Spades",
      biddingPlayer: "",
      tricksNumber: 6
    });
    console.log(this.state.gameInfo);
  };

  buildTeams = () => {
    const currentGame = this.state.gameInfo[this.state.gameInfo.length - 1];
    return currentGame.teamsConfig.map((team, index) => {
      return (
        <div className={styles.teamMembers} key={`team ${index + 1}`}>
          {team.map((player, index) => {
            return (
              <span className={styles.playerSpan} key={player}>
                {currentGame.teamSelect.length === 14 && index < 2
                  ? `${player} & `
                  : currentGame.teamSelect.length !== 14 && index < 1
                  ? `${player} & `
                  : player}
              </span>
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className={styles.biddingScoring}>
        <div className={styles.bidForm}>
          <div className={styles.titleBox}>
            <h1 className={styles.titleHeader} children="Winning Bid" />
          </div>
          <div className={styles.handBox}>
            {`Hand #${this.state.handNumber}`}
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
              value={this.state.biddingPlayer}
              className={styles.playerSelect}
              children={this.state.gameInfo[
                this.state.gameInfo.length - 1
              ].playerNames.map(name => (
                <Select.Option key={name}>@{name}</Select.Option>
              ))}
              onChange={value => this.setState({ biddingPlayer: value })}
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
              value={this.state.suit}
              onChange={event => this.setState({ suit: event.target.value })}
            >
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.blackSuit]: true
                })}
                value="Spades"
                children="♠️"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.blackSuit]: true
                })}
                value="Clubs"
                children="♣️"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.redSuit]: true,
                  [styles.diamonds]: true
                })}
                value="Diamonds"
                children="♦"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.redSuit]: true
                })}
                value="Hearts"
                children="♥︎"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.noTrumps]: true
                })}
                disabled
                value="No Trumps"
                children="No Trumps"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.misereButton]: true
                })}
                disabled
                value="Misère"
                children="Misère"
              />
              <Radio.Button
                className={classnames({
                  [styles.suitButton]: true,
                  [styles.openButton]: true
                })}
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
              value={this.state.tricksNumber}
              onChange={value => this.setState({ tricksNumber: value })}
            />
          </div>
          <div className={styles.confirmBox}>
            <Button
              type="primary"
              className={styles.confirmButton}
              block
              size="large"
              onClick={this.handleConfirmBid}
              children="CONFIRM WINNING BID"
            />
          </div>
        </div>
        <div className={styles.scoreSheet}>
          <div className={styles.titleBox}>
            <h1 className={styles.titleHeader} children="Score Sheet" />
          </div>
          <div className={styles.handBox}>
            {`ID: ${this.state.gameInfo[this.state.gameInfo.length - 1]._id}`}
            <div className={styles.borderBox} />
          </div>
          <div className={styles.scoreTeams}>{this.buildTeams()}</div>
        </div>
      </div>
    );
  }
}
