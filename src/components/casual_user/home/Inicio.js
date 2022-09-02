import React from 'react'
import Table from 'react-bootstrap/Table';

import './Inicio.css';
import CarouselC from '../carousel_c/CarouselC'; 
import Maps1 from '../mapa/Maps1';

const Inicio = () => {
  return (
    <Table  className='tabla123' striped bordered hover variant="dark">
    <thead>
    <tr>
        
  
        <td  className='casilla_ubicacion'>
          <Maps1/>
          <h2>Ubicación</h2>
       

        </td>
        <td className='celdas'>
        
        <CarouselC />

        </td>
        </tr>

        <tr>
        <td colSpan={2} ><h2>2432876-77123123</h2> </td>
   
      </tr>
  
   
    </thead>
 
  </Table>



  )
}

export default Inicio
