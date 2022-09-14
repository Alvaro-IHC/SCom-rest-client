import React from 'react'
import Table from 'react-bootstrap/Table';

import './Inicio.css';

import CarouselPlatos from '../carouselPB/CarouselPlatos';
import CarouselBebidas from '../carouselPB/CarouselBebidas';
import Maps1 from '../mapa/Maps1';
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
//import Cartas from '../cartasDeDestacados/Cartas';




const Inicio = () => {
  return (


    <Table  responsive className='tabla123' striped bordered hover variant="dark">
    <thead>
    <tr>
        
  
        <td  className='casilla_ubicacion'>
        <h2>Ubicación</h2>
          <Maps1/>
         
       

        </td>
        <td className='celdas'>
     {/*   
    <h2>Destacados</h2>
        <Cartas />
      <br/>
  */}
       

      <h2>Platos de comida</h2>
        <CarouselPlatos />

        <h2>Bebidas</h2>
        <CarouselBebidas />

      

        </td>
        </tr>

        <tr>
        <td colSpan={2} > <ContenedorInferior/> </td>
   
      </tr>
  
   
    </thead>
 
  </Table>



  )
}

export default Inicio
