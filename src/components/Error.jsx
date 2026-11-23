import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Error" style={{ width: '100px', height: '100px' }} />
            <h1 style={{ fontSize: '24px', marginTop: '10px' }}>¡Ups! Página no encontrada</h1>
            <p style={{ fontSize: '16px', color: '#666' }}>La página que estás buscando no existe.</p>
            <Link to="/" className="btn btn-dark" style={{ marginTop: '20px', textDecoration: 'none', padding: '5px 10px', backgroundColor: '#333', color: '#fff', borderRadius: '5px' }}>
                Volver a la página principal
            </Link>
        </div>
    )
}

export default Error