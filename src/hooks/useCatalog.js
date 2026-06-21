import { useEffect, useMemo, useState } from "react";
import { initialCatalog } from "../data/mockData";

const STORAGE_KEY = "nocturno-catalog";

/**
 * Carga el catálogo guardado en localStorage si existe; si es la
 * primera vez que se abre la app (o los datos guardados están
 * corruptos), parte de los datos de ejemplo en mockData.js.
 */
function getInitialItems() {
  if (typeof window === "undefined") return initialCatalog;

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // datos guardados corruptos: se ignoran y se vuelve a los de ejemplo
    }
  }

  return initialCatalog;
}

/** Calcula el próximo id disponible mirando los items actuales, en vez
 *  de un contador aparte — así nunca se desincroniza con lo guardado. */
function nextIdFrom(items) {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

/**
 * useCatalog
 * ----------
 * Hook que concentra el estado del catálogo y las operaciones que se
 * pueden hacer sobre él. Los datos se guardan en localStorage en cada
 * cambio, así que ya no se pierden al recargar la página. El día que
 * exista backend real, esta es la pieza que se reemplaza (las
 * funciones que devuelve quedan iguales para el resto de la app).
 *
 * Cubre, a nivel de maqueta, las cuatro operaciones que pide la pauta:
 *  - Crear   -> addItem
 *  - Consultar -> visibleItems (con filtro y búsqueda)
 *  - Modificar -> toggleEstado
 *  - Eliminar  -> removeItem
 */
export function useCatalog() {
  const [items, setItems] = useState(getInitialItems);
  const [filtroTipo, setFiltroTipo] = useState("todos"); // todos | pelicula | serie
  const [filtroEstado, setFiltroEstado] = useState("todos"); // todos | pendiente | vista
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem({ titulo, tipo, anio, genero }) {
    if (!titulo.trim()) return;

    const nuevoItem = {
      id: nextIdFrom(items),
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
