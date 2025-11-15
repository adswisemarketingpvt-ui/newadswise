import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import SEO from './components/SEO';
import AboutUs from './components/AboutUs';
import ServicesPage from './pages/ServicesPage';
import ServiceRouter from './pages/services/ServiceRouter';
import { Navigate } from 'react-router-dom';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <SEO
          title="Adswise Marketing - Digital Marketing Solutions"
          description="Transform your digital presence with data-driven marketing strategies. SEO, PPC, Content Marketing, Social Media, and more."
          keywords="digital marketing, SEO, PPC, content marketing, social media marketing"
        />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceRouter />} />
               <Route path="*" element={<Navigate to="/services" replace />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
