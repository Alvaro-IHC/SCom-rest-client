import Carousel from 'react-bootstrap/Carousel';

function CarouselC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-1"
         
          alt=""         />
         
        <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        <Carousel.Caption>
       
          <h3>Producto 1</h3>
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={40} />
          <p>Características</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          alt=""
        />
        <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        <Carousel.Caption>
          <h3>Producto 2</h3>
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={40} />
          <p>Características</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          alt=""
        />
        <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        <Carousel.Caption>
          <h3>Producto 3</h3>
          <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={40} />
          <p>
          Características
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;