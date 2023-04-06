import React from 'react';
import  {Carousel}  from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";




function slider() {
  return (
    <div>
    
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner2.png"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner3.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    
   
    </div>
  );
}

export default slider;