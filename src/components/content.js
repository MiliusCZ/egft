import React, { Component } from 'react';

import foto1 from "assets/images/foto1.jpg";
import foto2 from "assets/images/foto2.jpg";

export class Content extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="jumbotron">
                            <h1>Epigenetická fytoterapie</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Etiam neque.Integer pellentesque quam vel velit.Nulla quis diam.Etiam egestas wisi a erat.Nunc dapibus tortor vel mi dapibus sollicitudin.Praesent vitae arcu tempor neque lacinia pretium.Etiam egestas wisi a erat.Fusce aliquam vestibulum ipsum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <h2>O nás</h2>

                        <div className="col-md-6 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">Ing.Markéta Kováčová, MBA</div>
                                <div className="panel-body no-padding">
                                    <div className="text-center">
                                        <img src={foto1}  />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Etiam neque.Integer pellentesque quam vel velit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">Ing.Zdena Plavcová</div>
                                <div className="panel-body no-padding">
                                    <div className="text-center">
                                        <img src={foto2} />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Etiam neque.Integer pellentesque quam vel velit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h2>Ceník</h2>
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th>Název</th>
                                    <th>Cena</th>
                                </tr>
                                <tr>
                                    <td>Základní vyšetření</td>
                                    <td>500 Kč</td>
                                </tr>
                                <tr>
                                    <td>Kompletní vyšetření</td>
                                    <td>1500 Kč</td>
                                </tr>
                                <tr>
                                    <td>Orientační cena preparátů</td>
                                    <td>500 - 2000 Kč</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}