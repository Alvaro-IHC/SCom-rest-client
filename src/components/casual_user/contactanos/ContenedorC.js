import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContenedorC() {
  return (
    <Container fluid="md">
      <Row>
        <Col>Son las personas que cruzan nuestras puertas las que realmente establecen quiénes somos. Cuéntanos quién eres y cómo podemos darte lo mejor que hayas tenido.</Col>
      
      </Row>
      <br/>
      <Row>
    
        <Col>
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/restauranteImg1.jpg')} alt='xd' width={800} />
        </Col>
      
     
    
      <Col>
      <br/><br/><br/><br/><br/>
      60 Zona Sur, La Paz, ON M5J 1B7, Bolivia <br/>Pedido por teléfono: 2432876 - 77123123<br/>
      Pedido por correo electrónico: <h6> Restaurante@gmail.com</h6><br/>
      </Col>

      
  
  </Row>
    

      <Row><Col></Col> </Row>

    </Container>
  );
}

export default ContenedorC;