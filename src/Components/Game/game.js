import React from "react";
import styles from "./game.css";

export default class Game extends React.Component {
  render() {
    return <div className={styles.demoBox} children="Hello World!" />;
  }
}
