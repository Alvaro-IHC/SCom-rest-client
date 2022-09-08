import React from 'react'
import Table from 'react-bootstrap/Table';

import './Inicio.css';

import CarouselPruebas from '../carouselPB/CarouselPlatos';
import Maps1 from '../mapa/Maps1';
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';


const Inicio = () => {
  return (
    <Table  className='tabla123' striped bordered hover variant="dark">
    <thead>
    <tr>
        
  
        <td  className='casilla_ubicacion'>
        <h2>Ubicación</h2>
          <Maps1/>
         
       

        </td>
        <td className='celdas'>
        
     

        <h2>Platos de comida</h2>
        <CarouselPruebas />

      

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
