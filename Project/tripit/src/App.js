import React, { Component } from 'react';
import './App.css';
import {login} from './pages/Login.js' 
import {Register} from './pages/Register.js' 
import Places from './pages/Places.js';

import {Forum} from './pages/Forum.js';
import Main from './pages/Main';
import Content from './pages/Content.js';
import {Profile} from './pages/Profile.js';
import {Schedule} from './pages/Schedule.js';

import {BrowserRouter as Router, Route} from "react-router-dom";

import Menu from './components/Menu'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="App">
        <Router>
          <div>
            <Menu/>
            <div className="content">
              <Route exact path = '/'  component={Main}/>
              <Route path = '/login'  component={login}/>
              <Route path = '/registration' component={Register}/> 
              <Route path = '/places'  component={Places}/>
              <Route path = '/forum' component={Forum}/>
              <Route path = '/profile' component={Profile}/>
              <Route path = '/tripInfo/:id' component={Content}/>
              <Route path = '/tripInfo/schedule' component={Schedule}/>
            
            </div>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App;
