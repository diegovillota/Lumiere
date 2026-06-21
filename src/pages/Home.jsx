import AddItemForm from "../components/AddItemForm";
import FilterBar from "../components/FilterBar";
import CatalogGrid from "../components/CatalogGrid";

/**
 * Home — contenido de la pestaña "Catálogo".
 * Ya no llama a useCatalog ni renderiza Navbar/footer: ese estado
 * ahora vive en App.jsx (se comparte con la pestaña Perfil) y se
 * recibe acá listo para usar a través de la prop `catalog`.
 */
export default function Home({ catalog }) {
  const {
    items,
    addItem,
    removeItem,
    toggleEstado,
    toggleFavorito,
    setNotaClub,
    filtroTipo,
    setFiltroTipo,
    filtroEstado,
    setFiltroEstado,
    soloFavoritos,
    setSoloFavoritos,
    busqueda,
    setBusqueda,
  } = catalog;

  return (
    <>
      <AddItemForm onAdd={addItem} />

      <div className="section-head">
        <h2>Catálogo</h2>
      </div>

      <FilterBar
        filtroTipo={filtroTipo}
        setFiltroTipo={setFiltroTipo}
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
        soloFavoritos={soloFavoritos}
        setSoloFavoritos={setSoloFavoritos}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <CatalogGrid
        items={items}
        onToggleEstado={toggleEstado}
        onRemove={removeItem}
        onToggleFavorito={toggleFavorito}
        onSetNota={setNotaClub}
      />
    </>
  );
}
