import React, { Component } from 'react';
import styles from './style.module.css';
import cpp from './xse.png';
import reco from './reco.png';
import editor from './editor.jpg';

import Project from 'components/project';

class Projects extends Component {
    constructor(props){
        super(props);
        this.details = [{
            img: reco,
            title: "Reco - Cross-Platform Office Software",
            link: "https://github.com/georgeshanti/Reco",
            desc: "A cross-platform office solution built on Electron(written in TypeScript) with a moduler UI built with React(written in JavaScript) and core functionality written in C++."
        },{
            img: cpp,
            title: "XSe - C++ Web Framework",
            link: "https://github.com/georgeshanti/XSe",
            desc: "A C++ web framework to deploy your WebApps. C++ offers you maximum perfomance and very little overhead. Suitable for WebApps that are CPU intensive and have to do large computations."
        },
        {
            img: editor,
            title: "TsEditor - Markup Editor",
            link: "https://github.com/georgeshanti/ts-editor",
            desc: "A HTML editor to write emails, blog posts and other small HTML components. Written entirely in TypeScript"
        }]
    }
    render() {
        let projects = this.details.map(x=>(<Project details={x} />))
        return (
            <div className={styles["projects"]}>
                <div className={styles["container"]}>
                    <div className={styles["title"]}><h1>Projects</h1></div>
                    <div className={styles["cards"]}>
                        {projects}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
