import {
  React,
  useEffect,
} from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import PracticePage from './pages/PracticePage';
import ProceduralPage from './pages/ProceduralPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import PrivacyPolicy from './pages/privacy-pages/PrivacyPolicy';
import TermsOfService from './pages/privacy-pages/TermsOfService';
import Faq from './pages/footer-pages/Faq';
import Tariff from './components/Tariff';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import RichTextEditor from './components/RichTextEditor';
import DynamicBlogRenderer from './pages/DynamicBlogRenderer';
import ScrollToTop from './components/ScrollToTop';
import BlogPagination from './components/BlogPagination';

export default function App() {
  const { pathname, hash, key } = useLocation();
  const URL = 'https://advokat-rasinlic.com/api/verify-user-auth';

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    } else { // else scroll to id
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  useEffect(() => {
    fetch(URL, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }).then((res) => res.json())
      .then((resp) => {
        localStorage.setItem('token', resp.token);
      });
  }, [URL]);

  return (
    <>
      <ScrollToTop />
      <HelmetProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/Law-Firm" element={<HomePage />} />
            <Route path="/Law-Firm/o-meni" element={<AboutPage />} />
            <Route path="/Law-Firm/pravne-oblasti" element={<PracticePage />} />
            <Route path="/Law-Firm/pravni-postupci" element={<ProceduralPage />} />
            <Route path="/Law-Firm/kontakt" element={<ContactPage />} />
            <Route path="/Law-Firm/lokacija" element={<LocationPage />} />
            <Route path="/Law-Firm/privatnost-informacija" element={<PrivacyPolicy />} />
            <Route path="/Law-Firm/uvjeti-pružanja-usluge" element={<TermsOfService />} />
            <Route path="/Law-Firm/najčešća-pitanja" element={<Faq />} />
            <Route path="/Law-Firm/tarifa" element={<Tariff />} />
            <Route path="/Law-Firm/blogovi" element={<BlogPagination />} />
            <Route path="/Law-Firm/advokatr-admin-login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/Law-Firm/advokatr-admin-blogs" element={<RichTextEditor />} />
            </Route>
            <Route path="/Law-Firm/:url/:id" element={<DynamicBlogRenderer />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
