import React, { useState } from "react";
import Plato from "./Plato";
import Carousel from 'react-bootstrap/Carousel';

const CarouselPlatos = () => {
  const [platos,setPlatos] = useState([
    {
      id: 1,
      nombre: "silpancho",
      tipo: "primero",
      imagen:1,
     
    },
    {
      id: 2,
      nombre: "milanesa",
      tipo: "segundo",
      imagen:2,
     
    },
    {
      id: 3,
      nombre: "pique macho",
      tipo: "tercero",
      imagen:3,
     
    },
  
  ]);

  return (
   




    <div >
   <Carousel>
      {platos.map((plato) => {
        return (
     
          <Carousel.Item  interval={9999}>
<Plato
            key={plato.id}
            nombre={plato.nombre}
            imagen={plato.imagen}
            tipo={plato.tipo}
          />

          </Carousel.Item>
         
      
        );
      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselPlatos
