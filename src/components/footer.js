import React, { Component } from 'react';
import styles from "./footer.scss";

import map from "assets/images/map.png";

export class Footer extends Component {
    render() {
        return (
            <footer>
                <a name="footer"></a>
                <div className="container text-center">
                    <div className="col-md-4 col-lg-4 footerItem">
                        <h4>Telefony</h4>
                        <p>
                            Markéta: <a href="tel:+420774220078">774 220 078</a> <br/> Zdena: <a href="tel:+420733616012">733 616 012</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 footerItem">
                        <h4>Internet</h4>
                        <p>
                            Mail: <a href="mailto:epigenetickafytoterapie@seznam.cz">epigenetickafytoterapie@seznam.cz</a><br />Web: <a href="/">www.epigenetickafytoterapie.cz</a><br />
                            Facebook: <a href="https://www.facebook.com/Epigenetika-léčení-i-nevyléčitelných-nemocí-1726099220994515">Epigenetika</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 footerItem">
                        <h4>Adresa</h4>
                        <p>
                            Koněvova 54<br/>
                            Praha 3-Žižkov<br/>
                            <a href="https://mapy.cz/s/ojKe" target="__blank">mapa</a>
                        </p>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="col-md-2 col-lg-2">
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <hr /><br /><span className="dimmedColor">(c) 2016</span>
                    </div>
                    <div className="col-md-2 col-lg-2">
                    </div>
                </div>
            </footer>
        );
    }
}