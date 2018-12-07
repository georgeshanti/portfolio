import React, { Component } from 'react';
import styles from './style.module.css';

class Project extends Component {
  render() {
    return (
                    <div className={styles["card"]}>
                        <div className={styles["img_holder"]}>
                            <img src={this.props.details.img} />
                            <div>
                                <div className={styles["source"]}>
                                    <i className="fab fa-github"></i>        
                                    <a href={this.props.details.link} target="_blank">View on GitHub</a>
                                </div>
                            </div>
                        </div>
                        <h3>{this.props.details.title}</h3>
                        <span>{this.props.details.desc}</span>
                    </div>
    );
  }
}

export default Project;
