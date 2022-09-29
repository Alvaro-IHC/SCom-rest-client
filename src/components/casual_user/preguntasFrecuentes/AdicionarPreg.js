import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import settings from '../../../settings.json';
function AdicionarPreg() {
    const u = settings.url;
    async function volverPag(event) {
      event.preventDefault();
  
      window.location.assign(u+"3000/");
    }
  return (
    <Container>
      <Row>
      <Col xs={1}>  </Col>
        <Col xs={10}>  </Col>
     
        <Col xs={1}><Button href="#"  onClick={volverPag} size="lg" variant="light">{" "}Volver{" "}</Button></Col>
      </Row>
    </Container>
  );
}

export default AdicionarPreg;