import { Link } from "react-router-dom";
import styles from "./Footer.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.brandLogo}>
            <Link to="/"><b>Detu</b>dev.</Link>
          </div>
          <div className={styles.company}>
            <p className={styles.title}>Compañía</p>
            <Link to="/about-us">Quienes somos</Link>
            <Link to="/policy-and-privacy">Politicas y Privacidad</Link>
            <Link to="/terms-and-conditions">Terminos y Condiciones</Link>
            <Link to="/faqs">Preguntas frecuentes</Link>
          </div>
          <div className={styles.language}>
            <button className={styles.btnLang}>
              <i className="fa fa-globe"></i>
              <span>Español</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Detudev.</p>
      </div>
    </footer>
  )
}

export default Footer