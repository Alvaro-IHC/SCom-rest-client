import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PreguntasFrecuentes.css';
const ContenedorPyR = (props) => {
   
    const pregunta = props.preg;
    const respuesta = props.resp;
  return (
    <div>
    <br/>   
    <Container>
      <Row >
        <Col className='rellenopf'>Pregunta: <p className='rellenopf2'>{pregunta} </p></Col>
      </Row>
      <Row>
      <Col className='rellenopf'> Respuesta: <p className='rellenopf3'>{respuesta}.</p></Col> 
      </Row>
    </Container>
    <br/> 
    </div>
  );
}

export default ContenedorPyR