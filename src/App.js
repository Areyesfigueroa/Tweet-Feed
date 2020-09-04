import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import SplashPage from './components/SplashPage/SplashPage';
import UserSearchContainer from './containers/UserSearchContainer/UserSearchContainer';

import { Route, Switch } from "react-router-dom";
import Background from './components/Background/Background';
import splashBG from "./assets/images/splash-bg.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Background imgSrc={splashBG} shadowOpacity={0.1} />

      <Switch>
        <Route path='/user-search' component={UserSearchContainer}/>
        <Route path='/' component={SplashPage}/>
      </Switch>
    </div>
  );
}

export default App;
