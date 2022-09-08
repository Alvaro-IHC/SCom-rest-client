import React, { useState } from "react";
import Producto from "./Plato";
import Carousel from 'react-bootstrap/Carousel';

const CarouselPruebas = () => {
  const [productos,setProductos] = useState([
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
      {productos.map((producto) => {
        return (
     
          <Carousel.Item  interval={9999}>
<Producto
            key={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            tipo={producto.tipo}
          />

          </Carousel.Item>
         
      
        );
      })}

</Carousel>
    </div>

   
   
  );
};
export default CarouselPruebas
