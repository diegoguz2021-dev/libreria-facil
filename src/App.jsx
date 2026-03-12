import { Boton, Tarjeta, Cargando } from './index'
import { useState } from 'react'
import './App.css'

function App() {
  const [cargando, setCargando] = useState(false)

  const handleClick = () => {
    setCargando(true)
    setTimeout(() => setCargando(false), 2000)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📚 Prueba de mi librería</h1>
      
      <h2>Botones:</h2>
      <Boton texto="Botón Azul" color="azul" />
      <Boton texto="Botón Verde" color="verde" />
      <Boton texto="Botón Rojo" color="rojo" />
      <Boton texto="Botón Amarillo" color="amarillo" />

      <h2>Botón con acción:</h2>
      <Boton texto="Cargar" color="verde" onClick={handleClick} />
      {cargando && <Cargando color="verde" />}

      <h2>Tarjetas:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Tarjeta 
          titulo="Mi primera tarjeta"
          descripcion="Esta tarjeta es muy bonita"
        />
        <Tarjeta 
          titulo="Otra tarjeta"
          descripcion="Con diferentes colores"
          imagen="https://via.placeholder.com/300x200/2ecc71/ffffff?text=Ejemplo"
        />
      </div>

      <h2>Cargando:</h2>
      <Cargando color="azul" />
      <Cargando color="verde" />
    </div>
  )
}

export default App