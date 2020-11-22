import React from 'react';
import ai from '../images/ai.gif';
import Common from './Common'; 

const Home = () => {
  return (
    <Common
    name = "Grow you Business with"
    imgsrc={ai}
    visit="/service"
    btname="Get Started"
     />
  );
}

export default Home;
