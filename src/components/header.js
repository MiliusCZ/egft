import React, { Component } from 'react';
import styles from "./header.scss";
import { Link } from 'react-router'

import imageSource from "assets/images/logo.png";

export class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <Link className="navbar-brand"  to="/"><img src={imageSource} height="60px" className="logo" /></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Úvodní strana</Link></li>
                                <li><Link to="/otazky">Otázky a odpovědi</Link></li>
                                <li><Link to="/tym">Náš tým</Link></li>
                                <li><Link to="/cenik">Ceník</Link></li>
                                <li><a href="#footer">Kontakty</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
