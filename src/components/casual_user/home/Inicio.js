import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Navbar2 from './Inicio.css';
import Carousel_c from '../carousel_c/Carousel_c'; 
import Maps_1 from '../mapa/Maps_1';

const Inicio = () => {
  return (
    <Table  className='tabla123' striped bordered hover variant="dark">
    <thead>
    <tr>
        
  
        <td  className='casilla_ubicacion'>
          <Maps_1/>
          <h2>Ubicación</h2>
       

        </td>
        <td className='celdas'>
        
        <Carousel_c />

        </td>
        </tr>

        <tr>
        <td colSpan={2} ><h2>24328766-77123123</h2> </td>
   
      </tr>
  
   
    </thead>
 
  </Table>



  )
}

export default Inicio
