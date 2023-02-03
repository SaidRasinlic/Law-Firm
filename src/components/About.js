import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../assets/styles/about.scss';

export default function About() {
  return (
    <section id="about-section">
      <div className="about-wrapper">
        <div className="inner-container">
          <h2>O MENI</h2>
          <Fade triggerOnce duration={1500}><h3>Advokat Senad Rašinlić</h3></Fade>
          <Fade triggerOnce duration={1500}>
            <p className="text">
              {`Advokat je specijaliziran za građanske oblasti koje podrazumijevaju:
             ugovorno (obligaciono) pravo (sve u vezi svih vrsta ugovora),
             sve vrste naknade štete od fizičkih i pravnih lica, rješavanje svih
             imovinskopravnih odnosa (sve povodom nekretnina i međa), porodično pravo
             (razvodi i bračni sporovi, podjela bračnih stečevina, starateljstvo nad djecom),
             nasljednopravni odnosi (ostavinski postupci i sve u vezi nasljeđivanja).`.substring(0, 480)}
              <a
                href="/o-meni#opsirnije"
                className="read-more-btn"
                style={{
                  color: 'chocolate', fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold',
                }}
              >
                ...Pročitaj više
              </a>
            </p>
          </Fade>
          <Fade triggerOnce duration={1500}>
            <div className="skills">
              <span>Profesionalnost</span>
              <span>Stručnost</span>
              <span>Pristupačnost</span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
