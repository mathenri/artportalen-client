import React from 'react';
import './App.css';
import SightingsContainer from './SightingsContainer';
import AddMarker from './AddMarker';

const App = () => (
  <div>
    <div className="banner">
      <h1>Artportalen</h1>
    </div>

    <div className="main">
      <SightingsContainer/>
      <AddMarker/>
    </div>

    <footer>
      <div className="content">
      </div>
    </footer>
  </div>
)

export default App;