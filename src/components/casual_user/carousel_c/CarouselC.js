import Carousel from 'react-bootstrap/Carousel';

function CarouselC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" alt=""         />
         
   
        <h3>Nombre Producto 1</h3>
      
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
        <p>Características</p>
    <br/>
      </Carousel.Item>


      <Carousel.Item>
   
        <img
          className="d-block w-100"
          
          alt=""
        />
              <h3>Nombre Producto 2</h3>
              <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
          <p>Características</p>
          <br/>
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          alt=""
        />
           <h3>Nombre Producto 3</h3>
           <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
          <p>
          Características
          </p>
          <br/>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;