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
// import Campaign from './components/Campaign';
import { ThemeProvider } from './homepages/ThemeProvider';
import Industry from './pages/Industry';
import IndustryRouter from './pages/industry/IndustryRouter';

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
            title="AdsWise Marketing | Advertising, Branding & Digital Growth"
            description="We help brands grow through creative advertising, digital marketing, social media strategy and high-impact campaigns."
            url="https://www.adswisemarketing.com/"
            image="https://www.adswisemarketing.com/og-image.jpg"
            keywords="digital marketing, SEO, PPC, content marketing, social media marketing"
          />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceRouter />} />
               <Route path="*" element={<Navigate to="/services" replace />} />
             
             <Route path="/industry" element={<Industry />} />

        {/* Dynamic Route for all industries */}
        {/* This captures /industries/real-estate, /industries/manufacturing, etc. */}
        <Route path="/industries/:slug" element={<IndustryRouter />} />
              

            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/campaign" element={<Campaign />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
