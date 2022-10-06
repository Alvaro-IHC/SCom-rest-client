import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './Contactanos.css';

function ContenedorC() {
  return (
    <Container fluid="md">
      <Row>
        <Col>Son las personas que cruzan nuestras puertas las que realmente establecen quiénes somos. Cuéntanos quién eres y cómo podemos darte lo mejor que hayas tenido.</Col>
      
      </Row>
      <br/>
      <Row>
    
        <Col className='centrarrcc'>
          <br/><br/>
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/restauranteImg1.jpg')} alt='xd' width={600} />
        </Col>
      
     
    
      <Col>

      <Table responsive className='tabla12345' striped bordered hover variant="dark">
<thead>
    <tr className='titulosetq'>
    <td><h4>Nombre</h4></td>
    <td><h4>Correo electrónico</h4></td>
    <td><h4>Nro. de celular</h4></td>
    </tr>
    
    <tr className='titulosetq'>
    <td ><h6>Alvaro Israel Huanca Condori</h6></td>
    <td ><h6>alva0741@gmail.com</h6></td>
    <td ><h6>69814655</h6></td>
    </tr>
    
    <tr className='titulosetq'>
    <td ><h6>Carlos Antonio Polo Sanchez</h6></td>
    <td ><h6>carlospolo238@gmail.com</h6></td>
    <td ><h6>60502860</h6></td>
    </tr>

    <tr className='titulosetq'>
    <td ><h6>Augusto Fabian Rios Choque</h6></td>
    <td ><h6>ariosc@fcpn.edu.bo</h6></td>
    <td ><h6>69342311</h6></td>
    </tr>

    <tr className='titulosetq'>
    <td ><h6>Jimmy Armando Valero Tarqui</h6></td>
    <td ><h6>gotenboy94@gmail.com</h6></td>
    <td ><h6>77552863</h6></td>
    </tr>

    <tr className='titulosetq'>
    <td ><h6>Andres John Velarde Quispe</h6></td>
    <td ><h6>avelardeq@fcpn.edu.bo</h6></td>
    <td ><h6>73264450</h6></td>
    </tr>


</thead>

</Table>

      </Col>

      
  
  </Row>
    

      

    </Container>
  );
}

export default ContenedorC;