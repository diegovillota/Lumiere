/**
 * Servicio de integración externa — The Movie Database (TMDB)
 * =============================================================
 * Este archivo NO está implementado todavía. Es la planificación de
 * cómo se va a conectar la app a una fuente de datos externa en una
 * evaluación futura (ver punto 6 de la pauta: "Planificación de
 * integración externa").
 *
 * ¿Qué necesitamos obtener de TMDB?
 *  - Búsqueda de títulos por nombre (películas y series).
 *  - Datos de cada título: póster, sinopsis, año, géneros, duración,
 *    rating de la comunidad TMDB.
 *  - Detalle de un título específico por id, para una futura vista
 *    de ficha ampliada.
 *
 * ¿Por qué la app necesita esta información externa?
 *  Hoy el catálogo se completa a mano (ver src/data/mockData.js) y
 *  el cineclub tiene que escribir título, año y género de memoria.
 *  Conectar TMDB permite buscar un título real y autocompletar su
 *  información (póster, sinopsis, géneros oficiales), reduciendo el
 *  trabajo manual y evitando errores de tipeo o datos duplicados.
 *
 * ¿Qué valor le aporta a la solución?
 *  Cada ficha del catálogo deja de ser solo texto plano y pasa a
 *  tener imagen y sinopsis reales, lo que ayuda al cineclub a decidir
 *  más rápido qué proyectar. Además habilita funciones futuras como
 *  filtrar por género oficial o mostrar recomendaciones similares.
 *
 * Plan de implementación (próxima evaluación):
 *  1. Crear cuenta en TMDB y obtener API key.
 *  2. Guardar la key en una variable de entorno (.env, VITE_TMDB_KEY),
 *     nunca hardcodeada en el repositorio.
 *  3. Implementar searchTitles() usando fetch a
 *     https://api.themoviedb.org/3/search/multi
 *  4. Implementar getTitleDetails() usando
 *     https://api.themoviedb.org/3/movie/{id} o /tv/{id}
 *  5. Reemplazar src/data/mockData.js por datos reales manteniendo
 *     la misma forma de objeto que ya usa el resto de la app.
 */

// const API_KEY = import.meta.env.VITE_TMDB_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Busca títulos (películas o series) por texto.
 * @param {string} query - texto de búsqueda escrito por el usuario.
 * @returns {Promise<Array>} lista de resultados desde TMDB.
 */
// eslint-disable-next-line no-unused-vars
export async function searchTitles(query) {
  throw new Error(
    "searchTitles() todavía no está implementado. Se conectará a TMDB en una próxima evaluación."
  );
}

/**
 * Obtiene el detalle completo de un título por id.
 * @param {number} id - id del título en TMDB.
 * @param {"pelicula"|"serie"} tipo
 * @returns {Promise<Object>} detalle del título.
 */
// eslint-disable-next-line no-unused-vars
export async function getTitleDetails(id, tipo) {
  throw new Error(
    "getTitleDetails() todavía no está implementado. Se conectará a TMDB en una próxima evaluación."
  );
}
