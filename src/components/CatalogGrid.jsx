import MovieCard from "./MovieCard";
import EmptyState from "./EmptyState";

/**
 * CatalogGrid — recorre la lista de items visibles (ya filtrada por
 * useCatalog) y renderiza una MovieCard por cada uno. Si no hay
 * resultados, muestra el estado vacío en vez de un grid en blanco.
 */
export default function CatalogGrid({ items, onToggleEstado, onRemove }) {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="catalog-grid">
      {items.map((item) => (
        <MovieCard
          key={item.id}
          item={item}
          onToggleEstado={onToggleEstado}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
