export const products = [
    {
        id: 1,
        name: "Bomba industrial",
        description: "Bomba industrial de alta calidad para uso en entornos industriales.",
        price: 450000,
        category: "Perifericos",
        img: "/images/bomba_industrial.webp",
        stock: 10
    },
    {
        id: 2,
        name: "Motor eléctrico",
        description: "Motor eléctrico de alta calidad para uso en entornos industriales.",
        price: 250000,
        category: "Electricidad",
        img: "/images/motor_electrico.webp",
        stock: 5
    },
    {
        id: 3,
        name: "Sensores industriales",
        description: "Sensores industriales de alta calidad para uso en entornos industriales.",
        price: 150000,
        category: "Perifericos",
        img: "/images/sensores_industriales.webp",
        stock: 15
    },
    {
        id: 4,
        name: "Tablero eléctrico",
        description: "Tablero eléctrico de alta calidad para uso en entornos industriales.",
        price: 350000,
        category: "Equipos",
        img: "/images/tablero_electrico.webp",
        stock: 20
    },
    {
        id: 5,
        name: "Equipos de mantenimiento",
        description: "Equipos de mantenimiento de alta calidad para uso en entornos industriales.",
        price: 550000,
        category: "Equipos",
        img: "/images/equipos_mantenimiento.webp",
        stock: 20
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000)
    })
}