import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero';
import Content from './Components/Navbar/Content';
import { CardsContext } from './CardsDataContext/Context';
import { useState } from 'react';

function App() {
  
  const [cardsData, setcardsData] = useState([])
  const [loading, setloading] = useState(false)
  
  
  return (
    <div>
    <CardsContext.Provider value={{cardsData,setcardsData,loading,setloading}}>
     <Navbar/>
      <Hero/>
      <Content/>
    </CardsContext.Provider>
    </div>
  );
}

export default App;
