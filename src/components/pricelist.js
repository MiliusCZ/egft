import React, { Component } from 'react';

import topImage from "assets/images/pills.jpg";

export class Pricelist extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <img src={topImage} width='100%' />
                    </div>
                </div>

                <div className="content gray">
                    <div className="container">
                        <div className="row">
                            <h2>Ceník</h2>
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th style={{ width: '15%', borderTop: '0' }}>Název</th>
                                        <th style={{ width: '15%', borderTop: '0' }}>Doba</th>
                                        <th style={{ width: '20%', borderTop: '0' }}>Cena</th>
                                        <th style={{ borderTop: '0' }}>Popis</th>
                                    </tr>
                                    <tr>
                                        <td>Úvodní konzultace</td>
                                        <td>30 minut</td>
                                        <td>500 Kč *</td>
                                        <td>seznámení se s principy epigenetické fytoterapie, základní vyšetření</td>
                                    </tr>
                                    <tr>
                                        <td>Kompletní testování</td>
                                        <td>2 hodiny</td>
                                        <td>3000 Kč</td>
                                        <td>kompletní vyšetření celého těla na základě principů epigenetické fytoterapie prováděné 2 léčiteli, doporučení terapie – přírodní extrakty + byliny, vhodné potraviny; prevence</td>
                                    </tr>
                                    <tr>
                                        <td>Přetestování</td>
                                        <td>1 hodina</td>
                                        <td>do dvou měsíců - 1200 Kč<br />po dvou měsících - 1500 Kč</td>
                                        <td>kontrolní přetestování, v případě potřeby doporučení následné terapie</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Cena extraktů</td>
                                        <td colSpan="2">od 290 Kč</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>* v případě následného kompletního testování bude částka za úvodní konzultaci odečtena z ceny kompletního testování</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
