import React from "react";
import styles from "./game.css";
import { Button, Slider, Select, Radio, Icon } from "antd";
import classnames from "classnames";
import scoringTable from "../Data/scoringTable";

export default class Game extends React.Component {
  state = {
    gameInfo: this.props.appState.gameInfo,
    bids: [],
    round: [],
    handNumber: 1,
    suit: "Spades",
    biddingPlayer: "",
    tricksNumber: 6,
    tricksWon: ["", "", ""],
    pointsScored: ["", "", ""]
  };

  handleConfirmBid = () => {
    let bidsClone = this.state.bids.slice();
    bidsClone.push({
      handNumber: this.state.handNumber,
      suit: this.state.suit,
      tricksNumber: this.state.tricksNumber,
      biddingPlayer: this.state.biddingPlayer
    });

    this.setState({
      round: this.handleKeepScore(),
      bids: bidsClone,
      handNumber: this.state.handNumber + 1,
      suit: "Spades",
      biddingPlayer: "",
      tricksNumber: 6
    });
    console.log(this.state.gameInfo);
  };

  handleBuildScore = () => {
    const currentGame = this.state.gameInfo[this.state.gameInfo.length - 1];
    const totalTricks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return this.state.round.map((round, index) => {
      return round.map((team, i) => {
        if (team.length === 0) {
          return null;
        }
        return (
          <div className={styles.teamScore} key={`team ${i + 1}`}>
            <span className={styles.bidTricks}>
              {team[0]}
              <span>{team[1]}</span>
              {console.log(team)}
            </span>
            <span className={styles.currentScore}>{team[2]}</span>
            <span className={styles.pointsScored}>
              {this.handlePointsScored(team, i)}
            </span>
            {(currentGame.teams === 2 && i === 0) ||
            (currentGame === 3 && i < 2) ? (
              <div className={styles.selectOrSpan}>
                <Select
                  className={styles.tricksSelect}
                  value={this.state.tricksWon[i]}
                  onChange={value => {
                    let tricksWonClone = this.state.tricksWon.slice();
                    let roundClone = this.state.round.slice();
                    tricksWonClone[i] = value;
                    roundClone[roundClone.length - 1][i][2] = value;
                    this.setState({
                      tricksWon: tricksWonClone,
                      round: roundClone
                    });
                  }}
                  children={totalTricks.map(tricks => (
                    <Select.Option value={tricks} key={tricks}>
                      {tricks < 10 ? `0${tricks}` : tricks}
                    </Select.Option>
                  ))}
                />
                <Button className={styles.submitTricks} children="OK" />
              </div>
            ) : (
              <span
                className={styles.tricksWonSpan}
                children={
                  currentGame === 2
                    ? 10 - this.state.tricksWon[i - 1]
                    : currentGame === 3
                    ? 10 -
                      this.state.tricksWon[i - 1] -
                      this.state.tricksWon[i - 2]
                    : ""
                }
              />
            )}
          </div>
        );
      });
    });
  };

  handlePointsScored = (team, index) => {
    const bidNumber = team[0];
    let pointsScoredClone = this.state.pointsScored.slice();
    const tricksWon = this.state.tricksWon[index];
    if (tricksWon !== "") {
      if (bidNumber === "DEF") {
        pointsScoredClone[index] = tricksWon ? tricksWon * 10 : tricksWon;
      } else {
        switch (team[1]) {
          case "♠︎":
            pointsScoredClone[index] =
              tricksWon === 10 && bidNumber < 9
                ? 250
                : tricksWon >= bidNumber
                ? scoringTable.spades[bidNumber - 6]
                : -1 * scoringTable.spades[bidNumber - 6];
            break;
          case "♣︎":
            pointsScoredClone[index] =
              tricksWon === 10 && bidNumber < 8
                ? 250
                : tricksWon >= bidNumber
                ? scoringTable.clubs[bidNumber - 6]
                : -1 * scoringTable.clubs[bidNumber - 6];
            break;
          case "♦︎":
            pointsScoredClone[index] =
              tricksWon === 10 && bidNumber < 8
                ? 250
                : tricksWon >= bidNumber
                ? scoringTable.diamonds[bidNumber - 6]
                : -1 * scoringTable.diamonds[bidNumber - 6];
            break;
          case "♥︎":
            pointsScoredClone[index] =
              tricksWon === 10 && bidNumber < 8
                ? 250
                : tricksWon >= bidNumber
                ? scoringTable.hearts[bidNumber - 6]
                : -1 * scoringTable.hearts[bidNumber - 6];
        }
      }
      return pointsScoredClone[index];
    } else {
      return "N/A";
    }
  };

  handleKeepScore = () => {
    const suits = ["Spades", "Clubs", "Diamonds", "Hearts", "No Trumps"];
    const config = this.state.gameInfo[this.state.gameInfo.length - 1]
      .teamsConfig;
    const round = this.state.round;
    let score = [];
    let team1 = [];
    let team2 = [];
    let team3 = [];

    for (let i = 0; i < config.length; i++) {
      if (config[i].find(player => player === this.state.biddingPlayer)) {
        switch (i) {
          case 0:
            team1.push(
              this.state.tricksNumber,
              this.state.suit === "Spades"
                ? "♠️"
                : this.state.suit === "Clubs"
                ? "♣️"
                : this.state.suit === "Diamonds"
                ? "♦"
                : "♥︎",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i][1] + round[round.length - 1][i][3]
            );
            team2.push(
              "DEF",
              "",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i + 1][1] +
                    round[round.length - 1][i + 1][3]
            );
            if (
              this.state.gameInfo[this.state.gameInfo.length - 1].teams === 3
            ) {
              team3.push(
                "DEF",
                "",
                this.state.handNumber === 1
                  ? 0
                  : round[round.length - 1][i + 2][1] +
                      round[round.length - 1][i + 2][3]
              );
            }
            break;
          case 1:
            team1.push(
              "DEF",
              "",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i - 1][1] +
                    round[round.length - 1][i - 1][3]
            );
            team2.push(
              this.state.tricksNumber,
              this.state.suit === "Spades"
                ? "♠️"
                : this.state.suit === "Clubs"
                ? "♣️"
                : this.state.suit === "Diamonds"
                ? "♦"
                : "♥︎",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i][1] + round[round.length - 1][i][3]
            );
            if (
              this.state.gameInfo[this.state.gameInfo.length - 1].teams === 3
            ) {
              team3.push(
                "DEF",
                "",
                this.state.handNumber === 1
                  ? 0
                  : round[round.length - 1][i + 1][1] +
                      round[round.length - 1][i + 1][3]
              );
            }
            break;
          case 2:
            team1.push(
              "DEF",
              "",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i - 2][1] +
                    round[round.length - 1][i - 2][3]
            );
            team2.push(
              "DEF",
              "",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i - 1][1] +
                    round[round.length - 1][i - 1][3]
            );
            team3.push(
              this.state.tricksNumber,
              this.state.suit === "Spades"
                ? "♠️"
                : this.state.suit === "Clubs"
                ? "♣️"
                : this.state.suit === "Diamonds"
                ? "♦"
                : "♥︎",
              this.state.handNumber === 1
                ? 0
                : round[round.length - 1][i][1] + round[round.length - 1][i][3]
            );
        }
      }
    }
    if (!team3.length) {
      score.push(team1, team2);
    } else {
      score.push(team1, team2, team3);
    }
    let roundClone = round.slice();
    roundClone.push(score);
    return roundClone;
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
          <div className={styles.scoreBox}>{this.handleBuildScore()}</div>
        </div>
      </div>
    );
  }
}
