import './informacion.css';

export default function Contacto() {
  return (
    <div>
      
      <header>
        <h1>Contacto</h1>
      </header>
      <main>
        <section id="informacion-contacto">
          <h2>Información de Contacto</h2>
          <p>
            Estamos aquí para ayudarte con cualquier duda, consulta o reserva que desees realizar. Puedes contactarnos a través de los siguientes canales:
          </p>
          <ul>
            <li><strong>Teléfono:</strong> [Número de contacto]</li>
            <li><strong>Correo Electrónico:</strong> [Email del pub]</li>
            <li><strong>Dirección:</strong> [Dirección completa del pub]</li>
            <li><strong>Redes Sociales:</strong> Síguenos en nuestras redes sociales para estar al día de nuestras novedades y eventos.</li>
          </ul>
        </section>

        <section id="formulario-contacto">
          <h2>Formulario de Contacto</h2>
          <p>
            También puedes escribirnos directamente a través de nuestro formulario de contacto. Solo necesitas incluir tu nombre, correo electrónico y tu mensaje, y nos pondremos en contacto contigo lo antes posible.
          </p>
        </section>

        <section id="horarios">
          <h2>Horarios de Atención</h2>
          <p>
            Nuestro equipo está disponible para atenderte en los siguientes horarios:
          </p>
          <ul>
            <li><strong>Lunes a Viernes:</strong> 16:00 - 23:00</li>
            <li><strong>Sábados y Domingos:</strong> 12:00 - 00:00</li>
          </ul>
          <p>
            ¡Te esperamos en <strong>El Tardeo</strong> para compartir momentos únicos!
          </p>
        </section>
      </main>
    </div>
  );
}