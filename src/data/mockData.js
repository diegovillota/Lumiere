/**
 * Datos de ejemplo (mock) del catálogo.
 *
 * Esta es la fuente de datos PROVISIONAL mientras no está conectada
 * la API externa (The Movie Database). Su forma ya está pensada para
 * calzar con lo que devuelve TMDB, así el día que se reemplace este
 * archivo por una llamada real a la API (ver src/services/tmdbApi.js),
 * el resto de la app no debería necesitar cambios.
 *
 * Campos:
 *  - id: identificador único (en TMDB sería el id real del título)
 *  - titulo: nombre del título
 *  - tipo: "pelicula" | "serie"
 *  - anio: año de estreno
 *  - genero: género principal
 *  - estado: "pendiente" | "vista"
 *  - notaClub: valoración del club (1-5), null si aún no se valora
 *  - favorito: si el club lo marcó como favorito (independiente del estado)
 */

export const initialCatalog = [
  {
    id: 1,
    titulo: "El resplandor",
    tipo: "pelicula",
    anio: 1980,
    genero: "Terror",
    estado: "vista",
    notaClub: 5,
    favorito: true,
  },
  {
    id: 2,
    titulo: "Parásitos",
    tipo: "pelicula",
    anio: 2019,
    genero: "Drama",
    estado: "vista",
    notaClub: 5,
    favorito: true,
  },
  {
    id: 3,
    titulo: "Twin Peaks",
    tipo: "serie",
    anio: 1990,
    genero: "Misterio",
    estado: "pendiente",
    notaClub: null,
    favorito: false,
  },
  {
    id: 4,
    titulo: "Hereditary",
    tipo: "pelicula",
    anio: 2018,
    genero: "Terror",
    estado: "pendiente",
    notaClub: null,
    favorito: false,
  },
  {
    id: 5,
    titulo: "Chernobyl",
    tipo: "serie",
    anio: 2019,
    genero: "Drama histórico",
    estado: "vista",
    notaClub: 4,
    favorito: false,
  },
  {
    id: 6,
    titulo: "La sustancia",
    tipo: "pelicula",
    anio: 2024,
    genero: "Terror",
    estado: "pendiente",
    notaClub: null,
    favorito: false,
  },
];
