
import {Navbar} from "react-bootstrap"
import './BotonesImagenes.css';

function BotonesImagenes2() {
  return (
    <Navbar.Brand  href="https://www.instagram.com/">
      
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconInstagram.png')} alt='faceb' width={40} />
            
    </Navbar.Brand>




    
  );
}

export default BotonesImagenes2;