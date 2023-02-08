import React from 'react';

import {
    Map, Layers, layer
  } from "react-openlayers";

import MapLayer from './MapLayer';

import './MainMap.css';



function MainMap(){

    return (<>
    
        <Map view={{center:[261720, 5951081], zoom:5}}>


      
            <MapLayer />

         
      
          </Map>
          
      
        </>
          
      
        );
      

}


   
  
  export default MainMap;