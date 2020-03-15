import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  history,
  Link
} from "react-router-dom";

import { Button } from '@material-ui/core'

import './app.scss'

import ScreenOne from './domains/screenOne'
import ScreenTwo from './domains/screenTwo'
import ScreenThree from './domains/screenThree'



export default function App() {
  return (
     <div className="main-container">       
      <Router>      
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}         
          <Switch>          
            <Route path="/screen-one">
              <ScreenOne />
            </Route>  
            <Route path="/screen-two">
              <ScreenTwo />
            </Route>   
            <Route path="/screen-three">
              <ScreenThree />
            </Route>   
            <Route path="/">
            <div className="screen-selector-container">
              <Link to='/screen-one' className="screen-holder">
                <span>1</span>
              </Link>
              <Link to='/screen-two'  className="screen-holder">
                <span>2</span>
              </Link>
              <Link to='/screen-three' className="screen-holder">
                <span>3</span>
              </Link>
            </div>
          
            </Route>       
          </Switch>
      </Router>  
    </div>
   
  );
}