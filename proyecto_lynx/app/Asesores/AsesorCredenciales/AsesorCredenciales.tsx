"use client";

import { Upload, CheckCircle2 } from "lucide-react";
import styles from "./AsesorCredenciales.module.css";

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

export default function AsesorCredenciales() {
  const handleSubir = () => {
    alert("Abrir modal de subida");
  };

  return (
    <div className={styles.section}>
      {/* Encabezado */}
      <div className={styles.header}>
        <h2 className={styles.title}>Mis Credenciales</h2>
        <p className={styles.subtitle}>
          Gestiona tus documentos académicos que verifican tu capacidad para dar asesorías
        </p>
      </div>

      {/* Contenedor estilo agenda */}
      <div className={styles.container}>
        {/* Botón como tabBar */}
        <div className={styles.topBar}>
          <button className={styles.btnSubir} onClick={handleSubir}>
            <Upload size={18} />
            Subir Credencial
          </button>
        </div>

        {/* Lista */}
        <div className={styles.list}>
          {credenciales.map((c) => (
            <CredencialCard key={c.id} credencial={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CredencialCard({ credencial: c }: { credencial: Credencial }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLeft}>
        <div className={styles.greenBar} />
        <div className={styles.cardInfo}>
          <div className={styles.iconWrap}>
            <CheckCircle2 size={18} color="#1a6645" />
          </div>
          <div>
            <p className={styles.nombre}>{c.nombre}</p>
            <p className={styles.meta}>
              {c.tipo} <span>·</span> {c.fecha}
            </p>
          </div>
        </div>
      </div>
      <span className={c.estado === "verificado" ? styles.badgeVerificado : styles.badgePendiente}>
        {c.estado === "verificado" ? "Verificado" : "Pendiente"}
      </span>
    </div>
  );
}