/**
 * FilterBar — controla qué parte del catálogo se ve.
 * Recibe el estado de filtro actual y los setters desde useCatalog
 * (vía props), no guarda nada por su cuenta.
 */
export default function FilterBar({
  filtroTipo,
  setFiltroTipo,
  filtroEstado,
  setFiltroEstado,
  soloFavoritos,
  setSoloFavoritos,
  busqueda,
  setBusqueda,
}) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-chip ${filtroTipo === "todos" ? "active" : ""}`}
        onClick={() => setFiltroTipo("todos")}
      >
        Todo
      </button>
      <button
        className={`filter-chip ${filtroTipo === "pelicula" ? "active" : ""}`}
        onClick={() => setFiltroTipo("pelicula")}
      >
        Películas
      </button>
      <button
        className={`filter-chip ${filtroTipo === "serie" ? "active" : ""}`}
        onClick={() => setFiltroTipo("serie")}
      >
        Series
      </button>

      <span style={{ width: 1, background: "var(--border)", margin: "0 4px" }} />

      <button
        className={`filter-chip ${filtroEstado === "todos" ? "active" : ""}`}
        onClick={() => setFiltroEstado("todos")}
      >
        Cualquier estado
      </button>
      <button
        className={`filter-chip ${filtroEstado === "pendiente" ? "active" : ""}`}
        onClick={() => setFiltroEstado("pendiente")}
      >
        Pendientes
      </button>
      <button
        className={`filter-chip ${filtroEstado === "vista" ? "active" : ""}`}
        onClick={() => setFiltroEstado("vista")}
      >
        Vistas
      </button>

      <span style={{ width: 1, background: "var(--border)", margin: "0 4px" }} />

      <button
        className={`filter-chip ${soloFavoritos ? "active" : ""}`}
        onClick={() => setSoloFavoritos(!soloFavoritos)}
        aria-pressed={soloFavoritos}
      >
        ♥ Favoritas
      </button>

      <input
        className="filter-search"
        type="text"
        placeholder="Buscar título…"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        aria-label="Buscar por título"
      />
    </div>
  );
}
