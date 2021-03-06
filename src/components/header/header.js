import React, { PropTypes } from 'react';
import './header.scss';
import { Link } from 'react-router';

import imageSource from 'assets/images/logo.png';

export const Header = ({ login }) => (
  <header>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link className="navbar-brand" to="/">
            <img alt="logo" src={imageSource} height="60px" className="logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Úvodní strana</Link></li>
            <li><Link to="/otazky">Otázky a odpovědi</Link></li>
            <li><Link to="/tym">Náš tým</Link></li>
            <li><Link to="/cenik">Ceník</Link></li>
            <li><a href="#footer">Kontakty</a></li>
            <li><a onClick={login.handleClick}>{login.text}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  login: PropTypes.object
};
