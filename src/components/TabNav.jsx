/**
 * TabNav — selector entre las "páginas" de la maqueta. Es estado
 * simple (no hay librería de rutas todavía); cuando la app crezca
 * y se justifique, este es el punto donde se reemplazaría por
 * react-router sin tener que tocar el resto de los componentes.
 */
export default function TabNav({ vista, onChangeVista }) {
  return (
    <nav className="tab-nav" aria-label="Secciones de la app">
      <button
        className={`tab-btn ${vista === "catalogo" ? "active" : ""}`}
        onClick={() => onChangeVista("catalogo")}
      >
        Catálogo
      </button>
      <button
        className={`tab-btn ${vista === "perfil" ? "active" : ""}`}
        onClick={() => onChangeVista("perfil")}
      >
        Perfil
      </button>
    </nav>
  );
}
