import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Login from './components/users/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Navbar/>
        </Route> */}
        <Route exact path="/">
          <Login/>

        </Route>

      </Switch>
    </Router>
  
  );
}

export default App;
