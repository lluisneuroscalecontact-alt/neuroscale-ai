import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gracias from './pages/Gracias';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppDemo from './pages/WhatsAppDemo';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-inter">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <main>
                  <Hero />
                  <SocialProof />
                  <Services />
                  <HowItWorks />
                  <Results />
                  <Pricing />
                  <CTA />
                  <FAQ />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact"            element={<Contact />} />
          <Route path="/case-studies"       element={<CaseStudies />} />
          <Route path="/gracias"            element={<Gracias />} />
          <Route path="/whatsapp-demo"      element={<WhatsAppDemo />} />
          <Route path="/demo"               element={<WhatsAppDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;