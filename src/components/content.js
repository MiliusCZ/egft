import React, { Component } from 'react';
import { Link } from 'react-router'

import topImage from "assets/images/byliny.jpg";

export class Content extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="top-image">
                    <div className="container">
                        <div className="row">
                            <img src={topImage} width='100%' />
                        </div>
                    </div>
                </div>
                <div className="content gray">
                    <div className="container">
                        <div className="jumbotron">
                            <p>
                                Vítejte na našem webu. Nabízíme konzultace v oblasti alternativní medicíny, založené na principu epigenetické fytoterapaie. Jedná se o propojení nejnovějších vědeckých průzkumů s přírodními superlátkami, které dokáží zvrátit většinu nemocí a to i včetně těch, které jsou považovány za nevyléčitelné.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 text-center infobox">
                                <div><i className="material-icons md-48">help_outline</i></div>
                                <p className="text-justify" style={{ width: '15em', marginLeft: 'auto', marginRight: 'auto' }}>
                                    Co je to epigenetika, jaké používáme superlátky nebo jak vypadá konzultace u nás?
                                </p>
                                <Link to="/otazky"><button className="btn btn-primary">Otázky a odpovědi</button></Link>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center infobox">
                                <div><i className="material-icons md-48">info_outline</i></div>
                                <p className="text-justify" style={{ width: '15em', marginLeft: 'auto', marginRight: 'auto' }}>
                                    Kdo jsme, jak jsme se dostaly k epigenetické fytoterapii a odkud čerpáme informace?
                                </p>
                                <Link to="/tym"><button className="btn btn-primary">Náš tým</button></Link>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center infobox">
                                <div><i className="material-icons md-48">credit_card</i></div>
                                <p className="text-justify" style={{ width: '15em', marginLeft: 'auto', marginRight: 'auto' }}>
                                    Kolik stojí návštěva u nás a jaké varianty konzultací si můžete vybrat?
                                </p>
                                <Link to="/cenik"><button className="btn btn-primary">Ceník</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
