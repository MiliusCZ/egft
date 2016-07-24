import 'assets/styles/index.scss';
import 'material-design-lite';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

import { Content } from 'components/content';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool
  };

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <div className="mdl-layout__content">
            <Content />
          </div>
          <Footer />
        </div>
      </div >
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(App);
