import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cartas.css';

function Cartas() {
  return (
    <CardGroup>


      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato1.jpg')} alt='xd' width={400} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: </Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Calificación: 4/5</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/plato2.jpg')} alt='xd' width={355} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Nombre del plato: </Card.Title>
          <Card.Text className="letrasCartas">Tipo de plato: </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Calificación: 2/5</small>
        </Card.Footer>
      </Card>

      <Card>
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/bebida1.jpg')} alt='xd' width={320} />
        <Card.Body>
          <Card.Title className="letrasCartas2">Bebida: </Card.Title>
          <Card.Text className="letrasCartas">Grado alcohólico: </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Calificación: 5/5</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Cartas;