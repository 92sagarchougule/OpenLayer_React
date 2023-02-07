import logo from './logo.svg';
import './App.css';

import {
  Map, Layers, layer
} from "react-openlayers";

function App() {
  return (<>
  
  <Map view={{center:[0,0], zoom:2}}>

      <Layers>

        <layer.Tile>

        </layer.Tile>
      </Layers>

    </Map>
    
    <h1> Hello World</h1>

  </>
    

  );
}

export default App;
