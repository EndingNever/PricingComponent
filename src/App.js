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
        <Pricing
          annually={annually}
          setAnnually={setAnnually}
          slider={slider}
          setSlider={setSlider}
        />
        <Basic
          options={options}
          slider={slider}
          annually={annually}
        />
    </div>
  );
}

export default App;