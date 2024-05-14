import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import slide2 from './Images/Slide2.png'
import slide3 from './Images/Slide3.png'
import MustReads from '../Components/MustReads';

function Home() {
  return (
    <>
    <Carousel>
      <CarouselItem>
        <img style={{width:"100%", height: "500px"}} src={slide2} alt="Welcome to BookStop" />
      </CarouselItem>
      <CarouselItem>
      <img style={{width:"100%", height: "500px"}} src={slide3} alt="Your One Stop for all things Books" />
      </CarouselItem>
    </Carousel>
    <MustReads/>
    </>
  );
}

export default Home;