import './carta.css';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import menuData from './menuData.json';

// Definir la estructura de un plato
interface Plato {
  nombre: string;
  precio: number | string;
  descripcion: string;
  imagen: string;
  ingredientes?: string[];
  alergenos?: string[];
}

export default function Carta() {
  const [principalesVisible, setPrincipalesVisible] = useState(true);
  const [postresVisible, setPostresVisible] = useState(true);
  const [bebidasVisible, setBebidasVisible] = useState(true);
  const [tapasVisible, setTapasVisible] = useState(true);
  const [coctelesVisible, setCoctelesVisible] = useState(true);
  const [especialidadesVisible, setEspecialidadesVisible] = useState(true);
  const [cafesVisible, setCafesVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Plato | null>(null); // Añadido correctamente

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPrincipalesVisible(false);
        setPostresVisible(false);
        setBebidasVisible(false);
        setTapasVisible(false);
        setCoctelesVisible(false);
        setCafesVisible(false);
        setEspecialidadesVisible(false);
      } else {
        setPrincipalesVisible(true);
        setPostresVisible(true);
        setBebidasVisible(true);
        setTapasVisible(true);
        setCoctelesVisible(true);
        setCafesVisible(true);
        setEspecialidadesVisible(true);
      }
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Element name="menu">
      {/* Modal */}
      {selectedDish && (
        <div className="modal-overlay" onClick={() => setSelectedDish(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedDish.imagen} alt={selectedDish.nombre} className="modal-image" />
            <h2>{selectedDish.nombre}</h2>
            {selectedDish.ingredientes && <p><strong>Ingredientes:</strong> {selectedDish.ingredientes.join(", ")}</p>}
            {selectedDish.alergenos && <p><strong>Alérgenos:</strong> {selectedDish.alergenos.length > 0 ? selectedDish.alergenos.join(", ") : "Ninguno"}</p>}
          </div>
        </div>
      )}

      <div className="menu-container">
        <div className="menu-header">
          <h1>Carta del TARDEO</h1>
        </div>

        {/* Tapas */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setTapasVisible(!tapasVisible)}>
            <h2>Tapas</h2>
            <span className="arrow">{tapasVisible ? '▲' : '▼'}</span>
          </div>
          {tapasVisible && (
            <ul>
              {menuData.filter(plato => ["Patatas Bravas", "Calamares a la Romana", "Gambas al Ajillo"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio}</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Especialidades */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setEspecialidadesVisible(!especialidadesVisible)}>
            <h2>Especialidades</h2>
            <span className="arrow">{especialidadesVisible ? '▲' : '▼'}</span>
          </div>
          {especialidadesVisible && (
            <ul>
              {menuData.filter(plato => ["Cerveza Artesana", "Vino de la Casa", "Whisky especial"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio}</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cafés */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setCafesVisible(!cafesVisible)}>
            <h2>Cafés</h2>
            <span className="arrow">{cafesVisible ? '▲' : '▼'}</span>
          </div>
          {cafesVisible && (
            <ul>
              {menuData.filter(plato => ["Espresso", "Cappuccino", "Americano"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio} €</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bebidas */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setBebidasVisible(!bebidasVisible)}>
            <h2>Bebidas</h2>
            <span className="arrow">{bebidasVisible ? '▲' : '▼'}</span>
          </div>
          {bebidasVisible && (
            <ul>
              {menuData.filter(plato => ["Agua Mineral", "Refrescos", "Zumo Natural"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio} €</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Postres */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setPostresVisible(!postresVisible)}>
            <h2>Postres</h2>
            <span className="arrow">{postresVisible ? '▲' : '▼'}</span>
          </div>
          {postresVisible && (
            <ul>
              {menuData.filter(plato => ["Tarta de Queso", "Helado de Vainilla", "Tiramisú"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio} €</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cócteles */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setCoctelesVisible(!coctelesVisible)}>
            <h2>Cócteles</h2>
            <span className="arrow">{coctelesVisible ? '▲' : '▼'}</span>
          </div>
          {coctelesVisible && (
            <ul>
              {menuData.filter(plato => ["Mojito", "Margarita", "Piña Colada"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio} €</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Platos Principales */}
        <div className="menu-category">
          <div className="category-header" onClick={() => setPrincipalesVisible(!principalesVisible)}>
            <h2>Platos Principales</h2>
            <span className="arrow">{principalesVisible ? '▲' : '▼'}</span>
          </div>
          {principalesVisible && (
            <ul>
              {menuData.filter(plato => ["Filete de Res", "Pollo al Curry", "Paella Valenciana"].includes(plato.nombre)).map((plato, index) => (
                <li key={index}>
                  <div className="menu-item">
                    <div className="menu-text">
                      <strong>{plato.nombre} <span className="price">{plato.precio} €</span></strong>
                      <p>{plato.descripcion}</p>
                    </div>
                    <img src={plato.imagen} alt={plato.nombre} onClick={() => setSelectedDish(plato)} className="menu-image" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </Element>
  );
}