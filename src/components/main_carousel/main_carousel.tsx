import { useState, useEffect } from "react";
import {useInView} from "react-intersection-observer";
import "./main_carousel.css";

export default function MainCarousel() {
  const slides = [
    "/assets/carrusel/imagen_carr1.jpeg",
    "/assets/carrusel/imagen_carr2.jpeg",
    "/assets/carrusel/imagen_carr4.jpeg",
    "/assets/carrusel/imagen_carr5.jpeg",
    "/assets/carrusel/imagen_carr6.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambia automáticamente de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  const {ref:carouselRef, inView:tituloEnVista} = useInView({
    triggerOnce : true,
    threshold : 0.5,
  });

  return (
    <div ref={carouselRef} className={`carousel  ${tituloEnVista ? "visible" : "noVisible"}`}>
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}