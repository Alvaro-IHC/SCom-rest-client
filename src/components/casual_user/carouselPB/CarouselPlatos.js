import React, { useState, useEffect } from "react";
import Plato from "./Plato";
import Carousel from 'react-bootstrap/Carousel';

const CarouselPlatos = () => {
  const puerto = "9081";
  const [menuP,setMenuP] = useState([])
  useEffect(() => {
     obtenerDatos()
  }, []);

  const obtenerDatos= async() =>
  {
    const data = await fetch('http://localhost:'+puerto+'/api/foods')
    const platosP = await data.json()
    setMenuP(platosP)
  }

  return (
  
    <div >
   <Carousel>
      {menuP.map((plato) => {
        return (
     
          <Carousel.Item  interval={9999}>
<Plato
            id={plato.id}
            name={plato.name}
            type={plato.type}
         
          />

          </Carousel.Item>
         
      
        );
      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselPlatos
