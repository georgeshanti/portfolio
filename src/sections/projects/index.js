import React, { Component } from 'react';
import styles from './style.module.css';
import cpp from './cpp.png';

class Projects extends Component {
  render() {
    return (
        <div className={styles["projects"]}>
            <div className={styles["container"]}>
                <div className={styles["title"]}><h1>Projects</h1></div>
                <div className={styles["cards"]}>
                    <div className={styles["card"]}>
                        <div className={styles["img_holder"]}>
                            <img src={cpp} />
                            <div>
                                <div className={styles["source"]}>
                                    <i className="fab fa-github"></i>        
                                    <a href="https://github.com/georgeshanti/CServer" target="_blank">View on GitHub</a>
                                </div>
                            </div>
                        </div>
                        <h3>C++ Web Framework</h3>
                        <span>A C++ web framework to deploy your WebApps. C++ offers you maximum perfomance and very little overhead. Suitable for WebApps that are CPU intensive and have to do large computations.</span>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["img_holder"]}>
                            <img src="https://d1dkupr86d302v.cloudfront.net/community/assets/social-media-icons/icon-tag-react-0890ee78bd7e182d153900e4af5b1f33561afdac384c6191eab4e90528b0781b.png" />
                            <div>
                                <div className={styles["source"]}>
                                    <i className="fab fa-github"></i>        
                                    <a href="https://github.com/georgeshanti/portfolio" target="_blank">View on GitHub</a>
                                </div>
                            </div>
                        </div>
                        <h3>Portfolio</h3>
                        <span>This portfolio is one I built using react. So now you have proof that I know React :P</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;
