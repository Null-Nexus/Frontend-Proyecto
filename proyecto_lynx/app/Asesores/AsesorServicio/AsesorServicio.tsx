"use client";

import { useState } from "react";
import styles from "./AsesorServicio.module.css";

import {
  Clock3,
  BookOpen,
  Star,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  Info,
  Upload,
} from "lucide-react";

type TabKey = "todas" | "servicio-social" | "otras";

const TABS: { key: TabKey; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "servicio-social", label: "Servicio Social" },
  { key: "otras", label: "Otras" },
];

const allSessions = [
  { id: 1, subject: "Química Orgánica", student: "María González", date: "2024-12-10", hours: 2, tipo: "servicio-social" },
  { id: 2, subject: "Química Inorgánica", student: "Juan Pérez", date: "2024-12-18", hours: 1.5, tipo: "servicio-social" },
  { id: 3, subject: "Bioquímica", student: "Laura Martínez", date: "2024-12-22", hours: 2, tipo: "servicio-social" },
];

export default function AsesorServicio() {
  const [activeTab, setActiveTab] = useState<TabKey>("todas");

  const filtered = allSessions.filter(
    (s) => activeTab === "todas" || s.tipo === activeTab
  );

  return (
    <section className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>Servicio Social</h1>
        <p>
          Libera tu servicio social dando asesorías y ayudando a otros
          estudiantes de la UNAM
        </p>
      </div>

      {/* TOP CARDS */}
      <div className={styles.cards}>
        {/* MAIN */}
        <div className={`${styles.card} ${styles.mainCard}`}>
          <div className={styles.cardTop}>
            <div className={styles.iconBox}>
              <Clock3 size={30} />
            </div>
            <span className={styles.badge}>30.2% completado</span>
          </div>
          <h2>145h</h2>
          <p>de 480h requeridas</p>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "30%" }} />
          </div>
        </div>

        {/* CARD 2 */}
        <div className={styles.card}>
          <div className={styles.blueIcon}>
            <BookOpen size={28} />
          </div>
          <h2>72</h2>
          <h3>Asesorías Completadas</h3>
          <span>18 este mes</span>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <div className={styles.yellowIcon}>
            <Star size={28} />
          </div>
          <h2>4.8</h2>
          <h3>Calificación Promedio</h3>
          <span>45 estudiantes ayudados</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.historySection}>
            {/* TAB BAR */}
            <div className={styles.tabBar}>
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SESIONES */}
            <div className={styles.sessions}>
              {filtered.length === 0 ? (
                <p className={styles.empty}>Sin asesorías en esta categoría.</p>
              ) : (
                filtered.map((s) => (
                  <div key={s.id} className={styles.sessionCard}>
                    <div>
                      <h2>{s.subject}</h2>
                      <p>Estudiante: {s.student}</p>
                      <div className={styles.sessionInfo}>
                        <span>
                          <CalendarDays size={18} />
                          {s.date}
                        </span>
                        <span>
                          <Clock3 size={18} />
                          {s.hours} horas
                        </span>
                      </div>
                    </div>
                    <div className={styles.tags}>
                      <span className={styles.socialTag}>
                        <ShieldCheck size={16} />
                        Servicio Social
                      </span>
                      <span className={styles.doneTag}>Completada</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {/* VERIFY */}
          <div className={styles.verifyCard}>
            <div className={styles.verifyItem}>
              <div className={styles.greenCircle}>
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3>Credenciales Verificadas</h3>
                <p>Documentos aprobados</p>
              </div>
            </div>

            <div className={styles.verifyItem}>
              <div className={styles.greenCircle}>
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3>Foto de Perfil</h3>
                <p>Imagen actualizada</p>
              </div>
            </div>

            <div className={styles.verifyItem}>
              <div className={styles.yellowCircle}>
                <Clock3 size={20} />
              </div>
              <div>
                <h3>480 Horas Totales</h3>
                <p>145h completadas</p>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Info size={34} />
            </div>
            <h2>¿Cómo funciona?</h2>
            <ul>
              <li>Sube tus credenciales académicas</li>
              <li>Ofrece asesorías en tus materias</li>
              <li>Acumula horas automáticamente</li>
              <li>Descarga tu constancia al completar</li>
            </ul>
          </div>

          {/* BUTTON */}
          <button className={styles.uploadBtn}>
            <Upload size={20} />
            Subir Credenciales
          </button>
        </div>
      </div>
    </section>
  );
}