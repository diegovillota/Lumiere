/**
 * MovieCard — tarjeta tipo "entrada de cine" (ticket stub).
 * Sirve tanto para películas como para series; recibe el item y los
 * callbacks de acción por props, así que es 100% reutilizable y no
 * sabe nada del resto del catálogo.
 */
export default function MovieCard({
  item,
  onToggleEstado,
  onRemove,
  onToggleFavorito,
  onSetNota,
}) {
  const esVista = item.estado === "vista";

  return (
    <article className={`ticket-card ${esVista ? "is-watched" : ""}`}>
      <div className="ticket-poster">
        <span className="ticket-type-badge">{item.tipo === "serie" ? "Serie" : "Película"}</span>

        <button
          type="button"
          className={`favorito-toggle ${item.favorito ? "is-active" : ""}`}
          onClick={() => onToggleFavorito(item.id)}
          aria-pressed={item.favorito}
          aria-label={item.favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {item.favorito ? "♥" : "♡"}
        </button>

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
        </div>

        <div className="rating-stars" role="group" aria-label="Valoración del club">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={`rating-star ${item.notaClub >= n ? "is-filled" : ""}`}
              onClick={() => onSetNota(item.id, n)}
              disabled={!esVista}
              title={esVista ? `Valorar con ${n}` : "Marca como vista para valorar"}
            >
              {item.notaClub >= n ? "★" : "☆"}
            </button>
          ))}
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
