import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool,
    data: PropTypes.object,
    children: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        {this.props.children}
        <Footer data={this.props.data} />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    data: state.app.data
  };
}

export default connect(mapStateToProperties)(App);
