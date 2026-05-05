
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* Columna 1: Logo y Descripción */}
        <div className={styles.footerColumn}>
          <div className={styles.footerLogoSection}>
            <div className={styles.footerLogoCircle}>
              🎓
            </div>
            <h2 className={styles.footerTitle}>UNAM Estudia</h2>
          </div>
          <p className={styles.footerDescription}>
            Plataforma integral para estudiantes de la UNAM que facilita la organización académica y el aprendizaje colaborativo.
          </p>
        </div>

        {/* Columna 2: Funcionalidades */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Funcionalidades</h3>
          <ul className={styles.footerList}>
            <li><Link href="/">Calendario de Actividades</Link></li>
            <li><Link href="/">Tutores Certificados</Link></li>
            <li><Link href="/">Trabajo en Equipo</Link></li>
            <li><Link href="/">Asesorías Académicas</Link></li>
          </ul>
        </div>

        {/* Columna 3: Recursos */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Recursos</h3>
          <ul className={styles.footerList}>
            <li><Link href="/">Servicio Social</Link></li>
            <li><Link href="/">Guía de Uso</Link></li>
            <li><Link href="/">Preguntas Frecuentes</Link></li>
            <li><Link href="/">Soporte</Link></li>
          </ul>
        </div>

        {/* Columna 4: Contacto y Redes */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Contacto</h3>
          <ul className={`${styles.footerList} ${styles.contactInfo}`}>
            <li><span className={styles.icon}>✉</span> contacto@unamestudia.com</li>
            <li><span className={styles.icon}>📞</span> 55 5622 1234</li>
            <li><span className={styles.icon}>📍</span> Facultad de Estudios Superiores Acátlan, Naucalpan EDOMEX</li>
          </ul>
          
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>f</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>X</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>i</a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className={styles.footerBottom}>
        <p> HECHO EN FES-A 💙💛</p>
        <p>© 2025 UNAM Estudia. Todos los derechos reservados. | Powered by Readdy</p>
      </div>
    </footer>
  );
};

export default Footer;