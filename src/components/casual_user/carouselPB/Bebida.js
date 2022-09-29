import React from "react";
import "./CarouselPB.css";

const Bebida = (props) => {
  return (
 
    <>
        <h4>Marca de la bebida: {props.brand}</h4>
       
        <img className='imagenBebidaCar' src={props.urlb} alt='xd'/>
          <p>Grado alcohólico: {props.alcoholicGrade}</p>
    <br/>  <br/>
          </>
     
     
  
  );
};

export default Bebida;