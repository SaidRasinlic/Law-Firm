import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/practice_page.scss';
import procOne from '../assets/images/procedural-1.jpg';
import procTwo from '../assets/images/procedural-2.jpg';
import procThree from '../assets/images/procedural-3.jpg';
import procFour from '../assets/images/procedural-4.jpg';
import procFive from '../assets/images/procedural-5.jpg';
import procSix from '../assets/images/procedural-6.jpg';
import procSeven from '../assets/images/procedural-7.jpg';
import procEight from '../assets/images/procedural-8.png';

export default function ProceduralPage() {
  return (
    <section className="practice-page-section dark" id="lista-postupaka">
      <SEO
        title="Advokatska kancelarija | Pravni postupci | Senad Rašinlić | Sarajevo"
        keywords="advokati sarajevo, advokat, advokat mjesecar, upravni postupak, upravni spor, parnicni postupci, krivicni postupci, advokatska kancelarija"
        description="Upravni postupak i upravni spor, parnični postupci. vanparnični postupci, izvršni postupci, krivični postupci, prekršajni postupci..."
        name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
        type="website"
      />
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">PRAVNI POSTUPCI</h1>

        <article className="postcard dark yellow">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procOne} alt="pravni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">UPRAVNI POSTUPAK I UPRAVNI SPOR</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Upravni postupak je pravno uređen način rada svih tijela uprave
              pri rješavanju upravnih stvari.
              Čine ga pravna pravila o obveznom postupanju državnih organa kad u upravnim stvarima,
              izravnom primjenom relevantnih zakonskih propisa rješavaju o pravima,
              obvezama ili pravnim interesima pojedinaca, pravnih osoba i drugih stranaka.
              <hr />
              Upravni spor je posebna vrsta sudskog postupka koji se nastavlja na upravni postupak.
              Naime, ukoliko tijelo javne vlasti u svom djelokrugu donese odluku (upravni akt)
              za koju zainteresirana
              stranka smatra da nije zakonita ili joj je povrijeđeno neko pravo, tada joj ostaje
              mogućnost pokretanja upravnog
              spora putem tužbe. Prema tome, upravni spor podrazumijeva sudsku kontrolu nad
              odlukama upravnih vlasti i tijela
              koja imaju javne ovlasti.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  Jedna stranka pred organom općine, grada, kantona, Federacije, države
                </li>
                <li className="tag__item play yellow">
                  Jedna stranka, Tužitelj, protiv općine, grada,
                  kantona, Federacije, države, u postupku na Kantonalnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procTwo} alt="parnicni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">PARNIČNI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Parnični postupak, građanski sudski postupak po pravilima kojega se rješavaju
              sporovi u tzv. građanskopravnim stvarima, odn. u kojem se pruža zaštita ugroženim ili
              povrijeđenim subjektivnim građ. pravima. Sudovi, po pravilima parničnoga postupka,
              raspravljaju i odlučuju u sporovima o osnovnim pravima i obvezama čovjeka i građanina,
              o osobnim i obiteljskim odnosima građana te u radnim, trgovačkim, imovinskim
              i drugim građanskopravnim sporovima, osim ako zakonom nije za neke od tih sporova
              iznimno određeno da ih sud rješava po pravilima kojega drugoga postupka.
            </div>

            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">
                  Najčešće, dvije stranke, jedna protiv druge, po pravilima parničnog postupka,
                  prvostepeno na Općinskom sudu, drugostepeno na Kantonalnom sudu,
                  trećestepeno na Vrhovnom sudu
                </li>
                <li className="tag__item play blue">
                  Zastupanje povodom povrede prava iz radnog odnosa,
                  odnosno tužbe za povrat na posao
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark green">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procThree} alt="izvrsni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">IZVRŠNI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Izvršni postupak je sudski proces kojim se pravno ili fizičko lice prisiljava
              da se pridržava svojih obaveza utvrđenih izvršnim dokumentom/ispravom.
              Izvršna isprava je uglavnom odluka suda, ali može biti i notarska isprava i
              druga isprava, koju je zakon predvidio kao izvršnu ispravu.
              Izvršni postupak pokreće se prijedlogom tražioca izvršenja.
              Tražilac izvršenja je lice (fizičko ili pravno) koje pokreće
              postupak i koje je izdejstvovalo izvršnu ispravu.
              Izvršenik je lice (fizičko ili pravno) protiv kojeg se pokreće izvršni postupak.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">
                  Najčešće, dvije stranke, jedna protiv druge, po pravilima izvršnog i
                  (za odredbe kojih tamo nema)
                  parničnog postupka, prvostepeno na Općinskom sudu,
                  drugostepeno na Kantonalnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procFour} alt="vanparnicni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">VANPARNIČNI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Vanparnični postupak se pokreće prijedlogom fizičkog lica ili pravne osobe kao i
              prijedlogom organa koji su predviđeni određenim zakonom. Ukoliko ovlašteni organ
              nije pokrenuo postupak, a sud dobije saznanje o tome, sud će pozvati ovlaštenu
              osobu da pokrene postupak i drediti mu rok u kojem mora pokrenuti postupak,
              a sve radi zaštite javnog interesa. Iz naprijed navedenog se vidi da se postupak
              pokreće prijedlogom, a u parničnom postupku isključivo tužbom, što samo po sebi
              odražava prirodu ova dva odvojena procesna postupka.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  Najčešće, dvije stranke, jedna protiv druge, po pravilima vanparničnog postupka,
                  prvostepeno na Općinskom sudu,
                  drugostepeno na Kantonalnom sudu, trećestepeno na Vrhovnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark red">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procFive} alt="krivicni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">KRIVIČNI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Krivično pravo je sistem zakonskih pravnih propisa kojima se utvrđuju uslovi
              za primjenu kazni i drugih krivičnih sankcija prema učiniocima krivičnih djela,
              a u cilju zaštite društvenog i ekonomskog uređenja određene države.
              Postoje 3 osnovna elementa za određivanje općeg pojma krivičnog prava:
              <br />
              1. Krivično pravo je zakonsko pravo. To znači da se samo zakonom mogu regulisati
              pitanja krivičnog prava;
              <br />
              2. Predmet regulisanja krivičnog prava su 3 osnovna pitanja: krivično djelo,
              krivična odgovornost i krivična sankcija. To znači utvrđivanje koja se
              društveno opasna ponašanja čovjeka smatraju krivičnim djelima,
              koja lica se smatraju krivično odgovornim, te koje se sankcije mogu izreći učiniocima.
              <br />
              3. Zaštitna funkcija krivičnog prava. Krivično pravo štiti društveno-ekonomsko
              uređenje države i izraz je društvenih odnosa koji postoje u određenoj zemlji.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">
                  Najčešće jedna stranka, po pravilima krivičnog postupka, najčešće,
                  prvostepeno na Općinskom sudu,
                  prvo / drugostepeno na Kantonalnom sudu, drugo / trećestepeno na Vrhovnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>
        <article className="postcard dark yellow">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procSix} alt="prekrsajni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">PREKRŠAJNI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Osim kaznenih djela, u pravnom poretku postoji i druga
              velika skupina kažnjivih
              ponašanja - prekršaji. Prekršaji se smatraju lakšim povredama
              od kaznenih djela, pa su i kazne
              koje su propisane za prekršaj blaže od onih kojima se prijeti mogućim
              počiniteljima kaznenih
              djela. To se odražava i na prekršajni postupak koji je jednostavniji i
              brži od kaznenog postupka.
              Kod određenih je protupravnih ponašanja katkad teško odrediti radi li se
              o prekršaju ili o
              kaznenom djelu. Takva ocjena ovisi o nizu specifičnih okolnosti
              svakog pojedinog slučaja.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  Najčešće jedna stranka ili jedno pravno lice, po pravilima prekršajnog postupka,
                  prvostepeno na Općinskom sudu, drugostepeno na Kantonalnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark green">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procSeven} alt="registracije privrednih drustava" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">REGISTRACIJE PRIVREDNIH DRUŠTAVA</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Da bi jedno privredno društvo moglo da otpočne sa radom i stekne svojinu
              pravnog lica potrebno
              je da ispuni određen broj uslova i da prođe postupak registracije.
              Društva se registruju u agenciji za privredne registre u skladu sa
              zakonom o registraciji. Registrovanjem u registru privrednih društava
              svi podaci o društvu postaju dostupni javnosti i mjerodavni za treća lica.
              Dva osnovna podatka o privrednom društvu jesu matični broj i poreski
              identifikacioni broj bez kojih privredno društvo ne može biti registrovano
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">
                  Najčešće jedan osnivač privrednog društva, po mogućnosti i više osnivača,
                  prvostepeno na Općinskom sudu, drugostepeno na Kantonalnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue">
          <div className="postcard__img_link">
            <img className="postcard__img" src={procEight} alt="slucajni ili likvidacioni postupci" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">STEČAJNI/LIKVIDACIONI POSTUPCI</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Stečaj je zakonom utvrđen postupak koji se provodi nad imovinom dužnika
              radi namirenja povjerilaca. Pored namirenja povjerilaca stečajem se onemogućava
              dalje loše poslovanje privrednog subjekta. Stečajem se postiže kako ravnomjerno
              namirenje povjerilaca tako i zaštita dužnika od povjerilaca koji na svaki način
              žele da se namire iz dužnikove
              imovine. U teoriji i praksi, stečaj se sprovodi poštovanjem određenih načela.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">
                  Jedna stranka, privredno društvo, po pravilima stečaja ili likvidacija,
                  prvostepeno na Općinskom sudu, drugostepeno na Kantonalnom sudu
                </li>
              </ul>
            </Fade>
          </div>
        </article>
      </div>
    </section>
  );
}
