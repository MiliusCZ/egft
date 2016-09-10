import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

import { Header, Footer } from 'components';

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

  handleClick() {
    console.log('Login clicked');
  }

  render() {
    const loginObject = {
      text: 'Login',
      handleClick: this.handleClick
    };

    return (
      <div className={styles.container}>
        <Header login={loginObject} />
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
