import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../assets/images/faculty-of-law.jpg';
import '../assets/styles/quote.scss';

const Quote = () => (
  <>
    <div className="parallax-wrapper">
      <Parallax strength={300} bgImage={bg} bgImageAlt="quote">
        <div className="parallax-content">
          <div className="parallax-text">
            &quot;Ius est ars boni et aequi.&quot;
            <br />
            <i>Pravo je umjetnost dobrog i jednakog.</i>
          </div>
        </div>
      </Parallax>
    </div>
  </>
);

export default Quote;
