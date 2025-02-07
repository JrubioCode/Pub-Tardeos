import { useState, useEffect } from 'react';
import './cookieBanner.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
    if (cookiesAceptadas === 'true') {
      setVisible(false);
    }
  }, []);

  const aceptarCookies = () => {
    setVisible(false);
    localStorage.setItem('cookiesAceptadas', 'true');

    // Guardar la ubicación del usuario
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationCookie = `userLocation=${latitude},${longitude}; path=/; max-age=604800;`; // Expira en 7 días
          document.cookie = locationCookie;
          console.log('Ubicación almacenada como cookie:', locationCookie);
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error.message);
        }
      );
    } else {
      console.warn('La geolocalización no está soportada por este navegador.');
    }

    // Guardar el idioma preferido del usuario
    const idiomaPreferido = navigator.language || 'es';
    const idiomaCookie = `idiomaPreferido=${idiomaPreferido}; path=/; max-age=max-age=604800;`; // Expira en 7 días
    document.cookie = idiomaCookie;

    // Guardar el tema del usuario (oscuro o claro)
    const temaOsucro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaUsuario = temaOsucro ? 'dark' : 'light';
    const themeCookie = `temaUsuario=${temaUsuario}; path=/; max-age=max-age=604800;`; // Expira en 7 días
    document.cookie = themeCookie;
  };

  const rechazarCookies = () => {
    setVisible(false);
    localStorage.setItem('cookiesAceptadas', 'false');
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <h2>EN ESTE SITIO UTILIZAMOS COOKIES</h2>
      <p className="cookie-text">
        Te informamos que el presente sitio web utiliza cookies propias y de terceros con las siguientes finalidades:
        Técnicas que permiten el buen funcionamiento de la web y ofrecerte una experiencia personalizada. De personalización,
        que si lo autorizas, recordarán tus preferencias en el sitio web. Estadísticas, que si lo autorizas, analizarán
        tu visita al sitio web con fines estadísticos. Puedes aceptar el uso de todas las cookies pulsando el botón ACEPTAR y para rechazar
        todas las cookies opcionales puede pulsar el botón RECHAZAR.
      </p>
      <div className="cookie-buttons">
        <button className="cookie-button aceptar" onClick={aceptarCookies}>Aceptar</button>
        <button className="cookie-button rechazar" onClick={rechazarCookies}>Rechazar</button>
      </div>
    </div>
  );
};

export default CookieBanner;