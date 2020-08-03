import React from 'react';
import './App.css';

import Nav from './components/Nav';
import AddAppsForm from './components/AddAppsForm';
import Applications from './components/Applications';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Router>
        <Nav/>
        <h1>My Job Applications !</h1>

        <Switch>
          <Route exact path="/" component={AddAppsForm}></Route>
          <Route path="/applications" component={Applications}></Route>   
        </Switch>

    </Router>
    </div>
  );
}

export default App;
