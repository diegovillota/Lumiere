import { useEffect, useState } from "react";

const STORAGE_KEY = "nocturno-profile";

/**
 * Perfil por defecto la primera vez que se abre la app. miembroDesde
 * se fija una sola vez (la primera vez que se crea el perfil) y desde
 * ahí queda guardado, simulando una fecha de alta real.
 */
function getInitialProfile() {
  if (typeof window === "undefined") {
    return { nombre: "", rol: "Miembro", generoFavorito: "", bio: "", miembroDesde: null };
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // datos guardados corruptos: se descartan y se genera uno nuevo
    }
  }

  return {
    nombre: "",
    rol: "Miembro",
    generoFavorito: "",
    bio: "",
    miembroDesde: new Date().toISOString(),
  };
}

/**
 * useProfile — estado del perfil del usuario, persistido en
 * localStorage (no hay backend todavía). Cuando exista autenticación
 * real, este hook es el que se reemplaza por una llamada a la API.
 */
export function useProfile() {
  const [profile, setProfile] = useState(getInitialProfile);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  function updateProfile(cambios) {
    setProfile((prev) => ({ ...prev, ...cambios }));
  }

  return { profile, updateProfile };
}
