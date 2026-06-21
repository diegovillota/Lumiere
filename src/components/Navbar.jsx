import ThemeToggle from "./ThemeToggle";

/**
 * Navbar — encabezado tipo "marquesina" del cineclub.
 * Componente de presentación puro: no maneja estado, solo recibe
 * las estadísticas y el tema actual a mostrar vía props.
 */
export default function Navbar({ stats, theme, onToggleTheme }) {
  return (
    <header className="marquee">
      <div className="marquee-inner">
        <div>
          <h1 className="marquee-title">
            Nocturno <span>cineclub</span>
          </h1>
          <p className="marquee-tagline">catálogo interno · funciones de autor y terror clásico</p>
        </div>

        <div className="marquee-controls">
          <div className="stats-row" aria-label="Resumen del catálogo">
            <div className="stat">
              <strong>{stats.total}</strong>
              <span>en catálogo</span>
            </div>
            <div className="stat">
              <strong>{stats.pendientes}</strong>
              <span>pendientes</span>
            </div>
            <div className="stat">
              <strong>{stats.vistas}</strong>
              <span>vistas</span>
            </div>
          </div>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
