import Carousel from 'react-bootstrap/Carousel';

function CarouselC() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" alt=""         />
         
   
        <h4>Marca bebida 1</h4>
      
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
        <p>Grado alcohólico: </p>
          <p>Volumen: </p>
          <br/> <br/>
      </Carousel.Item>


      <Carousel.Item>
   
        <img
          className="d-block w-100"
          
          alt=""
        />
              <h4>Marca bebida 2</h4>
              <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
          <p>Grado alcohólico: </p>
          <p>Volumen: </p>
          <br/> <br/>
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          alt=""
        />
           <h4>Marca bebida 3</h4>
           <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={300} />
           <p>Grado alcohólico: </p>
          <p>Volumen: </p>
          <br/> <br/>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;