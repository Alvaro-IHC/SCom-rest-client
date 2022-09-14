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
    

    <td  className='titulopf'>
    
   <br/>
    <h1> Preguntas frecuentes</h1>
   

    </td>
    
    </tr><tr>
    <td className='celdaspf' > 
    <Container>
      <Row >
        <Col className='rellenopf'>Pregunta 1: ¿Es posible pedir platos con un mes de anticipación? </Col>
      </Row>
      <Row>
      <Col className='rellenopf2'> Respuesta: Si es posible hacerlo mediante nuestra aplicación movil.</Col> 
      </Row>
    </Container>
    <br/>   <br/>
    <Container>
      <Row >
        <Col className='rellenopf'>Pregunta 1: ¿Es posible pedir platos con un mes de anticipación? </Col>
      </Row>
      <Row>
      <Col className='rellenopf2'> Respuesta: Si es posible hacerlo mediante nuestra aplicación movil.</Col> 
      </Row>
    </Container>
 
    
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
