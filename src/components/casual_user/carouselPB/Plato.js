import React from "react";


const Producto = (props) => {
  return (
 
    <>
        <h4>Nombre plato: {props.nombre}</h4>
       
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+props.imagen+'.jpg')} alt='xd' width={250} />
          <p>Tipo de plato: {props.tipo}</p>
    <br/>  <br/>
          </>
     
     
  
  );
};

export default Producto;