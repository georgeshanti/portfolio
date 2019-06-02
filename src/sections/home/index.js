import React, { Component } from 'react';
import styles from './style.module.css';
import img from './prof.jpg';

class Home extends Component {
  render() {
    return (
        <div className={styles["home"]}>
          <div className={styles["overlay"]}>
            <header>
              <div className={styles["display-picture"]} style={{background: 'url( '+img+' )', backgroundSize: 'cover'}}/>
              <h3>George Thomas Shanti</h3>
              <h1>Software with a flare.</h1>
            </header>
          </div>
        </div>
    );
  }
}

export default Home;
