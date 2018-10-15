import React from "react";
import profile from "/Users/developer/Documents/workspace/scorey-time/src/profilePhoto.jpg";
import styles from "./userpage.css";

export default class Userpage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.div}>
          <img src={profile} className={styles.img} alt="profile_photo" />
        </div>
      </div>
    );
  }
}
