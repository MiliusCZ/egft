import React, { Component } from 'react';
import styles from "./header.scss";

import imageSource from "assets/images/logo.png";

export class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img src={imageSource} height="60px" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">O nás</a></li>
                                <li><a href="#">Ceník</a></li>
                                <li><a href="#">Kontakty</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}