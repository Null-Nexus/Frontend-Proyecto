import styles from './header.module.css';
 
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#1D9E75" strokeWidth="2" fill="none"/>
            <ellipse cx="16" cy="16" rx="6" ry="15" stroke="#1D9E75" strokeWidth="1.5" fill="none"/>
            <line x1="1" y1="16" x2="31" y2="16" stroke="#1D9E75" strokeWidth="1.5"/>
            <line x1="3" y1="9" x2="29" y2="9" stroke="#1D9E75" strokeWidth="1"/>
            <line x1="3" y1="23" x2="29" y2="23" stroke="#1D9E75" strokeWidth="1"/>
          </svg>
        </div>
        <span className={styles.logoText}>UNAM Estudia</span>
      </div>
 
      <nav className={styles.nav}>
        <a href="#" className={`${styles.navLink} ${styles.active}`}>Inicio</a>
        <a href="#" className={styles.navLink}>Alumno</a>
        <a href="#" className={styles.navLink}>Asesor</a>
        <a href="#" className={styles.navLink}>
          <span className={styles.chatIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          Chat
          <span className={styles.badge}>4</span>
        </a>
      </nav>
 
      <div className={styles.actions}>
        <a href="#" className={styles.loginBtn}>Iniciar Sesión</a>
        <a href="#" className={styles.registerBtn}>Registrarse</a>
      </div>
    </header>
  );
}