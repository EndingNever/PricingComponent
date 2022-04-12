import { useState } from 'react';
import './App.css';
import Basic from './Components/Basic/Basic';
import Pricing from './Components/OurPricing/Pricing';
import { options } from './Components/Options/Options';

function App() {
  const [annually, setAnnually] = useState(false)
  const [slider, setSlider] = useState('right-action')


  return (
    <div className="App">
      <div className="pricing-component-container">
        <Pricing
          annually={annually}
          setAnnually={setAnnually}
          slider={slider} 
          setSlider={setSlider}
          />
      </div>
      <div className="card-components-container">
        <Basic options={options} slider={slider} annually={annually} />
      </div>
    </div>
  );
}

export default App;