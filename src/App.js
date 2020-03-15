import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  history,
  Link
} from "react-router-dom";
import GlobalFonts from './assets/fonts/';

import Header from './components/Header'
import './app.scss'

import ScreenOne from './domains/screenOne'
import ScreenTwo from './domains/screenTwo'
import ScreenThree from './domains/screenThree'
import ScreenFour from './domains/screenFour'
import ScreenFive from './domains/screenFive'
import ScreenSix from './domains/screenSix'
import ScreenSeven from './domains/screenSeven'
import ScreenEight from './domains/screenEight'



export default function App() {
  return (
     <div className="main-container"> 
     <GlobalFonts />     
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
            <Route path="/screen-four">
              <ScreenFour/>
            </Route>  
            <Route path="/screen-five">
              <ScreenFive />
            </Route>   
            <Route path="/screen-six">
              <ScreenSix />
            </Route>   
            <Route path="/screen-seven">
              <ScreenSeven />
            </Route>  
            <Route path="/screen-eight">
              <ScreenEight />
            </Route>   
              
            <Route path="/">

            <Header isBack={false}>
                Screen Select
              </Header>
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

              <Link to='/screen-four' className="screen-holder">
                <span>4</span>
              </Link>
              <Link to='/screen-five'  className="screen-holder">
                <span>5</span>
              </Link>
              <Link to='/screen-six' className="screen-holder">
                <span>6</span>
              </Link>

              <Link to='/screen-seven' className="screen-holder">
                <span>7</span>
              </Link>
              <Link to='/screen-eight'  className="screen-holder">
                <span>8</span>
              </Link>
             
            </div>
          
            </Route>       
          </Switch>
      </Router>  
    </div>
   
  );
}