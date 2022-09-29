import React from "react";
import "./CarouselPB.css";

const Plato= (props) => {
  return (
 
    <>
        <h4>Nombre del plato: {props.name}</h4>
        <img className='imagenPlatoCar' src={props.urll} alt='xd'/>
        <p>Tipo de plato: {props.type}</p>
      
       
    <br/>  <br/> 
          </>
     
     
  
  );
};

export default Plato;