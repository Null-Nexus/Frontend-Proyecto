"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // 1. Agregamos usePathname
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname(); // 2. Guardamos la ruta actual
  const [sesionActiva, setSesionActiva] = useState(false);

  // 3. Este useEffect ahora se dispara cada vez que la ruta (pathname) cambia
  useEffect(() => {
    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal) {
      setSesionActiva(true);
    } else {
      setSesionActiva(false); // Es importante regresarlo a false si no hay sesión
    }
  }, [pathname]);

  const handleCerrarSesion = () => {
    localStorage.removeItem("usuario");
    setSesionActiva(false);
    router.push("/Login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
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
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/Inicio" className={`${styles.navLink} ${styles.active}`}>Inicio</Link>
        <Link href="/Alumno" className={styles.navLink}>Alumno</Link>
        <Link href="/Asesores" className={styles.navLink}>Asesor</Link>
        <Link href="/NotFound" className={styles.navLink}>
          <span className={styles.chatIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          Chat
          <span className={styles.badge}>4</span>
        </Link>
      </nav>

      <div className={styles.actions}>
        {sesionActiva ? (
          <button 
            onClick={handleCerrarSesion} 
            className={styles.loginBtn}
            style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}
          >
            Cerrar Sesión
          </button>
        ) : (
          <>
            <Link href="/Login" className={styles.loginBtn}>
              Iniciar Sesión
            </Link>
            <Link href="/Registro" className={styles.registerBtn}>
              Registrarse
            </Link>
          </>
        )}
      </div>
    </header>
  );
}