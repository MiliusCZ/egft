import React, { Component } from 'react';

export class Content extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="mdl-card mdl-shadow--2dp" style={{ width: '400px' }}>
                    <div className="mdl-card__title">
                        <h4 className="mdl-card__title-text"> Ing.Markéta Kováčová, MBA</h4>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="tel:+420774220087">
                            +420 774 220 087
                        </a>
                    </div>
                </div>
                <div className="mdl-card mdl-shadow--2dp" style={{ width: '400px' }}>
                    <div className="mdl-card__title">
                        <h4 className="mdl-card__title-text"> Ing.Zdena Plavcová</h4>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="tel:+420733616012">
                            +420 733 616 012
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}