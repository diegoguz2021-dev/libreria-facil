import './Cargando.css'

const Cargando = ({ color = 'azul' }) => {
  return (
    <div className={`cargando cargando--${color}`}>
      <div className="cargando__spinner"></div>
    </div>
  )
}

export default Cargando