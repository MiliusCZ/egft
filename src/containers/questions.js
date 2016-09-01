import React, { Component } from 'react';
import { Question } from 'components/question';
 
export class Questions extends Component {
    render() {
        const data = [
            {
                heading: 'Co je epigenetika?',
                body: 'Epigenetika: „EPI“ znamená v řečtině „něco nad“ tudíž „něco nad genetikou“. Jedná se o vědní obor, který se zabývá vlivy na naši genetickou informaci. Tyto vlivy rozhodují o tom, zda určitý gen v našem těle bude či nebude „přečten“ a tedy zda vůbec bude mít možnost se projevit. V naší DNA máme geny dvojího typu – strukturální a regulační. Strukturální geny rozhodují např. o barvě pleti, očí či jak budeme vysocí. Podle regulačních genů jsou pak převážně tvořeny enzymy, které řídí průběh všech biochemických reakcí v našem organismu. Ne každý gen se ovšem nakonec projeví. Některé geny v naší DNA jsou totiž „zapnuté“ a může podle nich probíhat syntéza bílkovin, zatímco další jsou „vypnuté“ a naše tělo je nedokáže „přečíst“. Existuje spousta vlivů, které mohou zapínání a vypínání genů ovlivnit. Jedná se hlavně o výživu, životní styl, stres apod. Věda, která se tímto zabývá, se nazývá EPIGENETIKA. Velmi zajímavé je to, že „zapínání“ a „vypínání“ genů je ovlivnitelné, velkou roli v této ovlivnitelnosti je výživa a především fytoterapie, v našem kontextu některé vysoce koncentrované přírodní látky s epigenetickým účinkem (např. EGCG ze zeleného čaje). Jedná se o nový způsob ovlivnění našeho zdraví, kdy zapnutí/vypnutí genu zapne/vypne určitou signální dráhu, která může ovlivnit naše zdraví.'
            },
            {
                heading: 'Co je fytoterapie?',
                body: 'Fytoterapie (z řeckých slov fyton, tj. rostlina a therapeuein, tj. pečovat, léčit) je činnost, v minulosti známá též jako bylinkářství, při které jsou k léčbě člověka využívány léčivé přírodní látky.'
            },
            {
                heading: 'Které geny můžeme ovlivnit?',
                body: 'Některé geny pomocí léčivých rostlin ani výživy minimálně v dospělosti neovlivníme – když je vám přes třicet, tak už prostě nevyrostete, ani se nám nezmění barva našich očí. Velice účinně však můžeme zapínat geny, které spolurozhodují o vzniku a vývoji mnoha nemocí, včetně těch nejzávažnějších, jako je rakovina či srdečně cévní nemoci či Alzheimerova choroba. Epigenetika nám však může pomoci i zhubnout nebo zpomalit stárnutí organismu.'
            },
            {
                heading: 'Proč nejsou geny Tvým osudem?',
                body: 'Jednovaječná dvojčata, která mají stejný genotyp, by pak musela zemřít na stejnou nemoc v podobný okamžik. Což se neděje. Okolní vlivy dokážou některé geny zapnout a jiné vypnout. Stačí se podívat například na včely. Všechny ty stovky včel, které spolu žijí v jednom úlu, mají zcela totožnou DNA, a přitom se mohou výrazně lišit. Zatímco královna dorůstá délky až 2, 5 cm a snáší tisíce vajíček, dělnice s těmi samými geny měří něco přes centimetr a je neplodná. Tento obrovský rozdíl je přitom způsoben pouze jejich výživou – zatímco dělnice dostává tzv. mateří kašičku pouze první tři dny po narození, královna se jí živí celý život. Pouhá výživa tak rozhoduje o zapnutí či vypnutí genů ovlivňující růst a vývoj jednotlivých včel.'
            },
            {
                heading: 'Co  lze vyléčit, co nelze vyléčit?',
                body: 'Hodně zjednodušeně lze nemoci dělit na ty, které jsou genetické/ vrozené – např. Downův syndrom, Cystická fibróza apod. Odhaduje se, že pouze 3 – 5% všech nemocích je genetických, tudíž „nevyléčitelných“. Zbytek, tedy 95 – 97% procent nemocí je epigenetických. Tzn. v organismu dochází ke změnám na základě dalších faktorů, jako je predispozice (zděděný sklon k určité nemoci), špatná strava, stres, kouření apod. Pokud je nemoc epigenetická, dají se tyto změny v organismu zlepšit nebo vrátit do původního stavu a to právě hlavně díky epigenetické fytoterapii, kterou praktikujeme.'
            },
            {
                heading: 'Jak probíhá dvouhodinová konzultace?',
                body: 'Nejprve v krátkosti představíme, jakým způsobem pracujeme a jak budeme diagnostikovat. Při diagnostice používáme metodu p. Kříže, kterou jeho rodina vyvíjela po generace. Jeho metoda je neuvěřitelně přesná. I když Vás uvidíme poprvé, jsme schopny určit Váš zdravotní stav. Nejprve projdeme celé Vaše tělo, zjistíme oblasti, kde by mohl být problém. Poté začneme zpřesňovat, o jakou nemoc/disregulaci v organismu se jedná. Výsledkem bude přesná diagnóza např. : máte sníženou funkci štítné žlázy, revmatoidní artritidu, myom na děloze apod. Vyhledávat jednu nemoc po druhé zabere asi 1, 5 hodiny, v některých případech i déle. Obvykle bude výsledkem doporučená směs bylin, na konkrétní problémy. To nejzajímavější je ale ve vyhledání přesných látek s epigenetickým účinkem, které Vám pomohou odstranit nemoci, které diagnostikujeme. Jedná se o vysoce koncentrované látky s epigenetickým účinkem. Tyto látky budou vybrány přímo pro Vás na míru. Obvykle neléčíme stejnou nemoc stejnými látkami u každého klienta. Každý reaguje na něco jiného. Co jinému pomůže, může jinému uškodit. Díky léčbě na míru máme vysokou úspěšnost v léčení.'
            },
            {
                heading: 'Co nabízíme navíc?',
                body: 'Propojení nejnovějších vědeckých výzkumů (vč. nezávislých výzkumů mimo farmaceutický průmysl), které díky své výborné jazykové vybavenosti téměř denně sleduje pan Milan Calábek, a které nám v rámci svých přednášek předává dál. Tyto znalosti pak propojujeme se znalostí přírodních látek a látek s epigenetickým účinkem. Jedná se o zcela nový model uzdravování a prevence nemocí. Pomocí těchto znalostí jsme schopny spoustu nemocí zvrátit. Dále díky přesné diagnostické metodě pana Kříže, jsme schopny velmi cíleně najít řešení přímo pro Vás na míru.'
            },
            {
                heading: 'Proč používat přírodní látky nikoli chemické?',
                body: 'Existuje zažitá představa, že pouze chemie je „silná“, přírodní látky jsou sice dobré, ale velmi slabé, tudíž nemohou člověku pomoci. Pravda je ovšem zcela někde jinde. Vztah mezi léčivou rostlinou a naším tělem je vztahem živým a vyladěným našim potřebám. Jedná se o vztah s vysoce inteligentní a oboustrannou komunikací, kterou neživý vztah mezi chemickými látkami a buňkami našeho těla nemůže nikdy napodobit. Rostlinná molekula dokáže na rozdíl od chemického léku intenzivně komunikovat s buňkami našeho těla, navázat s nimi vztah a zjistit, co potřebují. Naše tělo si od rostliny dokáže vzít přesně to, co potřebuje, a kolik toho potřebuje. Ve fytoterapii nazýváme tento účinek modulačním efektem, to znamená, naše tělo může využít nebo reagovat na léčivou rostlinu různými způsoby podle toho, co přesně potřebuje. Přírodní látky nikdo nepropaguje, protože si je nikdo na světě nemůže patentovat, tudíž na tom nikdo nevydělá. Proto je jejich účinek mnohdy bagatelizován. Naopak chemické látky nedokážou léčit bez mnohdy vážných vedlejších účinků, zato přináší velké zisky.'
            },
            {
                heading: 'U koho studujeme?',
                body: 'Milan Calábek - Původní profesí dramaturg, režisér, překladatel. Později se začal zabývat nejen léčitelstvím, ale i etnografií, cestoval, studoval buddhismus a meditoval v tibetských klášterech v Nepálu.',
                body2: 'Ladislav Kříž - Fytodiagnostik, bylinář, absolvent FTVS UK. Je poslední ze čtvrté léčitelské generace Křížů, trvající více než sto let. Rodina Křížů patří asi k nejznámějším bylinkářům v České republice. Svoje zkušenosti si předávají již po několik generací. Pomocí jeho metody diagnostikujeme, avšak jeho metodami léčíme jen doplňkově.'
            }
            ];

        const questions = data.map((question, index) => (
            <Question key={index} data={question} />    
        ));

        return (
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        {questions}
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
