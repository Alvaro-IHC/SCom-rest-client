import React from "react";


const Bebida = (props) => {
  return (
 
    <>
        <h4>Marca de la bebida: {props.brand}</h4>
       
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida'+props.id+'.jpg')} alt='xd' width={250} />
          <p>Grado alcohólico: {props.alcoholicGrade}</p>
    <br/>  <br/>
          </>
     
     
  
  );
};

export default Bebida;