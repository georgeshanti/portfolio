import React, { Component } from 'react';
import styles from './style.module.css';
import cpp from './cpp.png';
import node from './node.png';
import react from './react.png';
import python from './python.png';
class Stack extends Component {
  render() {
    return (
        <div className={styles["stack"]}>
            <div className={styles["container"]}>
                <h1>My Stack</h1>
                <p>I've worked mostly on frontend development professionally but I have personal projects that are desktop applications and backend systems and servers.</p>
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
                </div>
            </div>
        </div>
    );
  }
}

export default Stack;
