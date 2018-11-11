import React, { Component } from 'react';
import styles from './style.module.css';
import cpp from './cpp.png';
import node from './node.png';
import react from './react.png';
import python from './python.png';
import bash from './bash.png';
import typescript from './typescript.png';
import mysql from './mysql.png';

class Stack extends Component {
  render() {
    return (
        <div className={styles["stack"]}>
            <div className={styles["container"]}>
                <div className={styles["title"]}><h1>My Stack</h1></div>
                <p>I am a huge fan of JavaScript and C++. I know how to write in Python but wouldn't say I'm the best at it. For front end development I prefer React and for back end development I prefer Node.js but can also write backend applications in Python. For more CPU intensive applications I prefer C++.</p>
                <div className={styles["cards"]}>
                    <div className={styles["card"]}>
                        {/* <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" /> */}
                        <img src={node} />
                        <span>Node.js</span>
                    </div>
                    <div className={styles["card"]}>
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" /> */}
                        <img src={react} />
                        <span>React</span>
                    </div>
                    <div className={styles["card"]}>
                        {/* <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" /> */}
                        <img src={cpp} />
                        <span>C++</span>
                    </div>
                    <div className={styles["card"]}>
                        {/* <img src="https://png2.kisspng.com/20180402/qee/kisspng-python-logo-clojure-javascript-9-5ac25c26a6cfb7.9060924715226870146833.png" /> */}
                        <img src={python} />
                        <span>Python</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src={bash} />
                        <span>Bash</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src={typescript} />
                        <span>Typescript</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src={mysql} />
                        <span>MySQL</span>
                    </div>
                    <div className={styles["card"]}>
                        <img src={bash} />
                        <span>Bash</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Stack;
