import React from 'react'

import {Navbar} from './components/Navbar.js'
import { AddFacility } from './components/AddFacility.js';


import './App.css';
import { GridContainer } from './components/CardsContainer.js';


function App() {
  return (
    <>
    <Navbar /> 
    <AddFacility />
    <GridContainer />
    </>
  );
}

export default App;
