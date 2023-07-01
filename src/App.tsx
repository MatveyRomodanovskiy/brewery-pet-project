import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';



function App() {
  return (
    <div className="App">
              <Fermentables/>
        <Hops/>
    </div>
  );
}

export default App;
