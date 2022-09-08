import Carousel from 'react-bootstrap/Carousel';

function CarouselC() {
  return (
    
    <Carousel>
      <Carousel.Item interval={9999}>
        <img
          className="d-block w-100" alt=""         />
         
   
        <h4>Nombre plato 1</h4>
      
        <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={250} />
        
          <p>Tipo de plato: </p>
    <br/> <br/>
      </Carousel.Item>


      <Carousel.Item interval={9999}>
   
        <img
          className="d-block w-100"
          
          alt=""
        />
              <h4>Nombre plato 2</h4>
              <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={250} />
       
          <p>Tipo de plato: </p>
          <br/>  <br/>
    
      </Carousel.Item>
      <Carousel.Item interval={9999}>
        <img
          className="d-block w-100"
         
          alt=""
        />
           <h4>Nombre plato 3</h4>
           <img className='imagen-logo' src={require('../../../assets/images/user_casual/iconoRest.png')} alt='xd' width={250} />
       
          <p>Tipo de plato: </p>
          <br/>  <br/>
   
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselC;


