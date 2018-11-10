import React, { Component } from 'react';
import styles from './style.module.css';

class Menu extends Component {
  render() {
    let options = this.props.options.map((x,i)=>{
      var active = i==this.props.active?" "+styles["active"]:""
      return(
        <div key={i} className={styles["item"] + active} onClick={this.props.change(i)}>
          <i className={x.icon}></i>
          <span>{x.text}</span>
        </div>)
    })
    return (
      <div className={styles["menu-container"]}>
        <div className={styles["menu"]}>
          {options}
        </div>
      </div>
    );
  }
}

export default Menu;
