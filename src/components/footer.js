import React, { Component } from 'react';

import map from "assets/images/map.png";

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="col-md-4 col-lg-4">
                        <h4>Kontakty</h4>
                        <ul>
                            <li>Mail</li>
                            <li>Telefon</li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-4">
                        <h4>Kudy k nám</h4>
                        <img src={map} height="150px" />
                    </div>

                    <div className="col-md-4 col-lg-4">
                    </div>
                </div>
            </footer>
        );
    }
}