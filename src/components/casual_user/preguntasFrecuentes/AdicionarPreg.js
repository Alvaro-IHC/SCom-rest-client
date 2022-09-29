import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import settings from '../../../settings.json';
import Form from 'react-bootstrap/Form';
import './PreguntasFrecuentes.css';

function AdicionarPreg() {
    const u = settings.url;
    async function volverPag(event) {
      event.preventDefault();
  
      window.location.assign(u+"3000/");
    }
  return (
    <Container>
      <Row>
      
        <Col xs={12}>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>¿En que le podemos ayudar?</Form.Label>
        <Form.Control as="textarea" rows={3} columns={20}/>
      </Form.Group>

  
     
    </Form>
 
        </Col>
        </Row>
        <Row>
       
        <Col className="alinearderbot"  xs={12}><Button className="botonpreguntaf" href="#" variant="secondary" onClick={volverPag} >{" "}Enviar pregunta{" "}</Button> </Col>
        </Row>

     
    </Container>
  );
}

export default AdicionarPreg;