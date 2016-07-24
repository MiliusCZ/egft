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
<<<<<<< HEAD
      <div className={styles.container}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <div className="mdl-layout__content">
            <Content />
          </div>
          <Footer />
        </div>
      </div >
=======
      <div className="{styles.container} mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <main className="mdl-layout__content">
            <Content />
        </main>
        <Footer />
    </div >
>>>>>>> c80a58bab2fbcfea52b68bad1a382b9cea8e30ec
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(App);
