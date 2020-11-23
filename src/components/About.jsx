import React from 'react';
import Common from './Common';
import about from '../images/ai2.gif';

const About = () => {
  return (
    <>
    <br/><br/>
    <Common 
    name = "Get Our Service for your business"
    imgsrc={about}
    visit="/contact"
    btname="Get Services"
    />
    </>
  );
}

export default About;
