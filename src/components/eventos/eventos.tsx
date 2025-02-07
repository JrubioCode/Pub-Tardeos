import './eventos.css';

export default function Eventos() {
  return (
    <div className="eventos-container">
      {/* Próximo evento */}
      <section className="proximo-evento">
        <h2 className='titulo-evento'>Próximo Evento</h2>
        <div className="evento-card">
          <img 
            src="/assets/evento/EventoRetro.jpeg" 
            alt="Fiesta Retro 80's" 
            className="evento-img"
          />
          <div className="evento-info">
            <h3>Fiesta Retro 80's</h3>
            <p>Fecha: 27 de enero, 2025</p>
            <p>Hora: 18:00 - 23:00</p>
            <p>
              Prepárate para una noche inolvidable con la mejor música de los años 80's,
              luces de neón, y un ambiente único. ¡No te lo pierdas!
            </p>
          </div>
        </div>
      </section>

      {/* Último evento */}
      <section className="ultimo-evento">
        <h2>Último Evento</h2>
        <div className="evento-card">
          <img 
            src="/assets/evento/EventoCervezas.jpeg" 
            alt="Cata de Cervezas Artesanales" 
            className="evento-img"
          />
          <div className="evento-info">
            <h3>Cata de Cervezas Artesanales</h3>
            <p>Fecha: 20 de enero, 2025</p>
            <p>
              Una experiencia única con más de 20 cervezas artesanales diferentes, 
              expertos cerveceros y una increíble banda en vivo. ¡Gracias a todos los que asistieron!
            </p>
          </div>
        </div>
      </section>

      {/* Futuros eventos */}
      <section className="futuros-eventos">
        <h2>Futuros Eventos</h2>
        <div className="eventos-lista">
          <div className="evento-card">
            <img 
              src="/assets/evento/EventoKaraoke.jpeg" 
              alt="Karaoke Night" 
              className="evento-img"
            />
            <div className="evento-info">
              <h3>Karaoke Night</h3>
              <p>Fecha: 3 de febrero, 2025</p>
              <p>
                Demuestra tu talento (o falta de él) en una noche de karaoke llena de risas y buena vibra. 
                ¡Habrá premios para los mejores cantantes!
              </p>
            </div>
          </div>
          <div className="evento-card">
            <img 
              src="/assets/evento/EventoMascaras.jpeg" 
              alt="Fiesta de Máscaras" 
              className="evento-img"
            />
            <div className="evento-info">
              <h3>Fiesta de Máscaras</h3>
              <p>Fecha: 10 de febrero, 2025</p>
              <p>
                Una noche de misterio y diversión. Ven con tu máscara favorita y participa en nuestro concurso 
                para ganar increíbles premios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Futuras promociones */}
      <section className="futuros-eventos">
        <h2>Futuras Promociones</h2>
        <div className="eventos-lista">
          <div className="evento-card">
            <img 
              src="/assets/evento/EventoTacos.jpeg" 
              alt="Promoción de Tacos" 
              className="evento-img"
            />
            <div className="evento-info">
              <h3>Promoción de Tacos</h3>
              <p>Fecha: Todos los miércoles</p>
              <p>
                ¡No te pierdas nuestra noche especial de tacos! Todos los tacos a mitad de precio durante toda la noche. 
                Disfruta de los sabores más auténticos.
              </p>
            </div>
          </div>
          <div className="evento-card">
            <img 
              src="/assets/evento/EventoCocteles.jpeg" 
              alt="Happy Hour" 
              className="evento-img"
            />
            <div className="evento-info">
              <h3>Happy Hour</h3>
              <p>Fecha: Todos los viernes</p>
              <p>
                Ven a disfrutar de 2x1 en cócteles y cervezas especiales de 18:00 a 20:00. 
                El momento perfecto para comenzar tu fin de semana.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}