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
  },[]);

  const obtenerDatos2= async() =>
  {
    const data2 = await fetch(u+p+'/api/drinks')
    const bebidasP = await data2.json()
    setMenuB(bebidasP)
  }



  return (
  
    <div >
   <Carousel>
      {menuB.map((bebida, index) => {
        return (
     
          <Carousel.Item key={index}  interval={9999}>
<Bebida
            urlb={bebida.urlImage}
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
