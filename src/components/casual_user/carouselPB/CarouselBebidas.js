import React, { useState, useEffect } from "react";
import Bebida from "./Bebida";
import Carousel from 'react-bootstrap/Carousel';
import settings from '../../../settings.json';

const CarouselBebidas = () => {
  const p = settings.puerto;
  const u = settings.url;

  const [menuB,setMenuB] = useState([])
  useEffect(() => {
     obtenerDatos2()
  }, []);

  const obtenerDatos2= async() =>
  {
    const data2 = await fetch(u+p+'/api/drinks')
    const bebidasP = await data2.json()
    setMenuB(bebidasP)
  }

  const cantidadTotalDePlatos = 3;

  return (
  
    <div >
   <Carousel>
      {menuB.map((bebida) => {
        return (
     
          <Carousel.Item  interval={9999}>
<Bebida
            id={bebida.id-cantidadTotalDePlatos}
            brand={bebida.brand}
            alcoholicGrade={bebida.alcoholicGrade}
         
          />

          </Carousel.Item>
         
      
        );
      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselBebidas
