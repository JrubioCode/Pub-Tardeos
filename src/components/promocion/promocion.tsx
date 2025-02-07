import { useState, useEffect } from 'react';
import './promocion.css';

export default function Promocion() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {

    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

    if (cookiesAceptadas !== 'true') {
      // Mostrar el modal si las cookies NO fueron aceptadas
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClose = () => setIsVisible(false);
  const toggleFlip = () => setIsFlipped(!isFlipped);

  if (!isVisible) return null; // Si no es visible, no renderiza nada

  return (
    <div className="modal-overlay-promo" onClick={handleClose}>
      <div
        className={`modal-content-promo ${isFlipped ? 'flipped' : ''}`}
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >
        <div className="modal-front-promo">
          <h2>PRÓXIMA PROMOCIÓN</h2>
          <img
            src="/assets/evento/EventoDardos.jpeg"
            alt="Promoción"
            className="promo-image"
          />
          <button onClick={toggleFlip}>Ver más información</button>
        </div>
        <div className="modal-back">
          <h3>Información de la promoción</h3>
          <p className='promo-descripcion'>
            ¡No te pierdas nuestra promoción con descuentos especiales para nuevos clientes,
            tardeo especial con cócteles, cervezas especiales y mucho más 🍻🍺!!
          </p>
          <p>📅 Fecha: 25 de enero, 2025</p>
          <p>🕒 Hora: 12:00 - 22:00</p>
          <p>📍 Lugar: Tu pub favorito</p>
          <button onClick={toggleFlip}>Volver al cartel</button>
        </div>
      </div>
    </div>
  );
}