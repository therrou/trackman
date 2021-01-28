import React, {  useState } from 'react'

import {Navbar} from './components/Navbar.js'
import { AddFacility } from './components/AddFacility.js';



// import { getAllFacilities } from './services'
import './App.css';
import { CardsContainer} from './components/CardsContainer.js';
import { getFacilities } from './services.js';


function App() {

  
  const [facilities, setFacilities] = useState(' ');

  // getAllFacilities()

  const addFacilitie = (facilitie) => {
    setFacilities([facilitie, ...facilities])
  }
  
  const data = localStorage.getItem('facilities')

    getFacilities(data).then((data) => {
        return data
      })

  return (
    <>
    <Navbar /> 
    <AddFacility addFacilitie={addFacilitie} />
    <CardsContainer facilities={data} />
    </>
  );
}

export default App;
