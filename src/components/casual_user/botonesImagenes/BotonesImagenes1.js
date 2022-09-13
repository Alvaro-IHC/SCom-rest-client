
import {Navbar} from "react-bootstrap"
import './BotonesImagenes.css';

function BotonesImagenes1() {
  return (
    <Navbar.Brand  href="https://es-la.facebook.com/">
      
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconFacebook.png')} alt='faceb' width={40} />
            
    </Navbar.Brand>




    
  );
}

export default BotonesImagenes1;