/**
 * MovieCard — tarjeta tipo "entrada de cine" (ticket stub).
 * Sirve tanto para películas como para series; recibe el item y los
 * callbacks de acción por props, así que es 100% reutilizable y no
 * sabe nada del resto del catálogo.
 */
export default function MovieCard({ item, onToggleEstado, onRemove }) {
  const esVista = item.estado === "vista";

  return (
    <article className={`ticket-card ${esVista ? "is-watched" : ""}`}>
      <div className="ticket-poster">
        <span className="ticket-type-badge">{item.tipo === "serie" ? "Serie" : "Película"}</span>
        <span className="poster-glyph" aria-hidden="true">
          {item.titulo.charAt(0).toUpperCase()}
        </span>
      </div>

      <div className="ticket-divider" />

      <div className="ticket-info">
        <h3>{item.titulo}</h3>
        <div className="ticket-meta">
          <span>{item.anio ?? "s/año"}</span>
          <span>·</span>
          <span>{item.genero}</span>
          {esVista && item.notaClub && (
            <>
              <span>·</span>
              <span>★ {item.notaClub}/5</span>
            </>
          )}
        </div>

        <div className="ticket-actions">
          <button
            className={esVista ? "is-active" : ""}
            onClick={() => onToggleEstado(item.id)}
          >
            {esVista ? "Marcar pendiente" : "Marcar vista"}
          </button>
          <button className="btn-remove" onClick={() => onRemove(item.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}
