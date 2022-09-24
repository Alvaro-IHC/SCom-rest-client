import React, { useState, useEffect } from "react";
import Plato from "./Plato";
import Carousel from 'react-bootstrap/Carousel';
import settings from '../../../settings.json';

const CarouselPlatos = () => {
  const p = settings.puerto;
  const u = settings.url;
  const [menuP,setMenuP] = useState([])
  useEffect(() => {
     obtenerDatos()
  });

  const obtenerDatos= async() =>
  {
    const data = await fetch(u+p+'/api/foods')
    const platosP = await data.json()
    setMenuP(platosP)
  }

  return (
  
    <div >
   <Carousel>
      {menuP.map((plato,index) => {
        return (
     
          <Carousel.Item key={index}  interval={9999}>
<Plato id={plato.id} name={plato.name} type={plato.type}/>
          </Carousel.Item>
        );

      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselPlatos
