import { useState } from "react";
import { useProfile } from "../hooks/useProfile";

/**
 * Profile — contenido de la pestaña "Perfil".
 * Maneja un formulario local (form) que solo se confirma contra el
 * perfil guardado (profile) al enviar — así no se escribe en
 * localStorage en cada tecla, solo al guardar.
 */
export default function Profile({ stats }) {
  const { profile, updateProfile } = useProfile();
  const [form, setForm] = useState(profile);
  const [guardado, setGuardado] = useState(false);

  function handleChange(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
    setGuardado(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateProfile(form);
    setGuardado(true);
  }

  const inicial = (form.nombre || "?").charAt(0).toUpperCase();
  const miembroDesde = profile.miembroDesde
    ? new Date(profile.miembroDesde).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
      })
    : null;

  return (
    <section className="profile-section">
      <div className="profile-card">
        <div className="profile-avatar" aria-hidden="true">
          {inicial}
        </div>
        <div>
          <h2>{form.nombre || "Sin nombre todavía"}</h2>
          <p className="eyebrow">{form.rol}</p>
          {miembroDesde && <p className="profile-meta">Miembro desde {miembroDesde}</p>}
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="rol">Rol en el club</label>
          <select id="rol" value={form.rol} onChange={(e) => handleChange("rol", e.target.value)}>
            <option>Miembro</option>
            <option>Organizador de funciones</option>
            <option>Curador</option>
          </select>
        </div>

        <div>
          <label htmlFor="generoFavorito">Género favorito</label>
          <input
            id="generoFavorito"
            type="text"
            placeholder="Terror, drama..."
            value={form.generoFavorito}
            onChange={(e) => handleChange("generoFavorito", e.target.value)}
          />
        </div>

        <div className="profile-form-bio">
          <label htmlFor="bio">Sobre mí</label>
          <textarea
            id="bio"
            rows="3"
            placeholder="Una frase sobre tus gustos cinéfilos"
            value={form.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
          />
        </div>

        <div className="profile-form-actions">
          <button type="submit" className="btn-primary">
            Guardar perfil
          </button>
          {guardado && <span className="profile-saved-msg">Guardado ✓</span>}
        </div>
      </form>

      <div className="profile-stats">
        <h3>Resumen del club</h3>
        <div className="stats-row">
          <div className="stat">
            <strong>{stats.total}</strong>
            <span>en catálogo</span>
          </div>
          <div className="stat">
            <strong>{stats.vistas}</strong>
            <span>vistas</span>
          </div>
          <div className="stat">
            <strong>{stats.pendientes}</strong>
            <span>pendientes</span>
          </div>
          <div className="stat">
            <strong>{stats.favoritos}</strong>
            <span>favoritas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
