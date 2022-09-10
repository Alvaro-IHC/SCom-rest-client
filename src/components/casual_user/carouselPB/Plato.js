import React from "react";


const Plato= (props) => {
  return (
 
    <>
        <h4>Nombre del plato: {props.name}</h4>
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato'+props.id+'.jpg')} alt='xd' width={250} />
        <p>Tipo de plato: {props.type}</p>
      
       
    <br/>  <br/> 
          </>
     
     
  
  );
};

export default Plato;