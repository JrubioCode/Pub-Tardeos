import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">

      <div className="logo-redes">
        <div className="logo">
          <img src="/assets/logo/logo.png" alt="Logo" />
        </div>
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

      <div className="informacion-terminos">
        <div className="informacion">
          <h3>Información</h3>
          <ul>
            <li><Link to="/quienes-somos" className="link-footer">¿Quiénes somos?</Link></li>
            <li><Link to="/como-colaborar" className="link-footer">¿Cómo colaborar?</Link></li>
            <li><Link to="/contacto" className="link-footer">¿Cómo contactarnos?</Link></li>
          </ul>
        </div>

        <div className="terminos">
          <h3>Terminos</h3>
          <ul className="footer-links">
            <li><Link to="/legal-notice" className="link-footer">Aviso legal</Link></li>
            <li><Link to="/privacy-policy" className="link-footer">Política de Privacidad</Link></li>
            <li><Link to="/cookies-policy" className="link-footer">Política de Cookies</Link></li>
          </ul>
        </div>

        <div className="contacto">
          <h3>Contacto</h3>
          <ul className="footer-links">
            <li><a href="mailto:javi.rubio@gmail.com">javi.rubio@gmail.com</a></li>
            <li><a href="tel:659865940">659865940</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}