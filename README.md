# Lumiere — catálogo de películas y series

Maqueta inicial de una SPA en React + Vite para la Evaluación de la unidad de "Diseño e implementación de SPA". Pensada para crecer en evaluaciones futuras (persistencia, CRUD completo, integración con TMDB).

## 1. Cliente y problemática

**Cliente (ficticio):** *Cineclub Nocturno*, un colectivo de cinéfilos de puerto montt que organiza funciones temáticas semanales (cine de autor, terror clásico, series de culto) en un espacio comunitario.

**Contexto:** El club elige qué proyectar cada semana entre sus integrantes, y además algunos miembros van viendo series por su cuenta y quieren compartir su valoración con el resto.

**Problemática:** Hoy coordinan la watchlist por chat de WhatsApp y una planilla suelta. Se repiten títulos, se pierde el historial de lo ya visto, y no hay forma simple de filtrar por tipo (película/serie) o por estado (pendiente/vista). Tampoco existe ninguna ficha con información real del título (sinopsis, póster, año, género): todo se escribe a mano y de memoria.

**Objetivo de la solución:** Un catálogo digital simple donde cualquier integrante pueda agregar un título, marcarlo como visto o pendiente, filtrarlo y buscarlo. A futuro, cada ficha se va a enriquecer con datos reales obtenidos desde The Movie Database (TMDB), evitando el tipeo manual y los datos duplicados.

## 2. Descripción de la solución

Una SPA de una sola página (`Home`) que centraliza:

- Un encabezado tipo "marquesina" con el resumen del catálogo (total, pendientes, vistas).
- Un formulario para agregar títulos nuevos.
- Filtros por tipo y estado, más buscador por nombre.
- Una grilla de tarjetas tipo "entrada de cine" (una por título), con acción para cambiar su estado o eliminarlo.

Por ahora los datos viven en memoria (estado de React, partiendo de un set de ejemplo). No hay persistencia real ni conexión a APIs externas todavía; esa es la base sobre la que se va a construir en las próximas evaluaciones.

## 3. Funcionalidades propuestas

Lo implementado en esta etapa (a nivel de estado en memoria, sin backend):

- ✅ **Crear**: agregar un título nuevo desde el formulario.
- ✅ **Consultar**: ver el catálogo completo, filtrarlo por tipo/estado y buscarlo por nombre.
- ✅ **Modificar**: cambiar el estado de un título entre "pendiente" y "vista".
- ✅ **Eliminar**: sacar un título del catálogo.

## 4. Planificación de integración externa (TMDB)

Documentada en detalle en `src/services/tmdbApi.js` (funciones `searchTitles` y `getTitleDetails`, sin implementar todavía). En resumen:

- **Qué se necesita obtener:** búsqueda de títulos, y el detalle de cada uno (póster, sinopsis, año, géneros, rating).
- **Por qué se necesita:** hoy el catálogo se completa a mano y se pierde precisión; TMDB permite autocompletar la ficha con datos reales.
- **Qué valor aporta:** fichas con imagen y sinopsis reales en vez de solo texto, y la base para funciones futuras como filtrar por género oficial o recomendaciones.

## 5. Estructura del proyecto

```
cinelog/
├── index.html
├── src/
│   ├── main.jsx              # punto de entrada
│   ├── App.jsx                # raíz de la app
│   ├── index.css              # tokens de diseño + estilos globales
│   ├── pages/
│   │   └── Home.jsx           # única página de la maqueta
│   ├── components/
│   │   ├── Navbar.jsx         # encabezado / marquesina + resumen
│   │   ├── AddItemForm.jsx    # formulario para agregar títulos
│   │   ├── FilterBar.jsx      # filtros de tipo/estado + búsqueda
│   │   ├── CatalogGrid.jsx    # grilla de tarjetas
│   │   ├── MovieCard.jsx      # tarjeta individual (película o serie)
│   │   └── EmptyState.jsx     # estado vacío cuando no hay resultados
│   ├── hooks/
│   │   └── useCatalog.js      # estado central + lógica CRUD del catálogo
│   ├── data/
│   │   └── mockData.js        # datos de ejemplo (reemplazo provisional de TMDB)
│   └── services/
│       └── tmdbApi.js         # integración externa planificada (sin implementar)
└── README.md
```

La separación busca que el día que se conecte TMDB solo haya que tocar `services/tmdbApi.js` y `data/mockData.js` (o reemplazar este último), sin que el resto de los componentes cambie.


**Prompt principal usado**

> "Quiero que hagas una maqueta de aplicación para un gestor de películas y series, expansible a futuro, voy a implementar la API de The Movie Database en el futuro, quiero solo lo necesario para poder seguir expandiendo el desarrollo mediante prompts."

**Recomendaciones obtenidas de la IA:**

- Estructura de carpetas separando `components/`, `pages/`, `hooks/`, `data/` y `services/` para que la futura integración con TMDB quede aislada en un solo archivo.
- Modelar los datos de ejemplo (`mockData.js`) con la misma forma que tendría la respuesta real de TMDB, para minimizar cambios cuando se conecte la API.
- Centralizar todo el estado del catálogo (agregar, eliminar, cambiar estado, filtrar) en un único hook (`useCatalog`) en vez de repartirlo entre componentes.
- Una identidad visual propia para el tema (cineclub) en vez de un dashboard genérico: tarjetas con forma de entrada de cine como elemento distintivo.

