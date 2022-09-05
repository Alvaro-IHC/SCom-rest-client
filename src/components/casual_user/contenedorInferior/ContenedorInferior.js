import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BotonesImagenes1 from '../botonesImagenes/BotonesImagenes1';
import BotonesImagenes2 from '../botonesImagenes/BotonesImagenes2';

function ContenedorInferior() {
  return (
    <Container fluid="md">
   
      <Row>
      <Col xs={6}>
     
     60 Zona Sur, La Paz, Bolivia. Teléfonos: 2432876 - 77123123

     
     </Col>
      <Col xs={1}></Col>
        <Col xs={5}>
        Encuentranos también por:  <BotonesImagenes1/>   <BotonesImagenes2/>
        </Col>
       
      
     
    
      

      
  
  </Row>
    

      <Row><Col></Col> </Row>

    </Container>
  );
}

export default ContenedorInferior;