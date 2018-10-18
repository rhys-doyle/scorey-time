import React from "react";
import profile from "/Users/developer/Documents/workspace/scorey-time/src/profilePhoto.jpg";
import styles from "./userpage.css";
import { Button, Icon, Input } from "antd";

export default class Userpage extends React.Component {
  render() {
    return (
      <div className={styles.userPage}>
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
            prefix={
              <Icon type="search" style={{ color: "rgba(0,0,0,0.25)" }} />
            }
            size="small"
            placeholder="Search"
          />
          <div className={styles.newGameBox}>
            <Button type="primary" className={styles.button} size="large" block>
              New Game!
              <Icon type="caret-right" />
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content1}>
            <div className={styles.imgBox}>
              <img src={profile} className={styles.img} alt="profile_photo" />
            </div>
            <div className={styles.userContent}>
              <div className={styles.userInfo}>
                <h2 className={styles.user}>
                  Rhys Doyle
                  <Icon
                    type="environment"
                    theme="filled"
                    className={styles._locationIcon}
                    style={{ color: "rgba(0,0,0,0.25)" }}
                  />
                  <span className={styles._location}>Melbourne, VIC</span>
                </h2>
                <h4 className={styles.userName}>@rhys__</h4>
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.friendsBox}>
              <h2 className={styles.friendsTitle}>
                FRIENDS
                <div className={styles.divider} />
              </h2>
              <h4 className={styles.friends}>@ojame</h4>
              <h4 className={styles.friends}>@ashington</h4>
            </div>
            <div className={styles.aboutBox}>
              <h4 className={styles.aboutHeader}>
                <span className={styles.about}>
                  <Icon
                    type="user"
                    className={styles.aboutIcon}
                    style={{ color: "#00000035" }}
                  />
                  About
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
