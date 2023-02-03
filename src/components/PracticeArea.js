import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import '../assets/styles/practice_area.scss';
import ReadMoreOrLess from './ReadMoreOrLess';
import cardImg1 from '../assets/images/card-img-1.png';
import cardImg2 from '../assets/images/card-img-2.jpg';
import cardImg3 from '../assets/images/card-img-3.jpg';
import cardImg4 from '../assets/images/card-img-4.jpg';
import cardImg5 from '../assets/images/card-img-5.jpg';
import cardImg6 from '../assets/images/card-img-6.jpg';

export default function PracticeArea() {
  return (

    <section className="practice-area-section" id="moje-usluge">
      <h2 className="heading-2">USLUGE</h2>
      <Zoom triggerOnce delay={300} duration={1500}>
        <div className="cards">
          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg1} alt="imovinskopravni odnosi" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">STVARNO PRAVO I IMOVINSKOPRAVNI ODNOSI</h3>
              <ReadMoreOrLess limit={56}>
                Imovinsko pravo je oblast prava koja uređuje različite oblike vlasništva nad
                nekretninama (zemljištem) i ličnom svojinom.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#imovinsko-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>

          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg2} alt="obigaciono pravo" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">OBLIGACIONO PRAVO</h3>
              <ReadMoreOrLess limit={56}>
                Obligaciono pravo je grana privatnog prava koja uređuje
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#obligaciono-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>

          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg3} alt="porodicno pravo" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">PORODIČNO I NASLJEDNO PRAVO</h3>
              <ReadMoreOrLess limit={56}>
                Porodično pravo je grana prava koja se bavi uređenjem porodičnih odnosa koji
                nastaju između bračnih i vanbračnih drugova,
                između roditelja i djece i drugih srodnika po krvi i usvojenju,
                te odnosa starateljstva.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#porodicno-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>

          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg4} alt="privredno pravo" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">PRIVREDNO PRAVO</h3>
              <ReadMoreOrLess limit={56}>
                Upravni postupak je pravno uređen način rada svih tijela uprave
                pri rješavanju upravnih stvari
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#privredno-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>

          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg5} alt="radno pravo" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">RADNO PRAVO</h3>
              <ReadMoreOrLess limit={56}>
                Radno pravo je grana prava koja se bavi izuzetno osjetljivim socijalnim pitanjima
                neodvojivim od ekonomskih interesa svih učesnika ne samo radnih već ukupnih
                društveno-ekonomskih odnosa jedne države, a ponekad i šire.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#radno-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>

          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg6} alt="upravni postupak i upravni spor" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">IMIGRACIONO PRAVO I PRAVA STRANACA</h3>
              <ReadMoreOrLess limit={56}>
                Zastupanje u svim upravnim postupcima koji se vode pred
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#imigraciono-pravo" className="card-button">OPŠIRNIJE</a>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}
