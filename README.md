# Industrial Multiservicios

Sitio web de mantenimiento industrial desarrollado con React como proyecto del curso **React JS (comisión 93510)**. Muestra un catálogo de productos en tarjetas interactivas, con navegación entre páginas (React Router), filtro por categoría, detalle de producto y widget de carrito.

## Funcionalidades

- Navbar responsive con React Bootstrap, links a categorías y widget de carrito (`CartWidget`, por ahora solo visual, con una cantidad fija)
- Navegación con React Router, sin recargar la página
- Catálogo de productos cargado de forma asíncrona (promesa + `useEffect`), con estados de carga y error
- Filtro de productos por categoría desde el navbar
- Página de detalle de cada producto (`/item/:id`)
- Página de error 404 para rutas que no existen, con link para volver al inicio
- Listado dinámico con `.map()`, separado en `ItemListContainer`, `ItemList` e `Item`
- Contador de cantidad en cada tarjeta (`useState`)
- Botón de favorito en cada tarjeta
- Grilla adaptable a distintos tamaños de pantalla
- Footer

## Navegación con React Router

La navegación se hace con `react-router-dom`. Las rutas se definen en `App.jsx`:

| Ruta | Componente | Qué muestra |
|---|---|---|
| `/` | `ItemListContainer` | Todos los productos |
| `/category/:categoryId` | `ItemListContainer` | Productos de una categoría |
| `/item/:id` | `ItemDetailContainer` | Detalle de un producto |
| `*` | `Error` | Página 404 para cualquier ruta que no exista |

```jsx
<Routes>
    <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi App!" subtitle="Nuestros productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estas en la categoria:" subtitle="Productos disponibles:" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
</Routes>
```

### Filtro por categoría

Los links del navbar apuntan a `/category/<categoria>`. Las categorías disponibles son **Perifericos**, **Electricidad** y **Equipos**.

`ItemListContainer` lee el parámetro de la URL con `useParams` y filtra los productos. Si no hay categoría (ruta `/`), muestra todos. Como `categoryId` está en el array de dependencias, el `useEffect` se vuelve a ejecutar cada vez que cambia la categoría:

```jsx
const { categoryId } = useParams()

useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getProducts()
            const filtered = categoryId
                ? data.filter((p) => p.category === categoryId)
                : data
            setData(filtered)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchProducts()
}, [categoryId])
```

### Detalle de producto

Cada card tiene un botón que navega a `/item/:id`. `ItemDetailContainer` toma el `id` de la URL con `useParams` y pide ese producto con `getProductById`:

```jsx
const { id } = useParams()

useEffect(() => {
    getProductById(id)
        .then((p) => setProduct(p))
        .catch((e) => setError(e.message))
}, [id])
```

`useParams` devuelve el `id` siempre como string, mientras que en los mocks es un número. Por eso `getProductById` compara ambos como string:

```js
const product = products.find((p) => String(p.id) === String(productId))
```

Si el producto no existe, la promesa se rechaza con el mensaje "Producto no encontrado", que se muestra en pantalla.

## Carga asíncrona de productos

Los productos no están escritos en el JSX: vienen de promesas que simulan una API.

### Las promesas

En `src/mocks/AsyncMoks.js`, la función `getProducts` devuelve una `Promise` que se resuelve a los 2 segundos con el array de productos:

```js
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000)
    })
}
```

En `src/services/getProductById.js`, `getProductById` busca un producto por id y lo resuelve (o rechaza si no existe), también con 2 segundos de demora.

El `setTimeout` simula el tiempo de respuesta de un servidor. Si una promesa se rechaza (`reject`), el error se captura en el componente.

### Estados de los componentes

| Estado | Para qué sirve |
|---|---|
| `data` / `product` | Guarda los productos (o el producto) obtenidos |
| `loading` | Indica si la carga está en curso |
| `error` | Guarda el mensaje si algo falla |

En el listado, el bloque `try/catch/finally` garantiza que `loading` siempre vuelva a `false`, así la pantalla nunca queda cargando para siempre.

### Separación de responsabilidades

- `ItemListContainer`: obtiene los datos, filtra por categoría y maneja los estados de carga y error.
- `ItemList`: recibe los productos por props y los recorre con `.map()`, usando el `id` como `key`.
- `Item`: muestra la card de un producto.
- `ItemDetailContainer`: obtiene un producto según el `id` de la URL.
- `ItemDetail`: muestra el detalle de ese producto.

## Tecnologías

- React
- React Router
- Vite
- React Bootstrap y Bootstrap
- CSS

## Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/germanespinosa1987/industrial-multiservicios-93510.git
   ```
2. Entrar a la carpeta e instalar las dependencias:
   ```bash
   cd industrial-multiservicios-93510
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Estructura del proyecto

```
industrial-multiservicios-93510/
├── public/
│   └── images/
│       ├── bomba_industrial.webp
│       ├── equipos_mantenimiento.webp
│       ├── motor_electrico.webp
│       ├── sensores_industriales.webp
│       └── tablero_electrico.webp
└── src/
    ├── assets/
    ├── components/
    │   ├── CartWidget.jsx / .css
    │   ├── Error.jsx
    │   ├── Footer.jsx
    │   ├── Item.jsx / .css
    │   ├── ItemCount.jsx / .css
    │   ├── ItemDetail.jsx
    │   ├── ItemDetailContainer.jsx
    │   ├── ItemList.jsx
    │   ├── ItemListContainer.jsx / .css
    │   └── Navbar.jsx
    ├── mocks/
    │   └── AsyncMoks.js
    ├── services/
    │   └── getProductById.js
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Autor

German Espinosa
[germanespinosa1987](https://github.com/germanespinosa1987)
