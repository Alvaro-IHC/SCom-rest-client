import React from "react";


const Bebida = (props) => {
  return (
 
    <>
        <h4>Nombre bebida: {props.nombre}</h4>
       
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida'+props.imagen+'.jpg')} alt='xd' width={250} />
          <p>Grado alcohólico: {props.grado_alcoholico}</p>
    <br/>  <br/>
          </>
     
     
  
  );
};

export default Bebida;