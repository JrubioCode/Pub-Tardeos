import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilo general
import './index.css';

// Componentes secundarios
import ScrollToTop from './components/scrollToTop/scrollToTop.tsx';

// Componentes principales
import CookieBanner from './components/cookieBanner/cookieBanner.tsx';
import Promocion from './components/promocion/promocion.tsx';
import Header from './components/header/header.tsx';
import Carrusel from './components/main_carousel/main_carousel.tsx';
import Carta from './components/carta/carta.tsx';
import Horario_Ubicacion from './components/horario_ubicacion/horario_ubicacion.tsx';
import Reseñas from './components/reseñas/reseñas.tsx';
import Galeria from './components/galeria/galeria.tsx';
import Footer from './components/footer/footer.tsx';

// Eventos y futuras promociones
import Eventos from './components/eventos/eventos.tsx';

// Textos legales
import AvisoLegal from './components/textos-legales/LegalNotice.tsx';
import PoliticasPrivacidad from './components/textos-legales/PrivacyPolicy.tsx';
import PoliticasCookies from './components/textos-legales/CookiesPolicy.tsx';

// Información
import QuienesSomos from './components/informacion/QuienesSomos.tsx';
import ComoColaborar from './components/informacion/ComoColaborar.tsx';
import Contacto from './components/informacion/Contacto.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const Preloader: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si el dispositivo es móvil
  useEffect(() => {
    const versionMovil = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Comprobación inicial
    versionMovil();
    // Escuchamos el evento resize para actualizar en tiempo real
    window.addEventListener('resize', versionMovil);
    return () => window.removeEventListener('resize', versionMovil);
  }, []);

  // Retrasar la aparición del logo 3 segundos
  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => clearTimeout(logoTimeout);
  }, []);

  return (
    <div className="preloader">
      {isMobile ? (
        // En móvil se muestra un GIF a pantalla completa
        <img 
          src="/gifs/PreloaderCerveza.gif" 
          alt="Preloader gif" 
          className="preloader-gif" 
        />
      ) : (
        // En dispositivos de escritorio se muestra el video
        <video className="preloader-video" autoPlay muted>
          <source src="/videos/PreloaderCerveza.mp4" type="video/mp4" />
        </video>
      )}
      {showLogo && (
        <div className="logo-container">
          <img src="/assets/logo/logo.png" className="logo_preloader" alt="Logo" />
          <h1 className="preloader-title">EL TARDEO</h1>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const Home: React.FC = () => (
  <>
    <Promocion />
    <Header />
    <Carrusel />
    <Carta />
    <Reseñas />
    <Horario_Ubicacion />
    <Galeria />
    <Footer />
    <CookieBanner />
  </>
);

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StrictMode>
      {isLoading && <Preloader />}
      {!isLoading && (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/legal-notice" element={<AvisoLegal />} />
            <Route path="/privacy-policy" element={<PoliticasPrivacidad />} />
            <Route path="/cookies-policy" element={<PoliticasCookies />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/como-colaborar" element={<ComoColaborar />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);