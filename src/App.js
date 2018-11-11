import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';
import Menu from 'components/menu';
import Home from 'sections/home';
import Stack from 'sections/stack';
import Project from 'sections/projects';

class App extends Component {
  constructor(props){
    super(props);
    this.menu = [
      {'text': 'Home', 'icon':'fas fa-home'},
      {'text': 'Stack', 'icon':'fas fa-database'},
      {'text': 'Projects', 'icon':'fas fa-clipboard'},
      {'text': 'Literature', 'icon':'fas fa-pencil-alt'},
      {'text': 'Education', 'icon':'fas fa-graduation-cap'}
    ];
    this.state = {
      'section': 0,
    };
    this.section = this.section.bind(this);
    this.scroll = this.scroll.bind(this);
    window.onscroll =  this.scroll;
  }

  section = (i) => (e) =>{
    // this.setState({'section': i});
    const tesNode = ReactDOM.findDOMNode(this.refs[i]);
    if(tesNode){
      window.parent.scrollTo({top:tesNode.offsetTop, behavior: 'smooth'});
      // window.pageYOffset = tesNode.offsetTop;
    }
  }

  scroll = (e) => {
    var closest = 0;
    var dist = -1;
    var scrollDist = window.pageYOffset;
    var i=0;
    var section = ReactDOM.findDOMNode(this.refs[i]);
    while(section){
      var sectionDist = Math.abs( section.offsetTop - scrollDist );
      if(sectionDist<dist || dist==-1){
        dist=sectionDist;
        closest=i;
      }
      i++;
      section = ReactDOM.findDOMNode(this.refs[i]);
    }
    this.setState({'section': closest})
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Menu options={this.menu} active={this.state['section']} change={this.section}/>
        <div className={styles["sections"]} ref="page" id="page">
          <Home ref={0} />
          <Stack ref={1} />
          <Project ref={2} />
        </div>
      </div>
    );
  }
}

export default App;
