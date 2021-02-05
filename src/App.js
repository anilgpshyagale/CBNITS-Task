
import './App.css';

import Loginpage from './component/Loginpage';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import PrivateRoute from './utills/private';
function App() {
  return (
    <div className="App">
   
          <BrowserRouter>
            <Switch>
           
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <Route path="/" component={Loginpage}/>
             
            </Switch>
          </BrowserRouter>
       
    </div>
  );
}

export default App;
