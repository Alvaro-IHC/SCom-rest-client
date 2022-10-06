import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import settings from '../../../settings.json';
import Form from 'react-bootstrap/Form';
import './PreguntasFrecuentes.css';
import React,{ useState} from 'react'
function AdicionarPreg() {

  const [preguntanew, setPreguntanew] = useState("");

    const u = settings.url;
    const p = settings.puerto;
    const enviarPregunta = async () => {
   
    
      const nuevpreg = {
        question: preguntanew,
      };
      if (preguntanew === "") {
        return window.alert("Inserte su pregunta");
      }
   
   await fetch(u + p + "/api/question-answers", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(nuevpreg),
      });
      if (preguntanew !== "") {
        window.location.assign(u + "3000/preguntas_frecuentes");
        return window.alert("Se envió su pregunta con éxito");
        
      }
    };

    
  return (
    <Container>
      <Row>
      
        <Col xs={12}>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Envíe su pregunta</Form.Label>
        <Form.Control onChange={(event) => setPreguntanew(event.target.value)} as="textarea" rows={3} columns={20}/>
      </Form.Group>

  
     
    </Form>
 
        </Col>
        </Row>
        <Row>
       
        <Col className="alinearderbot"  xs={12}><Button className="botonpreguntaf" href="#" variant="secondary" onClick={enviarPregunta} >{" "}Enviar pregunta{" "}</Button> </Col>
        </Row>

     
    </Container>
  );
}

export default AdicionarPreg;