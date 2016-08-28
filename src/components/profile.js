import React, { Component, PropTypes } from 'react';
import styles from "./profile.scss";

export class Profile extends Component {
    static propTypes = {
        gray: PropTypes.bool
    };

    render() {
        let className = 'content';
        className += this.props.gray ? ' gray' : '';

        return (
            <div className={className}>
                <div className="container">
                    <div className="row">
                        <h3>{ this.props.heading }</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className="profilePhoto">
                                <img src={ this.props.photo } />
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <div className="profile">
                                <p>
                                    { this.props.info }
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}