import React from 'react';
import './App.css';
import SightingsContainer from './SightingsContainer';
import FetchSightings from './FetchSightings';

const App = () => (
  <div>
    <div className="banner">
      <h1>Artportalen</h1>
    </div>

    <div className="main">
      <SightingsContainer/>
      <FetchSightings/>
    </div>

    <footer>
      <div className="content">
      </div>
    </footer>
  </div>
)

export default App;