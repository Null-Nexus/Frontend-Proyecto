"use client";
 
import { useState } from "react";
import styles from "./AsesoriasA.module.css";
 
type TabKey = "todas" | "completadas" | "proximas";
 
type Asesoria = {
  id: number;
  titulo: string;
  tutor: string;
  fecha: string;
  duracion: string;
  estado: "Completada" | "Confirmada";
  rating?: number;
  tabs: TabKey[];
};
 
const initialAsesorias: Asesoria[] = [
  { id: 1, titulo: "Física Cuántica", tutor: "Dr. Carlos Méndez", fecha: "2024-12-15", duracion: "2 horas", estado: "Completada", rating: 5, tabs: ["todas", "completadas"] },
  { id: 2, titulo: "Programación en Python", tutor: "Ing. Ana López", fecha: "2024-12-20", duracion: "1.5 horas", estado: "Completada", rating: 5, tabs: ["todas", "completadas"] },
  { id: 3, titulo: "Cálculo Integral", tutor: "Mtra. Patricia Ramírez", fecha: "2024-12-28", duracion: "2 horas", estado: "Completada", rating: 4, tabs: ["todas", "completadas"] },
  { id: 4, titulo: "Mecánica Clásica", tutor: "Dr. Carlos Méndez", fecha: "2025-01-10", duracion: "2 horas", estado: "Confirmada", tabs: ["todas", "proximas"] },
  { id: 5, titulo: "Estructuras de Datos", tutor: "Ing. Ana López", fecha: "2025-01-13", duracion: "1.5 horas", estado: "Confirmada", tabs: ["todas", "proximas"] },
];
 
const TABS: { key: TabKey; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "completadas", label: "Completadas" },
  { key: "proximas", label: "Próximas" },
];
 
export default function AsesoriasA() {
  const [activeTab, setActiveTab] = useState<TabKey>("todas");
  const [asesorias] = useState<Asesoria[]>(initialAsesorias);
 
  const filtered = asesorias.filter((a) => a.tabs.includes(activeTab));
 
  const handleCrear = () => {
    // TODO: abrir modal para crear asesoría
    alert("Abrir modal para crear asesoría");
  };
 
  return (
    <div className={styles.page}>
      {/* Encabezado */}
      <div className={styles.header}>
        <h1 className={styles.title}>Mis Asesorías</h1>
        <p className={styles.subtitle}>
          Gestiona tus sesiones de asesoría y mantén un registro completo de tu aprendizaje
        </p>
      </div>
 
      <div className={styles.container}>
        {/* Botón crear */}
        <div className={styles.topBar}>
          <button className={styles.btnCrear} onClick={handleCrear}>
            <span aria-hidden="true">➕</span>
            Solicitar Asesoría
          </button>
        </div>
 
        {/* Tab bar */}
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
 
        {/* Lista */}
        <div className={styles.list}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>Sin asesorías en esta categoría.</p>
          ) : (
            filtered.map((a) => <AsesoriaRow key={a.id} asesoria={a} />)
          )}
        </div>
      </div>
    </div>
  );
}
 
function AsesoriaRow({ asesoria: a }: { asesoria: Asesoria }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLeft}>
        <div className={`${styles.colorBar} ${a.estado === "Completada" ? styles.barGreen : styles.barBlue}`} />
        <div className={styles.info}>
          <p className={styles.tituloAsesoria}>{a.titulo}</p>
          <p className={styles.tutor}>con <strong>{a.tutor}</strong></p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span aria-hidden="true">📅</span> {a.fecha}
            </span>
            <span className={styles.metaItem}>
              <span aria-hidden="true">⏱</span> {a.duracion}
            </span>
          </div>
          {a.estado === "Completada" && a.rating && (
            <div className={styles.rating}>{"⭐".repeat(a.rating)}</div>
          )}
        </div>
      </div>
 
      <div className={styles.rowRight}>
        <span className={a.estado === "Completada" ? styles.badgeCompletada : styles.badgeConfirmada}>
          {a.estado}
        </span>
        {a.estado === "Confirmada" && (
          <button className={styles.btnCalificar}>Calificar Asesoría</button>
        )}
      </div>
    </div>
  );
}
 