import './informacion.css';

export default function QuienesSomos() {
  return (
    <div>
      
      <header>
        <h1>Quiénes Somos</h1>
      </header>
      <main>
        <section id="introduccion">
          <h2>Nuestra Historia</h2>
          <p>
            En <strong>El Tardeo</strong>, hemos creado un espacio único donde la diversión, la buena música y las mejores tapas se combinan para ofrecer una experiencia inolvidable. Desde nuestros inicios, nuestro objetivo ha sido ser el punto de encuentro perfecto para quienes quieren disfrutar de las tardes con estilo y alegría.
          </p>
        </section>

        <section id="valores">
          <h2>Nuestros Valores</h2>
          <p>
            Creemos en crear momentos especiales a través de:
          </p>
          <ul>
            <li><strong>Calidad:</strong> Ofrecemos productos de primera categoría, desde nuestra selección de bebidas hasta nuestras tapas exclusivas.</li>
            <li><strong>Ambiente:</strong> Un espacio cálido y moderno donde cada tarde se convierte en una celebración.</li>
            <li><strong>Comunidad:</strong> Nos enorgullece ser un lugar donde nuestros clientes se sientan como en casa.</li>
          </ul>
        </section>

        <section id="equipo">
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo de profesionales apasionados por lo que hacen, comprometidos con brindar la mejor atención y servicio. Cada miembro aporta su talento y energía para que cada visita a <strong>El Tardeo</strong> sea especial.
          </p>
        </section>
      </main>
    </div>
  );
}