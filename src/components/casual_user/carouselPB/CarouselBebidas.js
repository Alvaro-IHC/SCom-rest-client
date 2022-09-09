import React, { useState } from "react";
import Bebida from "./Bebida";
import Carousel from 'react-bootstrap/Carousel';

const CarouselBebidas = () => {
  const [bebidas,setBebidas] = useState([
    {
      id: 1,
      nombre: "wisky",
      grado_alcoholico: "80%",
      imagen:1,
     
    },
    {
      id: 2,
      nombre: "vodka",
      grado_alcoholico: "90%",
      imagen:2,
     
    },
    {
      id: 3,
      nombre: "agua",
      grado_alcoholico: "0%",
      imagen:3,
     
    },
  
  ]);

  return (
   




    <div >
   <Carousel>
      {bebidas.map((bebida) => {
        return (
     
          <Carousel.Item  interval={9999}>
<Bebida
            key={bebida.id}
            nombre={bebida.nombre}
            imagen={bebida.imagen}
            grado_alcoholico={bebida.grado_alcoholico}
          />

          </Carousel.Item>
         
      
        );
      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselBebidas
