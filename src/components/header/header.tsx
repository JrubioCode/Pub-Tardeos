import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

import './header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Manejar el evento de scroll
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setScrolled(true);
      if (currentScrollY > lastScrollY) {
        // Usuario está bajando
        setIsVisible(false);
      } else {
        // Usuario está subiendo
        setIsVisible(true);
      }
    } else {
      setScrolled(false);
      setIsVisible(true); // Siempre visible en la parte superior
    }

    setLastScrollY(currentScrollY);
  };

  // Hook para agregar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, lastScrollY]);

  // Alternar menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header id='top'
        className={`header ${scrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
      >
        {/* Logo */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/assets/logo/logo.png" alt="Logo Chancla" className="logo-image" style={{ cursor: 'pointer' }} />
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ScrollLink to="menu" smooth={true} duration={500} offset={-30} className="nav-link">Carta</ScrollLink>
          <Link to="/eventos" style={{margin: "0 15px", color: "rgb(255, 255, 255)", fontSize: "25px",}}>Eventos</Link>
          <ScrollLink to="reseñas" smooth={true} duration={500} offset={-30} className="nav-link">Reseñas</ScrollLink>
          <ScrollLink to="galeria" smooth={true} duration={500} offset={-30} className="nav-link">Galeria</ScrollLink>
        </nav>

        {/* Botón menú móvil */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Menú móvil */}
        <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          <ScrollLink to="menu" smooth={true} duration={500} offset={-30} className="nav-mobile-link" onClick={closeMenu}>Carta</ScrollLink>
          <Link to="/eventos" style={{margin: "15px 0", color: "black", fontSize: "1.2rem",}} onMouseOver={(e) => (e.currentTarget.style.color = "#D9A441")} onMouseOut={(e) => (e.currentTarget.style.color = "black")}>Eventos</Link>
          <ScrollLink to="reseñas" smooth={true} duration={500} offset={-30} className="nav-mobile-link" onClick={closeMenu}>Reseñas</ScrollLink>
          <ScrollLink to="galeria" smooth={true} duration={500} offset={-30} className="nav-mobile-link" onClick={closeMenu}>Galeria</ScrollLink>
        </nav>
      </header>

      {/* Hero */}
      <div className="hero">
        <h1 className="hero-text">LOS MEJORES TARDEOS DE LA PROVINCIA</h1>
      </div>
    </>
  );
};

export default Header;