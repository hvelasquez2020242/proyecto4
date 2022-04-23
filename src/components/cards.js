
import React from 'react'
import '../style-sheets/cards.css'
import noEncontrado from '../images/misterioso.png';
const PokemonThumb = ({id, image, name, type, _callback }) => {
    return (
  
<div className='contenedor'>
<div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt='No se encontro' defaultValue={noEncontrado}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">tipo: {type}</p>
  </div>
</div>
</div>
    )
}

export default PokemonThumb