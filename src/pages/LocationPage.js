import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import '../assets/styles/style-pages/location_page.scss';
import SEO from '../components/SEO';

export default function LocationPage() {
  return (
    <Zoom triggerOnce>
      <section className="loc-cont" id="lokacija-mapa">
        <SEO
          title="Advokatska kancelarija | Lokacija | Senad Rašinlić | Sarajevo"
          keywords="advokat kontakt, kontakt advokat, advokati sarajevo, advokatura, najbolji advokati, najbogatiji advokati, zakon ustav bih"
          description="Lokacija, advokat Senad Rašinlić..."
          name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
          type="website"
        />
        <h1>LOKACIJA</h1>
        <div className="loc-wrap">
          <div className="loc-img" />

          <div className="loc-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11507.858785507102!2d18.4090856!3d43.8565604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ca13d716acd6937!2sAdvokat%20Senad%20Ra%C5%A1inli%C4%87!5e0!3m2!1sen!2sba!4v1671481102590!5m2!1sen!2sba"
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Zoom>
  );
}
