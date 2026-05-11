"use client";

import { useState } from "react";
import styles from "./Asesores.module.css";


type TabKey = "todas" | "completadas" | "confirmadas" | "pendientes";

interface Session {
  id: number;
  subject: string;
  student: string;
  date: string;
  hours: number;
  status: "completada" | "confirmada" | "pendiente";
  tipo: "S. Social" | "Regular";
  tabs: TabKey[];
}

const initialSessions: Session[] = [
  { id: 1, subject: "Química Orgánica", student: "María González", date: "2024-12-10", hours: 2, status: "completada", tipo: "S. Social", tabs: ["todas", "completadas"] },
  { id: 2, subject: "Química Inorgánica", student: "Juan Pérez", date: "2024-12-18", hours: 1.5, status: "completada", tipo: "S. Social", tabs: ["todas", "completadas"] },
  { id: 3, subject: "Álgebra Lineal", student: "Gonzalo Henríquez", date: "2024-12-20", hours: 1, status: "confirmada", tipo: "Regular", tabs: ["todas", "confirmadas"] },
  { id: 4, subject: "Cálculo Diferencial", student: "Valentina Ruz", date: "2024-12-22", hours: 2, status: "pendiente", tipo: "Regular", tabs: ["todas", "pendientes"] },
];

const TABS: { key: TabKey; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "completadas", label: "Completadas" },
  { key: "confirmadas", label: "Confirmadas" },
  { key: "pendientes", label: "Pendientes" },
];

export function Asesores() {
  const [activeTab, setActiveTab] = useState<TabKey>("todas");
  const [sessions, setSessions] = useState<Session[]>(initialSessions);

  const filtered = sessions.filter((s) => s.tabs.includes(activeTab));

  const handleConfirm = (id: number) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "confirmada", tabs: ["todas", "confirmadas"] } : s
      )
    );
  };

  const handleDecline = (id: number) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mi Agenda de Asesorías</h1>
        <p className={styles.subtitle}>
          Gestiona tus sesiones programadas y revisa el historial de asesorías impartidas
        </p>
      </div>

      <div className={styles.container}>
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

        <div className={styles.list}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>Sin asesorías en esta categoría.</p>
          ) : (
            filtered.map((s) => (
              <SessionRow key={s.id} session={s} onConfirm={handleConfirm} onDecline={handleDecline} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function SessionRow({
  session: s,
  onConfirm,
  onDecline,
}: {
  session: Session;
  onConfirm: (id: number) => void;
  onDecline: (id: number) => void;
}) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLeft}>
        <div className={styles.greenBar} />
        <div className={styles.sessionInfo}>
          <p className={styles.sessionSubject}>{s.subject}</p>
          <p className={styles.sessionStudent}>
            Estudiante: <strong>{s.student}</strong>
          </p>
          <div className={styles.sessionMeta}>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon} aria-hidden="true">📅</span>
              {s.date}
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon} aria-hidden="true">⏰</span>
              {s.hours} {s.hours === 1 ? "hora" : "horas"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.rowRight}>
        <span className={styles.badgeTipo}>
          <span className={styles.metaIcon} aria-hidden="true">🛡️</span>
          {s.tipo}
        </span>
        <StatusBadge status={s.status} />
        {s.status === "pendiente" && (
          <>
            <button className={styles.btnConfirmar} onClick={() => onConfirm(s.id)}>Confirmar</button>
            <button className={styles.btnDeclinar} onClick={() => onDecline(s.id)}>Declinar</button>
          </>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Session["status"] }) {
  const classMap = {
    completada: styles.badgeCompletada,
    confirmada: styles.badgeConfirmada,
    pendiente: styles.badgePendiente,
  };
  const labels = {
    completada: "Completada",
    confirmada: "Confirmada",
    pendiente: "Pendiente",
  };
  return <span className={classMap[status]}>{labels[status]}</span>;
}

// ══════════════════════════════
// TIPOS
// ══════════════════════════════
interface Credencial {
  id: number;
  nombre: string;
  tipo: string;
  fecha: string;
  estado: "verificado" | "pendiente";
}
 
const credenciales: Credencial[] = [
  { id: 1, nombre: "Doctorado en Física - UNAM", tipo: "Título", fecha: "2010-06-15", estado: "verificado" },
  { id: 2, nombre: "Cédula Profesional #12345678", tipo: "Cédula", fecha: "2010-08-20", estado: "verificado" },
  { id: 3, nombre: "Certificación Docente UNAM", tipo: "Certificación", fecha: "2018-03-10", estado: "verificado" },
];
 

 
export function MisCredenciales() {
  const handleSubir = () => {
    // TODO: abrir modal o file picker
    alert("Abrir modal de subida");
  };
 
  return (
    <div className={styles.credencialesSection}>
      {/* Encabezado */}
      <div className={styles.credencialesHeader}>
        <h2 className={styles.credencialesTitle}>Mis Credenciales</h2>
        <p className={styles.credencialesSubtitle}>
          Gestiona tus documentos académicos que verifican tu capacidad para dar asesorías
        </p>
      </div>
 
      {/* Botón subir */}
      <div className={styles.credencialesTopBar}>
        <button className={styles.btnSubir} onClick={handleSubir}>
          <span aria-hidden="true">⬆️</span>
          Subir Credencial
        </button>
      </div>
 
      {/* Lista */}
      <div className={styles.credencialesList}>
        {credenciales.map((c) => (
          <CredencialCard key={c.id} credencial={c} />
        ))}
      </div>
    </div>
  );
}
 
// ══════════════════════════════
// TARJETA INDIVIDUAL
// ══════════════════════════════
function CredencialCard({ credencial: c }: { credencial: Credencial }) {
  return (
    <div className={styles.credencialCard}>
      <div className={styles.credencialLeft}>
        <div className={styles.credencialIconWrap}>
          <span className={styles.credencialIconCheck} aria-hidden="true">✔️</span>
        </div>
        <div>
          <p className={styles.credencialNombre}>{c.nombre}</p>
          <p className={styles.credencialMeta}>
            {c.tipo} <span>·</span> {c.fecha}
          </p>
        </div>
      </div>
      <span className={c.estado === "verificado" ? styles.badgeVerificado : styles.badgePendiente}>
        {c.estado === "verificado" ? "Verificado" : "Pendiente"}
      </span>
    </div>
  );
}
 export default function AsesorPanel() {
  return (
    <>
      <Asesores />
      <MisCredenciales />
    </>
  );
}
