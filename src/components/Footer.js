import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.scss';
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import bannerImg from '../assets/images/balance.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner"><img src={bannerImg} alt="Balance Snapshot" /></div>
      <div className="footer-wrapper">
        <div className="container">
          <div className="rowy">
            <div className="footer-col">
              <h4>
                Advokatska kancelarija
                Senad Rašinlić
              </h4>
              <ul className="nav-items">
                <li><Link to="/o-meni#opsirnije">&gt; O meni</Link></li>
                <li><Link to="#moje-usluge">&gt; Moje usluge</Link></li>
                <li><Link to="/privatnost-informacija#privatnost">&gt; Privatnost informacija</Link></li>
                <li><Link to="/uvjeti-pružanja-usluge#uvjeti-web">&gt; Uvjeti pružanja usluge</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Navigacija</h4>
              <ul className="nav-items">
                <li><Link to="/tarifa#tarifa-info">&gt; Tarifa</Link></li>
                <li><Link to="/najčešća-pitanja#faq">&gt; Česta pitanja</Link></li>
                <li><Link to="/pravne-oblasti#lista-oblasti">&gt; Oblasti</Link></li>
                <li><Link to="/pravni-postupci#lista-postupaka">&gt; Postupci</Link></li>

              </ul>
            </div>
            <div className="footer-col">
              <h4>Informacije</h4>
              <ul className="nav-items">
                <li className="contact-li">
                  <a href="https://goo.gl/maps/FcNTP8pMwJKCTmts9" target="_blank" rel="noreferrer" className="contact-a flex-center-a">
                    <MdLocationOn className="footer-icon" />
                    <i className="footer-info-i">Dolina broj 2, Sarajevo 71000</i>
                  </a>
                </li>
                <li className="contact-li">
                  <span className="footer-span contact-a flex-center-a">
                    <AiFillPhone className="footer-icon" />
                    <i className="footer-info-i">+387 (0) 61 563 516</i>
                  </span>
                </li>

                <li className="contact-li">
                  <a href="mailto:info@advokat-rasinlic.com" className="contact-a flex-center-a">
                    <MdEmail className="footer-icon" />
                    <i className="footer-info-i">info@advokat-rasinlic.com</i>
                  </a>
                </li>
                <div className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=100077128670640" target="_blank" rel="noreferrer" aria-label="link"><BsFacebook className="fab fa-facebook" /></a>
                </div>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Radno vrijeme</h4>

              <ul className="nav-items">
                <li><span className="footer-span">Pon-Pet: 09:00-17:00</span></li>
                <li><span className="footer-span">Sub-Ned: Zatvoreno</span></li>
              </ul>

            </div>
          </div>
        </div>
        <i className="copyright-alert">Sva prava zadržana &copy; 2023 | Advokat Senad Rašinlić</i>
      </div>
    </footer>
  );
}
