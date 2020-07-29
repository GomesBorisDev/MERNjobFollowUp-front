import React from 'react';
import './App.css';

import Nav from './components/Nav';
import AddAppsForm from './components/AddAppsForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}

      <Nav/>

      <h1>My Job Applications !</h1>

      <AddAppsForm/>
      
    </div>
  );
}

export default App;
