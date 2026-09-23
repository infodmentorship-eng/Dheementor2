import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ApostilleAttestation } from "./pages/ApostilleAttestation";
import { Contact } from "./pages/Contact";
import { DocumentTranslation } from "./pages/DocumentTranslation";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Services } from "./pages/Services";
import { StudyAbroad } from "./pages/StudyAbroad";
import { VisaAssistance } from "./pages/VisaAssistance";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // wait a tick for the route's content to mount before measuring position
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      <div className="noise-overlay" />
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/visa-assistance" element={<VisaAssistance />} />
          <Route path="/services/apostille-attestation" element={<ApostilleAttestation />} />
          <Route path="/services/document-translation" element={<DocumentTranslation />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
