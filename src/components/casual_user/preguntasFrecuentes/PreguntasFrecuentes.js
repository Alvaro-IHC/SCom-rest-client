import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContenedorInferior from '../contenedorInferior/ContenedorInferior';
import Table from 'react-bootstrap/Table';
import './PreguntasFrecuentes.css';
const PreguntasFrecuentes = () => {
  return (
    <div>
    

<Table responsive className='tabla1234' striped bordered hover variant="dark">
<thead>
<tr>
    

    <td  className='casilla_ubicacion'>
    
   
    <h1> Preguntas frecuentes</h1>
   

    </td>
    
    </tr><tr>
    <td className='celdas' > 
    
 
    
    </td>
    </tr><tr>
    <td  > <ContenedorInferior/> </td>
  </tr>


</thead>

</Table>


</div>


  )
}

export default PreguntasFrecuentes
