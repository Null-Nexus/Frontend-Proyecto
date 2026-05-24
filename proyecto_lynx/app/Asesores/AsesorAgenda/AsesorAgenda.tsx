
"use client";

import { useState } from "react";
import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import styles from "./AsesorAgenda.module.css";

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

export default function AsesorAgenda() {
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
              <CalendarDays size={16} color="#9ca3af" />
              {s.date}
            </span>
            <span className={styles.metaItem}>
              <Clock3 size={16} color="#9ca3af" />
              {s.hours} {s.hours === 1 ? "hora" : "horas"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.rowRight}>
        <span className={styles.badgeTipo}>
          <ShieldCheck size={14} />
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