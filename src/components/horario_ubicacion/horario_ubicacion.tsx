import "./horario_ubicacion.css";

export default function horario_ubicacion() {
  return (
    <div className="horario_ubicacion">

      <div className="redes-sociales">
        <h2>Más información</h2>
        <div className="redes">
          <a href="https://facebook.com" target="_blank">
              <img src="/assets/redes/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="/assets/redes/instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="/assets/redes/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.google.com/maps/place/Merendero/@38.989341,-3.381912,17z/data=!4m6!3m5!1s0xd6915d06fc940a3:0x55f294187aa2e7b!8m2!3d38.9885859!4d-3.3809724!16s%2Fg%2F11rw6dd2m4?hl=es&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <img src="/assets/redes/Ubicacion.png" alt="Twitter" />
            </a>
        </div>
      </div>

      <div className="horario">
        <h2>Horario</h2>
        <div className="horario-normal">
          <h3>Horario Normal</h3>
          <p>Lunes a viernes de 13:00 a 00:00</p>
          <p>Sábados de 12:00 a 23:00</p>
          <p>Domingos de 15:00 a 22:00</p>
          <p>Festivos cerrado</p>
        </div>
        <div className="horario-verano">
          <h3>Horario de Verano</h3>
          <p>Lunes a viernes de 13:00 a 04:00</p>
          <p>Sábados y domingos de 12:00 a 5:30</p>
          <p>Festivos horario especial</p>
        </div>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.1380865853316!2d-3.3844868236255974!3d38.98934474127282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6914597e4202ff%3A0x67f934bd67e78c0!2sCentro%20de%20Educaci%C3%B3n%20EFA%20Moratalaz!5e0!3m2!1ses!2ses!4v1736927600013!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}
