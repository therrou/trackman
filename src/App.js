import React, { useState } from 'react'

import {Navbar} from './components/Navbar.js'
import { AddFacility } from './components/AddFacility.js';


import './App.css';
import { CardsContainer} from './components/CardsContainer.js';
import facilitiesData from './facilities.json'


function App() {

  localStorage.setItem('facilities', {facilitiesData})
  const [facilities, setFacilities] = useState(facilitiesData);
  const addFacilitie = (facilitie) => {
    setFacilities([facilitie, ...facilities])
  }
  console.log(facilities)


  return (
    <>
    <Navbar /> 
    <AddFacility addFacilitie={addFacilitie} />
    <CardsContainer facilities={facilities} />
    </>
  );
}

export default App;
