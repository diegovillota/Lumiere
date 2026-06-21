import { useEffect, useState } from "react";

const STORAGE_KEY = "nocturno-theme";

/**
 * Lee el tema guardado en localStorage. Si no hay nada guardado (primera
 * visita), el default es "dark": el cineclub nace de noche, así que el
 * modo Nocturno es la identidad natural de la app y el modo claro
 * ("Matinée") queda como algo que el usuario elige activar.
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "light" ? "light" : "dark";
}

/**
 * useTheme — maneja el modo claro/oscuro de toda la app.
 * Aplica el tema como atributo data-theme en <html> (de ahí lo toman
 * las variables CSS en index.css) y lo persiste en localStorage para
 * que se mantenga entre visitas.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}
