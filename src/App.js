import React from 'react';
import './App.css';

import Nav from './components/Nav';
import AddAppsForm from './components/AddAppsForm';
import Applications from './components/Applications';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}

      <Nav/>

      <h1>My Job Applications !</h1>

      <AddAppsForm/>

      <div>
        <Applications/>
      </div>

    </div>
  );
}

export default App;
