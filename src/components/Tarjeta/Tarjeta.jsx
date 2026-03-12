import './Tarjeta.css'

const Tarjeta = ({ 
  titulo = 'Título de la tarjeta',
  descripcion = 'Esta es una descripción de la tarjeta',
  imagen = 'https://via.placeholder.com/300x200'
}) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta__imagen" />
      <div className="tarjeta__contenido">
        <h3 className="tarjeta__titulo">{titulo}</h3>
        <p className="tarjeta__descripcion">{descripcion}</p>
      </div>
    </div>
  )
}

export default Tarjeta