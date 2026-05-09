import Link from 'next/link'; // 1. Importamos Link
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form className={styles.loginForm}>
        <input type="email" placeholder="Correo Electrónico" className={styles.input} required />
        <input type="password" placeholder="Contraseña" className={styles.input} required />