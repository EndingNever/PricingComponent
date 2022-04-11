import './App.css';
import Basic from './Components/Basic/Basic';
import Pricing from './Components/OurPricing/Pricing';

function App() {
  const options = [
    {
      name: "Basic",
      monthlyPrice: "$19.99",
      yearlyPrice: "$199.99",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      name: "Professional",
      monthlyPrice: "$24.99",
      yearlyPrice: "$249.99",
      features: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      name: "Master",
      monthlyPrice: "$39.99",
      yearlyPrice: "$399.99",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    }
  ];
  
  
  return (
    <div className="App">
      <div className="pricing-component-container">
        <Pricing />
      </div>
      <div className="card-components-container">
        <Basic options={options}/>
      </div>
    </div>
  );
}

export default App;
