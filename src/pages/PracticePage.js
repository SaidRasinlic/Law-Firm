import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/practice_page.scss';
import cardImg1 from '../assets/images/card-img-1.png';
import cardImg2 from '../assets/images/card-img-2.jpg';
import cardImg3 from '../assets/images/corporate.jpg';
import cardImg4 from '../assets/images/card-img-4.jpg';
import cardImg5 from '../assets/images/card-img-5.jpg';
import cardImg7 from '../assets/images/card-img-7.jpg';

export default function PracticePage() {
  return (
    <section className="practice-page-section dark" id="lista-oblasti">
      <SEO
        title="Advokatska kancelarija | Pravne Oblasti | Senad Rašinlić | Sarajevo"
        keywords="Pravne oblasti, obligaciono pravo, krivicno pravo, advokat sarajevo, advokati, advokatura, advokat sarajevo, porodicno pravo, imovinsko pravo "
        description="Ugovorno (obligaciono) pravo, sve vrste naknade štete od fizičkih i pravnih lica, krivično pravo, porodično pravo, nasljednopravni odnosi, sve vrste naknade štete od fizičkih i pravnih lica..."
        name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
        type="website"
      />
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">PRAVNE OBLASTI</h1>

        <article className="postcard dark red" id="imovinsko-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg1} alt="Something" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">
              STVARNO PRAVO I
              <br />
              IMOVINSKOPRAVNI ODNOSI
            </h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Imovinsko pravo je oblast prava koja uređuje različite oblike vlasništva
              nad nekretninama (zemljištem) i ličnom svojinom.
              Imovina se odnosi na zakonski zaštićena potraživanja na resurse,
              poput zemlje i lične imovine, uključujući intelektualnu svojinu.
              Imovina se može razmijeniti putem ugovornog zakona, a ako se
              imovina narušava, može se podnijeti tužba po deliktnom zakonu da bi se zaštitila.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">
                  Urbanističke saglasnosti
                </li>
                <li className="tag__item play red">
                  Građevinske dozvole
                </li>
                <li className="tag__item play red">
                  Upotrebne dozvole
                </li>

                <li className="tag__item play red">
                  Legalizacije bespravno izgrađenih objekata
                </li>
                <li className="tag__item play red">
                  Postupak zaustavljanja / Rušenja bespravno izgrađenih objekata
                </li>
                <li className="tag__item play red">
                  Zemljišnoknjižni podaci
                </li>

                <li className="tag__item play red">
                  Katastarski podaci
                </li>
                <li className="tag__item play red">
                  Utvrđivanje površine zemljišta
                </li>
                <li className="tag__item play red">
                  Sudski postupci za utvrđivanje vlasništva nad nekretninama - vlasničke tužbe
                </li>
                <li className="tag__item play red">
                  Sudski postupci za utvrđenje vlasništva građenjem na tuđem zemljištu
                </li>
                <li className="tag__item play red">
                  Utvrđivanje etažnog vlasništva
                </li>
                <li className="tag__item play red">
                  Sudski postupci za utvrđivanje smetanja posjeda
                </li>

                <li className="tag__item play red">
                  Sudski postupci za razvrgnuće zajednice nekretnina
                </li>
                <li className="tag__item play red">
                  Sudski postupci za utvrđivanje vlasništva dosjelošću / održajem
                </li>
                <li className="tag__item play red">
                  Pretvaranje državnog u privatno vlasništvo
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue" id="obligaciono-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg2} alt="Something" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">OBLIGACIONO PRAVO</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Obligaciono pravo je grana privatnog prava koja uređuje i štiti obligacione odnose.
              Obligacioni odnosi su pravni odnosi između dvije strane, povjerilačke i dužničke
              u kojima povjerilac ima tražbinu odnosno potreživanje koje je subjektivno građansko
              pravo po kojem je ovlešten da zahtiejva od dužnika neko ponašanje koje ima imovinski
              karakter, a dužnik je obavezan i odgovoran da izvrši zahtijevano
              ponašanje i tako ugasi obligacioni odnos.
              Obligaciono pravo je grana građanskog prava a u najširem smislu grana privatnog prava.
            </div>

            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">
                  Sve vrste dužničko-povjerilačkih odnosa
                </li>
                <li className="tag__item play blue">
                  Ugovori o zakupu
                </li>
                <li className="tag__item play blue">
                  Ugovori o djelu
                </li>
                <li className="tag__item play blue">
                  Ugovori o građenju
                </li>
                <li className="tag__item play blue">
                  Ostali obligacioni ugovori
                </li>
                <li className="tag__item play blue">
                  Pravo zaloga
                </li>
                <li className="tag__item play blue">
                  Prava povodom uspostavljene hipoteke
                </li>

                <li className="tag__item play blue">
                  Prava po osnovu mjenice
                </li>
                <li className="tag__item play blue">
                  Naknade štete od fizičkih lica i osiguravajućih društava
                </li>
                <li className="tag__item play blue">
                  Prava dužnika nakon raskinutih ugovora o kreditu
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark green" id="porodicno-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg4} alt="Something" />
          </div>
          <div className="postcard__text__long">
            <h1 className="postcard__title hov-green">PORODIČNO I NASLJEDNO PRAVO</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Porodično pravo je grana prava koja se bavi uređenjem porodičnih odnosa
              koji nastaju između bračnih i vanbračnih drugova, između roditelja i djece
              i drugih srodnika po krvi i usvojenju, te odnosa starateljstva. U tom smislu
              se porodično pravo može odrediti kao skup pravnih normi koje regulišu porodične
              odnose i porodicu kao cjelinu.
              <hr style={{ borderTop: 'none' }} />
              Nasljedno pravo u objektivnom smislu tog pojma, je skup pravnih pravila
              kojima se za slučaj smrti jedne
              osobe - ostavitelja, uređuje prijelaz njene imovine
              (odnosno njezinih subjektivnih prava i obveza) na druge osobe - njezine nasljednike.
              Pojednostavljeno se može definirati kao skup pravnih pravila
              kojima se uređuje nasljeđivanje.
              Nasljedno pravo u subjektivnom smislu obuhvaća prava koja pojedinac stiče
              smrću ostavitelja, odnosno predstavlja ovlaštenje određene osobe da stupe
              u pravne odnose umrlog.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">
                  Postupci za razvod, utvrđivanje ili poništenje braka
                </li>
                <li className="tag__item play green">
                  Promjena pravosnažnih odluka o starateljstvu nad djecom
                </li>
                <li className="tag__item play green">
                  Utvrđivanje alimentacije bračnom partneru, djeci ili roditeljima,
                </li>
                <li className="tag__item play green">
                  Utvrđivanje starateljstva nad djecom
                </li>
                <li className="tag__item play green">
                  Podjela bračnih stečevina
                </li>
                <li className="tag__item play green">
                  Utvrđivanje očinstva nad djetetom
                </li>
                <li className="tag__item play green">
                  Pokretanje ostavinskih postupaka
                </li>
                <li className="tag__item play green">
                  Sastavljenje testamenta i nasljedničkih izjava
                </li>
                <li className="tag__item play green">
                  Utvrđivanje ništavosti testamenta
                </li>
                <li className="tag__item play green">
                  Ostale nasljednopravne radnje
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow" id="radno-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg5} alt="Something" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">RADNO PRAVO</h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Radno pravo je grana prava koja se bavi izuzetno osjetljivim socijalnim
              pitanjima neodvojivim od ekonomskih interesa svih učesnika ne samo
              radnih već ukupnih društveno-ekonomskih odnosa jedne države, a
              ponekad i šire, te zbog takve svoje prirode nameću stalnu potrebu za
              svojim unapređenjem i adekvatnim zakonskim uređenjem.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  Ugovori o radu
                </li>
                <li className="tag__item play yellow">
                  Otkazi ugovora o radu, ukoliko se zastupa pravno lice
                </li>
                <li className="tag__item play yellow">
                  Zastupanje povodom neisplaćenih plata i drugih prava iz radnog odnosa
                </li>
                <li className="tag__item play yellow">
                  Zastupanje povodom povrede prava iz radnog odnosa,
                  odnosno tužbe za povrat na posao
                </li>
                <li className="tag__item play yellow">
                  Sastavljanje pravilnika o radu
                </li>
                <li className="tag__item play yellow">
                  Sastavljanje internih akata poslodavca
                </li>
                <li className="tag__item play yellow">
                  Zaštita prava radnika
                </li>
                <li className="tag__item play yellow">
                  Zaštita prava poslodavaca
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue" id="privredno-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" style={{ backgroundPosition: 'right' }} src={cardImg3} alt="Something" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">
              PRIVREDNO PRAVO I
              <br />
              REGISTRACIJA PRAVNIH LICA
            </h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Privredno pravo određuje osnove trgovine kao djelatnosti, kroz aktivnosti
              obrazovanja trgovaca i njihovog nastanka kao subjekata trgovine,
              utvrđivanja uvjeta rada trgovačkih subjekata i sl.
              U ranijim razdobljima razvitka pravne nauke u sastavu građanskog prava bilo je i
              trgovačko pravo, koje se nekad naziva i privredno pravo. Uslijed dinamičnog razvoja,
              ono se iz njega izdvojilo i sada predstavlja veoma perspektivno,
              samostalnu pravnu granu.
              Robonovčani tokovi čine ga i dalje veoma dinamičnim pravom, podložnim promjenama i
              usavršavanjima.
            </div>

            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">
                  Registracije privrednih društava
                </li>
                <li className="tag__item play blue">
                  Izrada svih akata društva
                </li>
                <li className="tag__item play blue">
                  Odluka o osnivanju društva
                </li>
                <li className="tag__item play blue">
                  Sastavljanje statuta društava
                </li>
                <li className="tag__item play blue">
                  Statusne promjene društava
                </li>
                <li className="tag__item play blue">
                  Stečajni / likvidacioni postupci privrednih društava
                </li>
                <li className="tag__item play blue">
                  Sve vrste dužničko-povjerilačkih odnosa između pravnih lica
                </li>
                <li className="tag__item play blue">
                  Savjetodavne usluge pravnih lica
                </li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow" id="imigraciono-pravo">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg7} alt="Something" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">
              IMIGRACIONO PRAVO I
              <br />
              PRAVO STRANACA
            </h1>
            <div className="postcard__subtitle small">
              OPŠIRNIJE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Naša advokatska kancelarija pruža stručnu pravnu pomoć svim stranim fizičkim
              i pravnim licima u pogledu pitanja koja se tiču uslova koje je neophodno
              da ispuni strano fizičko lice ako namjerava da stupi i boravi na teritoriji
              BiH, kao i pogledu pitanja vezanih za osnivanje i poslovanje podružnica
              i predstavništava stranih privrednih društava na teritorji BiH.

            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  Dobijanje boravišne dozvole za strance u BiH
                </li>
                <li className="tag__item play yellow">
                  Dobijanje radne dozvole za strance u BiH
                </li>
                <li className="tag__item play yellow">
                  Sticanje BiH državljanstva
                </li>
                <li className="tag__item play yellow">
                  Odricanje i otpust BiH državljanstva
                </li>
                <li className="tag__item play yellow">
                  Otvaranje bankovnog računa nerezidenta
                </li>
                <li className="tag__item play yellow">
                  Pomoć pri kupovini nekretnina za strance
                </li>
                <li className="tag__item play yellow">
                  Nasljeđivanje nekretnina
                </li>
                <li className="tag__item play yellow">
                  Upućivanje zaposlenih na rad u BiH i pomoć pri međukompanijskom kretanju
                </li>
              </ul>
            </Fade>
          </div>
        </article>
      </div>
    </section>
  );
}
