import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Zoom } from 'react-awesome-reveal';
import { AiFillPhone, AiOutlineGlobal } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import '../assets/styles/new_form.scss';
import SEO from './SEO';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9ogbfb4',
      'template_5h2n3mg',
      form.current,
      'PDMh0hm3n7vaRzhYf',
    )
      .then(() => {
        toast.success('Uspješno ste poslali email. Očekujte odgovor u narednih 24h.', {
          position: toast.POSITION.TOP_CENTER,
        });
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      });
  };

  return (
    <Zoom triggerOnce>
      <div className="container-form" id="kontakt-forma">
        <SEO
          title="Advokatska kancelarija | Kontakt | Senad Rašinlić | Sarajevo"
          keywords="kontakt advokat, advokati sarajevo, advokatura, najbolji advokati, najbogatiji advokati, zakon ustav bih"
          description="Kontakt informacije, advokat Senad Rašinlić..."
          name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
          type="website"
        />
        <h1 className="brand">KONTAKT FORMA</h1>
        <div className="wrapper">
          <div className="company-info">
            <h3 className="new-form-h3">Informacije</h3>
            <ul>
              <li>
                <p className="form-col-one"><span><MdLocationOn /></span></p>
                <p className="form-col-two">
                  <i>Adresa: </i>
                  Dolina broj 2, Sarajevo
                </p>
              </li>
              <li>
                <p className="form-col-one"><span><AiFillPhone /></span></p>
                <p className="form-col-two">
                  <i>Mobitel: </i>
                  +387 (0) 61 563 516
                </p>
              </li>
              <li>
                <p className="form-col-one"><span><MdEmail /></span></p>
                <p className="form-col-two">
                  <i>Email: </i>
                  <a className="new-form-href" href="mailto:rasinlic.senad@gmail.com">
                    rasinlic.senad@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="form-col-one"><span><AiOutlineGlobal /></span></p>
                <p className="form-col-two">
                  <i>Web: </i>
                  <a className="new-form-href" href="www.advokat-rasinlic.com">www.advokat-rasinlic.com</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3 className="new-form-h3">Pošaljite email</h3>
            <form ref={form} onSubmit={sendEmail}>
              <p>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Ime i prezime"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </p>
              <p>
                <input
                  type="email"
                  name="user_email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </p>
              <p className="full">
                <input
                  type="text"
                  name="subject"
                  placeholder="Naslov"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  required
                />
              </p>
              <p className="full">
                <textarea
                  name="message"
                  rows="5"
                  id="contact-message"
                  placeholder="Poruka"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </p>
              <p className="full-flex-center">
                <button type="submit" className="control-btn">Pošalji</button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
