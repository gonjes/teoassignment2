import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Main from '../src/Main';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Sidebar from './Components/Sidebar'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/About' exact component={About} />
            <Route path='/Experience' exact component={Experience} />
            <Route path='/Education' exact component={Education} />
            <Route path='/Skills' exact component={Skills} />
            <Route path='/Interest' exact component={Interest} />
            <Route path='/Awards' exact component={Awards} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;