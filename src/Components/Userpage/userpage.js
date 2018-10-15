import React from "react";
import profile from "/Users/developer/Documents/workspace/scorey-time/src/profilePhoto.jpg";
import styles from "./userpage.css";
import { Button, Icon } from "antd";

export default class Userpage extends React.Component {
  render() {
    return (
      <div className={styles.userPage}>
        <div className={styles.headerBox}>
          <div className={styles.logoBox}>ST</div>
          <h1 className={styles.header}>Scorey Time</h1>
        </div>
        <div className={styles.topBox}>
          <div className={styles.div}>
            <img src={profile} className={styles.img} alt="profile_photo" />
          </div>
          <div className={styles.newGameBox}>
            <Button type="primary" className={styles.button}>
              New Game!
              <Icon type="caret-right" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
