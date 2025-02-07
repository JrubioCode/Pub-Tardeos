import { useState } from 'react';
import { Element } from 'react-scroll';
import './galeria.css';

export default function Galeria() {
  const galleryData = [
    {
      year: 2023,
      images: [
        { src: '/assets/galeria/Ambiente1.jpeg', alt: 'Evento 2023 - Interior del pub', caption: 'Fiesta de apertura 2023.' },
        { src: '/assets/galeria/Ambiente2.jpeg', alt: 'Evento 2023 - Ambiente', caption: 'Ambiente vibrante.' },
        { src: '/assets/galeria/Ambiente3.jpeg', alt: 'Evento 2023 - Decoración', caption: 'Decoración especial para el evento.' },
        { src: '/assets/galeria/Ambiente4.jpeg', alt: 'Evento 2023 - Amigos', caption: 'Amigos disfrutando juntos.' },
        { src: '/assets/galeria/Ambiente5.jpeg', alt: 'Evento 2023 - Música en vivo', caption: 'Música en vivo durante el evento.' },
      ],
      description: 'Un año increíble con eventos inolvidables. Ambientación de lujo y la mejor música.'
    },
    {
      year: 2022,
      images: [
        { src: '/assets/galeria/Ambiente5.jpeg', alt: 'Evento 2022 - Música en vivo', caption: 'Concierto inolvidable.' },
        { src: '/assets/galeria/Ambiente4.jpeg', alt: 'Evento 2022 - Decoración', caption: 'Decoración navideña.' },
        { src: '/assets/galeria/Ambiente3.jpeg', alt: 'Evento 2022 - Fiesta temática', caption: 'Fiesta temática con disfraces.' },
        { src: '/assets/galeria/Ambiente2.jpeg', alt: 'Evento 2022 - Ambiente', caption: 'Ambiente festivo en el pub.' },
        { src: '/assets/galeria/Ambiente1.jpeg', alt: 'Evento 2022 - Barra', caption: 'La barra preparada para recibir a los clientes.' },
      ],
      description: 'El año 2022 nos trajo una excelente programación de eventos con un toque especial en la decoración.'
    },
    {
      year: 2021,
      images: [
        { src: '/assets/galeria/Ambiente4.jpeg', alt: 'Evento 2021 - Celebración', caption: 'Fiesta de verano 2021.' },
        { src: '/assets/galeria/Ambiente1.jpeg', alt: 'Evento 2021 - Amigos', caption: 'Reunión de amigos en el pub.' },
        { src: '/assets/galeria/Ambiente5.jpeg', alt: 'Evento 2021 - Tardeo', caption: 'Tardeo con buena música.' },
        { src: '/assets/galeria/Ambiente3.jpeg', alt: 'Evento 2021 - Interior', caption: 'Ambiente relajado dentro del pub.' },
        { src: '/assets/galeria/Ambiente2.jpeg', alt: 'Evento 2021 - Drinks', caption: 'Bebidas y cocteles preparados.' },
      ],
      description: 'En 2021 comenzamos con eventos tranquilos, pero con un ambiente vibrante y único.'
    },
  ];

  const [selectedYear, setSelectedYear] = useState(2023);

  const currentGallery = galleryData.find((entry) => entry.year === selectedYear);

  return (
    <Element name="galeria">
    <div className="gallery-container">
      {/* Encabezado y descripción de la galería */}
      <section className="section-header">
        <h1>Galería de Eventos y Ambientes</h1>
        <div className="linea"></div>
        <p className="section-description">{currentGallery?.description}</p>
      </section>

        {/* Selector de años (debajo de "Descubre Nuestro Local") */}
        <div className="selector-años">
        {galleryData.map((entry) => (
          <button
            key={entry.year}
            onClick={() => setSelectedYear(entry.year)}
            className={entry.year === selectedYear ? 'active' : ''}
          >
            {entry.year}
          </button>
        ))}
      </div>

      {/* Galería de imágenes */}
      <div className="gallery-grid">
        {currentGallery?.images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-caption">{image.caption}</div>
          </div>
        )) || <p>No hay imágenes disponibles para este año.</p>}
      </div>

      {/* Sección Local - Diferenciar ambiente */}
      <section className="local-section">
        <h2>Descubre Nuestro Local</h2>
        <p className="local-description">Conoce el ambiente único y acogedor que tenemos para ti. Ya sea que vengas a un evento o a disfrutar de un buen rato con amigos, siempre tendrás una experiencia inolvidable.</p>
      </section>

      {/* Galería Local */}
      <div className="local-gallery">
        <img src="/assets/galeria/FotoPub1.jpeg" className="local-image" />
        <img src="/assets/galeria/FotoPub2.jpeg" className="local-image" />
        <img src="/assets/galeria/FotoPub3.jpeg" className="local-image" />
        <img src="/assets/galeria/FotoPub4.jpeg" className="local-image" />
      </div>

    </div>
    </Element>
  );
}