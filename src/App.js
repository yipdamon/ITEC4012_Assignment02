import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HomePage } from './components/pages/HomePage';
import { NotificationsPage } from './components/pages/NotificationsPage';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>

          {/* HOMEPAGE */}
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          {/* NOTIFICATIONS PAGE */}
          <Route exact path="/notifications">
            <NotificationsPage></NotificationsPage>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;