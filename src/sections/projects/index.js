import React, { Component } from 'react';
import styles from './style.module.css';

class Projects extends Component {
  render() {
    return (
        <div className={styles["projects"]}>
            <div className={styles["container"]}>
                <h1>My Projects</h1>
                <p>I've worked mostly on frontend development professionally but I have personal projects that are desktop applications and backend systems and servers.</p>
                <div className={styles["cards"]}>
                    <div className={styles["card"]}>
                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
                        <span>Node.js</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                        <span>React</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
                        <span>C++</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;
