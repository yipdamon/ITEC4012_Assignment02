import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>

          {/* HOMEPAGE */}
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          {/* PAGE TWO */}
          <Route exact path="/pageTwo">

          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;