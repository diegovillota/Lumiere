import { useMemo, useState } from "react";
import { initialCatalog, getNextId } from "../data/mockData";

/**
 * useCatalog
 * ----------
 * Hook que concentra el estado del catálogo y las operaciones que se
 * pueden hacer sobre él. Hoy trabaja sobre datos de ejemplo en memoria;
 * el día que exista backend o persistencia real, esta es la pieza que
 * se reemplaza (las funciones que devuelve quedan iguales para el resto
 * de la app).
 *
 * Cubre, a nivel de maqueta, las cuatro operaciones que pide la pauta:
 *  - Crear   -> addItem
 *  - Consultar -> visibleItems (con filtro y búsqueda)
 *  - Modificar -> toggleEstado
 *  - Eliminar  -> removeItem
 */
export function useCatalog() {
  const [items, setItems] = useState(initialCatalog);
  const [filtroTipo, setFiltroTipo] = useState("todos"); // todos | pelicula | serie
  const [filtroEstado, setFiltroEstado] = useState("todos"); // todos | pendiente | vista
  const [busqueda, setBusqueda] = useState("");

  function addItem({ titulo, tipo, anio, genero }) {
    if (!titulo.trim()) return;

    const nuevoItem = {
      id: getNextId(),
      titulo: titulo.trim(),
      tipo,
      anio: anio ? Number(anio) : null,
      genero: genero.trim() || "Sin clasificar",
      estado: "pendiente",
      notaClub: null,
    };

    setItems((prev) => [nuevoItem, ...prev]);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleEstado(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, estado: item.estado === "vista" ? "pendiente" : "vista" }
          : item
      )
    );
  }

  const visibleItems = useMemo(() => {
    return items.filter((item) => {
      const coincideTipo = filtroTipo === "todos" || item.tipo === filtroTipo;
      const coincideEstado = filtroEstado === "todos" || item.estado === filtroEstado;
      const coincideBusqueda = item.titulo
        .toLowerCase()
        .includes(busqueda.trim().toLowerCase());
      return coincideTipo && coincideEstado && coincideBusqueda;
    });
  }, [items, filtroTipo, filtroEstado, busqueda]);

  const stats = useMemo(() => {
    const vistas = items.filter((i) => i.estado === "vista").length;
    return {
      total: items.length,
      vistas,
      pendientes: items.length - vistas,
    };
  }, [items]);

  return {
    items: visibleItems,
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
  };
}
