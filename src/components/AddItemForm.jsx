import { useState } from "react";

/**
 * AddItemForm — formulario para agregar un título nuevo al catálogo.
 * Mantiene su propio estado local (los campos del formulario) y al
 * enviar delega la creación real al hook useCatalog vía la prop onAdd.
 */
export default function AddItemForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("pelicula");
  const [anio, setAnio] = useState("");
  const [genero, setGenero] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ titulo, tipo, anio, genero });
    setTitulo("");
    setAnio("");
    setGenero("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Ej: Memorias de un caracol"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="tipo">Tipo</label>
        <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="pelicula">Película</option>
          <option value="serie">Serie</option>
        </select>
      </div>

      <div>
        <label htmlFor="anio">Año</label>
        <input
          id="anio"
          type="number"
          placeholder="2024"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="genero">Género</label>
        <input
          id="genero"
          type="text"
          placeholder="Terror"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary">
        Agregar al catálogo
      </button>
    </form>
  );
}
