
import {Navbar} from "react-bootstrap"
import './BotonesImagenes.css';

function BotonesImagenes3() {
  return (
    <Navbar.Brand  href="https://play.google.com/">
      
      <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconPlayStore.png')} alt='faceb' width={200} />
            
    </Navbar.Brand>




    
  );
}

export default BotonesImagenes3;