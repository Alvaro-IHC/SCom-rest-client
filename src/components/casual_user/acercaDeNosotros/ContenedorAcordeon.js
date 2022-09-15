import Accordion from 'react-bootstrap/Accordion';
import './AcercaDeNosotros.css';
function ContenedorAcordeon(props) {
    const tit = props.titulo;
    const cont = props.contenido;
  return (
    <Accordion >
      <Accordion.Item >
        <Accordion.Header className='centrotit'>{tit}</Accordion.Header>
        <Accordion.Body className='rellenoan'>
        {cont}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ContenedorAcordeon;