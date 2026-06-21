/**
 * EmptyState — se muestra cuando el filtro/búsqueda actual no
 * devuelve ningún título. Da una salida clara en vez de dejar la
 * pantalla en blanco.
 */
export default function EmptyState() {
  return (
    <div className="empty-state">
      <span className="eyebrow">Función cancelada</span>
      <p>No hay títulos que calcen con este filtro. Probá cambiando la búsqueda o agregando uno nuevo.</p>
    </div>
  );
}
