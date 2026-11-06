# Industrial Multiservicios

Sitio web de mantenimiento industrial desarrollado con React como proyecto del curso **React JS (comisión 93510)**. Muestra un catálogo de productos en tarjetas interactivas, con navegación y carrito.

## Funcionalidades

- Navbar responsive con React Bootstrap y widget de carrito
- Catálogo de productos en tarjetas, renderizadas con props
- Contador de cantidad en cada tarjeta (`useState`)
- Botón de favorito en cada tarjeta
- Grilla adaptable a distintos tamaños de pantalla
- Footer

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
│       ├── motor_electrico.webp
│       ├── sensores_industriales.webp
│       └── tablero_electrico.webp
└── src/
    ├── assets/
    ├── components/
    │   ├── CartWidget.jsx / .css
    │   ├── Footer.jsx
    │   ├── ItemCount.jsx / .css
    │   ├── ItemListContainer.jsx / .css
    │   ├── Navbar.jsx
    │   └── ProductCard.jsx / .css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Autor

Alberto German Espinosa
[germanespinosa1987](https://github.com/germanespinosa1987)