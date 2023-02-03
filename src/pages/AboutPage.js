import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/about_page.scss';

export default function AboutPage() {
  return (
    <section className="about-page-section" id="opsirnije">
      <SEO
        title="Advokatska kancelarija | O advokatu Senad Rašinlić | Advokat"
        name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
        description="Advokat Senad Rašinlić je diplomirao na Pravnom fakultetu Univerziteta u Sarajevu,  nakon čega je i magistrirao na istoimenom fakultetu na katedri za Građansko..."
        keywords="Advokati Sarajevo, advokat, advokatska kancelarija, Rašinlić, kantonalno tužilaštvo, sud bih, prnjavorac, mjesečar"
        type="website"
      />
      <h1>VIŠE O ADVOKATU</h1>

      <div id="about-page-wrapper">
        <div id="about-page-text">
          <Fade triggerOnce cascade damping={0.2}>
            <p>
              Advokat Senad Rašinlić je diplomirao na Pravnom fakultetu Univerziteta
              u Sarajevu,  nakon čega je i magistrirao na istoimenom fakultetu na
              katedri za Građansko pravo. Pripravnički staž je obavljao u advokatskoj
              kancelariji sa dugogodišnjim iskustvom, u svojstvu advokatskog pripravnika.
              Višegodišnjim radom u advokatskoj kancelariji, stiče bogato i raznovrsno
              iskustvo iz svih oblasti našeg pravnog sistema.
            </p>
            <p>
              Položio je pravosudni
              ispit pred Komisijom za polaganje pravosudnog ispita Ministarstva pravde
              BiH, a nakon toga i advokatski ispit pred Komisijom za polaganje advokatskih
              ispita Advokatske komore FBiH. Početkom 2021.g. upisuje se u Imenik advokata
              Advokatske komore FBiH, te osniva samostalnu advokatsku kancelariju kroz koju
              započinje privatnu praksu.
            </p>
            <p>
              Dakle, radi se o mladoj, dinamičnoj i stručnoj advokatskoj kancelariji,
              koja svoj rad temelji na kvalitetnom, profesionalnom i temeljitom pristupu
              svakom pojedinačnom klijentu i njegovim potrebama, nastojeći da sve njihove
              pravne probleme prije svega prepozna, spriječi, a zatim i riješi na što
              ekonomičniji i efikasniji način.
            </p>
            <p>
              Tokom trajanja pravnih postupaka advokat je na stalnom raspolaganju da Vas
              informiše o toku postupka i stanju Vašeg predmeta, predlažući konkretna rješenja
              i dalje korake.
              Temeljena načela kojima se, u svom zastupanju, ova advokatska kancelarija
              vodi su savjesnost i poštenje, etičnost, profesionalnost i pristupačnost,
              u konačnici sva objedinjena kroz konstantan i naporan rad.
            </p>
            <p>
              Advokat je specijaliziran za građanske oblasti koje podrazumijevaju:
              ugovorno (obligaciono) pravo (sve u vezi svih vrsta ugovora),
              sve vrste naknade štete od fizičkih i pravnih lica, rješavanje svih
              imovinskopravnih odnosa (sve povodom nekretnina i međa), porodično pravo
              (razvodi i bračni sporovi, podjela bračnih stečevina, starateljstvo nad djecom),
              nasljednopravni odnosi (ostavinski postupci i sve u vezi nasljeđivanja).
              Osim navedenog, ova advokatska kancelarija Vas sa velikim uspjehom zastupa
              i u Vašim potrebama iz privrednog prava (registracijama privrednih društava,
              privredni sporovi, stečaj i likvidacija, konsalting), radnim sporovima
              i potraživanjima iz radnih odnosa (neisplaćene plate i druga primanja,
              povrat na posao, odnosno otkazi ugovora o radu, ukoliko se zastupa pravno lice)
              i svim vrstama prekršajnih i upravnih postupaka (ishođenje građevinskih
              i urbanističkih saglasnosti, legalizacije bespravno izgrađenih objekata,
              ishođenje boravišnih i radnih dozvola i sl.) kao i u disciplinskim postupcima.
            </p>
            <p>
              Ukratko, advokatska kancelarija se bavi zastupanjem domaćih i stranih fizičkih
              i pravnih lica pred sudovima i organima uprave Bosne i Hercegovine u oblastima
              građanskog, privrednog, upravnog i krivičnog prava.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
