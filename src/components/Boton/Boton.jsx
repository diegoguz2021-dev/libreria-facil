import './Boton.css'

const Boton = ({ 
  texto = 'Botón', 
  color = 'azul',
  onClick = () => {} 
}) => {
  return (
    <button 
      className={`boton boton--${color}`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}

export default Boton