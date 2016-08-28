import React, { Component } from 'react';
import styles from "./profile.scss";

export class Question extends Component {
    render() {
        let className = 'content';
        className += this.props.gray ? ' gray' : '';

        const body2 = this.props.data.body2 ? <p>{ this.props.data.body2 }</p> : ''; 

        return (
            <div>
                <h3>{ this.props.data.heading }</h3>
                <p>{ this.props.data.body }</p>
                {body2}
            </div >
        );
    }
}