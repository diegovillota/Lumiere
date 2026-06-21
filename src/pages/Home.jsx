import Navbar from "../components/Navbar";
import AddItemForm from "../components/AddItemForm";
import FilterBar from "../components/FilterBar";
import CatalogGrid from "../components/CatalogGrid";
import { useCatalog } from "../hooks/useCatalog";

/**
 * Home — única página de la maqueta. Conecta el hook useCatalog con
 * los componentes de presentación. Cuando la app crezca (rutas,
 * vista de detalle, etc.) esta carpeta pages/ es donde se agregan
 * las páginas nuevas.
 */
export default function Home() {
  const {
    items,
    stats,
    addItem,
    removeItem,
    toggleEstado,
    filtroTipo,
    setFiltroTipo,
    filtroEstado,
    setFiltroEstado,
    busqueda,
    setBusqueda,
  } = useCatalog();

  return (
    <>
      <Navbar stats={stats} />

      <main className="app-shell">
        <AddItemForm onAdd={addItem} />

        <div className="section-head">
          <h2>Catálogo</h2>
        </div>

        <FilterBar
          filtroTipo={filtroTipo}
          setFiltroTipo={setFiltroTipo}
          filtroEstado={filtroEstado}
          setFiltroEstado={setFiltroEstado}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <CatalogGrid items={items} onToggleEstado={toggleEstado} onRemove={removeItem} />

        <footer className="app-footer">
          <span>Nocturno · maqueta v0.1</span>
          <span>datos de ejemplo · TMDB pendiente de integrar</span>
        </footer>
      </main>
    </>
  );
}
