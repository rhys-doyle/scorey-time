import React from "react";
import { Icon, Button, Input } from "antd";
import styles from "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.headerBox}>
        <div className={styles.logoBox}>
          <div className={styles.logoLeft}>
            <span className={styles.logoTeam}>S</span>
            <span className={styles.logoScore}>64</span>
          </div>
          <div className={styles.logoRight}>
            <span className={styles.logoTeam}>T</span>
            <span className={styles.logoScore}>99</span>
          </div>
        </div>
        <h1 className={styles.header}>Scorey Time</h1>
        <Input
          className={styles.search}
          prefix={<Icon type="search" style={{ color: "rgba(0,0,0,0.25)" }} />}
          size="small"
          placeholder="Search"
        />
        <div className={styles.newGameBox}>
          <Button
            type="primary"
            className={styles.button}
            size="large"
            onClick={() => this.props.history.push("/newgame")}
            block
          >
            New Game!
            <Icon type="caret-right" />
          </Button>
        </div>
      </div>
    );
  }
}
