import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import './reseñas.css';

export default function Reseñas() {
  const { ref: reseñaRef, inView: reseñaEnVista } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const reseñas = [
    {
      id: 1,
      nombre: "María García",
      fecha: "15 Marzo 2024",
      comentario:
        "¡Increíble ambiente y mejor comida! El servicio es excepcional y los cócteles son una delicia. Definitivamente mi lugar favorito para el tardeo.",
      estrellas: "★★★★★",
      img: "/assets/reseñas/Maria.jpeg",
    },
    {
      id: 2,
      nombre: "Juan Pérez",
      fecha: "10 Marzo 2024",
      comentario:
        "La mejor experiencia gastronómica que he tenido. Las tapas son espectaculares y el ambiente es perfecto para cualquier ocasión. ¡Volveré sin duda!",
      estrellas: "★★★★★",
      img: "/assets/reseñas/Juan.jpeg",
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      fecha: "5 Marzo 2024",
      comentario:
        "Un lugar con muchísimo encanto. La atención es excepcional y la calidad de la comida es superior. Los postres son una auténtica delicia.",
      estrellas: "★★★★★",
      img: "/assets/reseñas/Ana.jpeg",
    },
  ];

  return (
    <Element name="reseñas">
      <div className="reseñas-container">
        <h2>Opiniones de nuestros clientes</h2>

        <div
          ref={reseñaRef}
          className={`reseñas ${reseñaEnVista ? "visible" : "noVisible"}`}
        >
          {reseñas.map((reseña, index) => (
            <div
              key={reseña.id}
              className="reseña"
              style={{
                transitionDelay: `${index * 0.2}s`, // Cada reseña se retrasa un poco más
              }}
            >
              <div className="reseña-header">
                <img
                  src={reseña.img}
                  alt={`Cliente ${reseña.id}`}
                  className="perfil-img"
                />
                <div className="reseña-info">
                  <h3>{reseña.nombre}</h3>
                  <div className="estrellas">{reseña.estrellas}</div>
                  <span className="fecha">{reseña.fecha}</span>
                </div>
              </div>
              <p className="comentario">{reseña.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}