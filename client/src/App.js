import React, { useEffect } from 'react';
import './App.css';

import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import Background from './components/Background/Background';
import splashBG from "./assets/images/splash-bg.jpg";

import { Route, Switch } from "react-router-dom";
import SplashPage from './components/SplashPage/SplashPage';
import UserSearchContainer from './containers/UserSearchContainer/UserSearchContainer';
import RandomTweetsContainer from './containers/RandomTweetsContainer/RandomTweetsContainer';

function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <Background imgSrc={splashBG} shadowOpacity={0.1} style={{position: "fixed"}}/>

      <Switch>
        <Route path='/user-search' component={UserSearchContainer}/>
        <Route path='/random-tweets' component={RandomTweetsContainer}/>
        <Route path='/' component={SplashPage}/>
      </Switch>
    </div>
  );
}

export default App;
