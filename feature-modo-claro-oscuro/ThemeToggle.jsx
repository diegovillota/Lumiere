/**
 * ThemeToggle — interruptor entre modo "Nocturno" (oscuro, default)
 * y modo "Matinée" (claro, opcional). Componente de presentación
 * puro: recibe el tema actual y el callback para cambiarlo.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const esOscuro = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={!esOscuro}
      aria-label="Cambiar entre modo Nocturno y modo Matinée"
    >
      <span className={`theme-toggle-dot ${esOscuro ? "" : "is-light"}`} aria-hidden="true" />
      {esOscuro ? "Nocturno" : "Matinée"}
    </button>
  );
}
