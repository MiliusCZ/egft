import React, { Component } from 'react';
//import styles from "./header.css";
import imageSource from "assets/images/logo-alt.png";

export class Header extends Component {
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title"><img src={imageSource} width="200px" /></span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                    </nav>
                </div>
            </header>
        );
    }
}