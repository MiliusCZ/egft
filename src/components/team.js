import React, { Component } from 'react';

import foto1 from "assets/images/market2.jpg";
import foto2 from "assets/images/zdenca2.jpg";

import { Profile } from 'components/profile';

export class Team extends Component {
    render() {
        const infoZdena = `Narodila jsem se v roce 1982 v Litoměřicích. Mám vystudovanou ekonomickou vysokou školu a mým snem bylo vždy zabývat se něčím, co dává opravdu smysl. Když jsem jednou náhodně narazila na rozhovor s Milanem Calábkem, zakladatelem Univerzity Nové Doby, který hovořil o univerzitě a o léčení nemocí, tak na mě rozhovor natolik zapůsobil, že jsem byla okamžitě o studiu na této univerzitě rozhodnuta. Ve škole jsem potkala Markétu a obě nás nejvíce zaujaly přednášky o léčení i nevyléčitelných nemocí, které vycházely z principu epigenetické fytoterapie. V tu chvíli bylo vše jasné a naplnění mého snu dělat něco smysluplného bylo na světě. Jsem za tuto příležitost velmi ráda a s každým dalším vyléčeným klientem se pouze utvrzuji v tom, ze naše práce dává ten opravdový smysl, což mě neskutečně naplňuje.`;

        const infoMarket = 'Narodila jsem se v roce 1981 v Mladé Boleslavi. Vzpomínám si na svou první knihu o celostní medicíně „Sám sobě doktorem“ od Jiřího Cingroše, kterou jsem četla ve 14 letech a tehdy se ve mně probudil obrovský zájem o příčiny nemocí a možnosti léčení bez chemie. Od té doby jsem přečetla desítky knih o této problematice, ale dlouhou dobu se jednalo jen o koníčka. Naprostý zlom nastal, když jsem poprvé uslyšela v rádiu rozhovor s panem Milanem Calábkem a o jeho pojetí o příčinách nemocí a možnosti uzdravení přírodními cestami a poprvé jsem zde zaslechla pojem EPIGENETIKA. Když jsem zjistila, že je možné tento obor studovat na Universitě Nové doby, bylo rozhodnuto. Jedná se o jedinou školu v republice, kde je možné studovat i celostní medicínu, včetně epigenetiky a fytoterapie.Garantem je pan Milan Calábek, filosof, cestovatel, překladatel a odborník na celostní medicínu.';

        return (
            <div className="page-content">
                <Profile gray={false} heading="Ing. Markéta Kováčová, MBA" info={infoMarket} photo={foto1} />
                <Profile gray={true} heading="Ing. Zdena Plavcová" info={infoZdena} photo={foto2} />
            </div>
        );
    }
}


//Mám vystudovanou ekonomickou vysokou školu a jakožto každý ekonom, tak i já jsem vždy toužila po tom mít jednou vlastní firmu, která by se zabývala něčím, co dává opravdu smysl.