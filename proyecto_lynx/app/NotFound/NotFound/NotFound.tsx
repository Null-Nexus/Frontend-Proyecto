import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",

        padding: "40px 20px",

        background:
          "linear-gradient(180deg, #0b806a 0%, #0b7a67 100%)",

        color: "white",

        fontFamily: "sans-serif",
      }}
    >
      {/* CARD */}

      <div
        style={{
          background: "rgba(255,255,255,0.1)",

          border:
            "1px solid rgba(255,255,255,0.15)",

          backdropFilter: "blur(8px)",

          borderRadius: "28px",

          padding: "60px 50px",

          maxWidth: "560px",

          width: "100%",
        }}
      >
        {/* 404 */}

        <h1
          style={{
            fontSize: "7rem",
            margin: 0,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          404
        </h1>

        {/* TITLE */}

        <h2
          style={{
            marginTop: "20px",
            marginBottom: "12px",

            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          Página no encontrada
        </h2>

        {/* TEXT */}

        <p
          style={{
            color: "#d6f0e8",

            fontSize: "1.1rem",

            lineHeight: 1.7,

            marginBottom: "32px",
          }}
        >
          La ruta a la que intentas acceder no existe
          o fue movida dentro de la plataforma.
        </p>

        {/* BUTTON */}

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "14px 26px",

            borderRadius: "14px",

            backgroundColor: "white",

            color: "#0b7a67",

            textDecoration: "none",

            fontWeight: 700,

            fontSize: "1rem",

            transition: "0.2s ease",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}