# Industrial Multiservicios

Sitio web de mantenimiento industrial desarrollado con React como proyecto del curso **React JS (comisión 93510)**. Muestra un catálogo de productos en tarjetas interactivas, con navegación y carrito.

## Funcionalidades

- Navbar responsive con React Bootstrap y widget de carrito
- Catálogo de productos cargado de forma asíncrona (promesa + `useEffect`), con estados de carga y error
- Listado dinámico con `.map()`, separado en `ItemListContainer`, `ItemList` e `Item`
- Contador de cantidad en cada tarjeta (`useState`)
- Botón de favorito en cada tarjeta
- Grilla adaptable a distintos tamaños de pantalla
- Footer

## Carga asíncrona de productos

Los productos no están escritos en el JSX: vienen de una promesa que simula una API.

### La promesa

En `src/mocks/AsyncMoks.js`, la función `getProducts` devuelve una `Promise` que se resuelve a los 2 segundos con el array de productos:

```js
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000)
    })
}
```

El `setTimeout` simula el tiempo de respuesta de un servidor. Si la promesa se rechazara (`reject`), el error se captura en el componente.

### Integración con `useEffect`

`ItemListContainer` pide los productos una sola vez, cuando el componente se monta. Para eso usa `useEffect` con el array de dependencias vacío (`[]`) y una función `async` con `try/catch/finally`:

```jsx
useEffect(() => {
    const fetchProducts = async () => {
        try {
            const products = await getProducts()
            setItems(products)
        } catch (err) {
            setError("No pudimos cargar los productos.")
        } finally {
            setLoading(false)
        }
    }
    fetchProducts()
}, [])
```

Flujo completo:

1. El componente se renderiza por primera vez con `items = []` y `loading = true`, y muestra "Cargando productos...".
2. Después del primer render, `useEffect` ejecuta `fetchProducts`.
3. `await` espera a que la promesa se resuelva (2 segundos).
4. Si sale bien, los productos se guardan en el estado `items` y React vuelve a renderizar.
5. Si falla, se guarda un mensaje en `error`.
6. En ambos casos, `finally` pone `loading` en `false`, así que la pantalla nunca queda cargando para siempre.

### Estados del componente

| Estado | Para qué sirve |
|---|---|
| `items` | Guarda los productos obtenidos |
| `loading` | Indica si la carga está en curso |
| `error` | Guarda el mensaje si algo falla |

### Separación de responsabilidades

- `ItemListContainer`: obtiene los datos y maneja los estados de carga y error.
- `ItemList`: recibe los productos por props y los recorre con `.map()`, usando el `id` como `key`.
- `Item`: muestra la card de un producto.

## Tecnologías

- React
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
|       ├── equipos_mantenimiento.webp
│       ├── motor_electrico.webp
│       ├── sensores_industriales.webp
│       └── tablero_electrico.webp
└── src/
    ├── assets/
    ├── components/
    │   ├── CartWidget.jsx / .css
    │   ├── Footer.jsx
    │   ├── Item.jsx / .css
    │   ├── ItemCount.jsx / .css
    |   ├── ItemList.jsx
    │   ├── ItemListContainer.jsx / .css
    │   └── Navbar.jsx
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Autor

German Espinosa
[germanespinosa1987](https://github.com/germanespinosa1987)