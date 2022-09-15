import React from 'react'
import ContenedorC from './ContenedorC'
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div>


        <Table responsive className='tabla12345' striped bordered hover variant="dark">
<thead>
<tr>
    

    <td  className='tituloco'>
    
   
   <h1>Contáctanos</h1>
   

    </td>
    
    </tr><tr>
    <td className='celdasco' >

  
    <ContenedorC/>

    </td>
    </tr><tr>
    <td  > <ContenedorInferior/> </td>
  </tr>


</thead>

</Table>


    </div>
        
        
  )
}

export default Contactanos
