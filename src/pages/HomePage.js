import React from 'react';
import About from '../components/About';
import PracticeArea from '../components/PracticeArea';
import Contact from '../components/Contact';
import Quote from '../components/Quote';
import SEO from '../components/SEO';
import Blogs from '../components/Blogs';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Advokat Senad Rašinlić | Advokatska Kancelarija | Advokatura"
        description="Advokatska kancelarija (Rašinlić) se bavi zastupanjem domaćih i stranih fizičkih i pravnih lica pred sudovima i organima uprave Bosne i Hercegovine u oblastima građanskog, privrednog, upravnog i krivičnog prava."
        keywords="advokat prnjavorac, omar mjesečar, advokati sarajevo, sarajevo advokat, advokat, sud fbih, kantonalno tužilaštvo, pravo, advokatura, advokat, bih, rs, tužilaštvo, pravne oblasti"
        name="Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija"
        type="website"
      />
      <About />
      <Quote />
      <PracticeArea />
      <Contact />
      <Blogs />
    </>
  );
}
