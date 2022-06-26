import React , {useState} from 'react'
import './App.css';
import Pricing from './Components/Pricing';
import AnnuallyData from './Components/AnnuallyData.json';
import Card from './Components/Card'



const App = () => {

  const [choice, setChoice] = useState(AnnuallyData)
  const [isAnnual, setIsAnnual] = useState(true)
  
  return (
    <div className="container">
      <Pricing 
      setChoice={setChoice} 
      setIsAnnual={setIsAnnual} 
      isAnnual={isAnnual}
      />
      <div className="card-container">
        {choice.map(data => (
          <Card key={data.id} data={data}/>
        ))}
      </div>
    </div>
   
  );
}

export default App;