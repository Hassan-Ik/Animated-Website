import React from 'react';
import Common from './Common';
import service from '../images/service.gif';

function Service() {
  return (
    <Common 
    name = "Get Our Service for your business"
    imgsrc={service}
    visit="/home"
    btname="Get Services"
     />
  );
}

export default Service;
