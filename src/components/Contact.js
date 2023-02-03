import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { AttentionSeeker } from 'react-awesome-reveal';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/contact.scss';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

export default function Contact() {
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
    <section id="contact-section">
      <h2>Imate pitanja? Pošaljite e-mail</h2>
      <AttentionSeeker delay={300} triggerOnce>
        <Tabs id="tabs" selectedTabClassName="active-tab">
          <TabList>
            <Tab><h5 className="header-h5">KONTAKT</h5></Tab>
            <Tab><h5 className="header-h5">LOKACIJA</h5></Tab>
          </TabList>
          <TabPanel className="tab-panel">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="row">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Ime i prezime"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                className="form-control full"
                placeholder="Naslov"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                required
              />
              <textarea
                name="message"
                rows="3"
                className="form-control full"
                id="contact-message"
                placeholder="Poruka"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button type="submit" className="form-control control-btn">Pošalji</button>
              <ToastContainer />
            </form>
          </TabPanel>
          <TabPanel className="tab-panel">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11507.858785507102!2d18.4090856!3d43.8565604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ca13d716acd6937!2sAdvokat%20Senad%20Ra%C5%A1inli%C4%87!5e0!3m2!1sen!2sba!4v1671481102590!5m2!1sen!2sba"
                title="Google Maps"
                width="100%"
                height="375"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </TabPanel>
        </Tabs>
      </AttentionSeeker>
    </section>
  );
}
