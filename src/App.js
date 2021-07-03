import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {Link} from "react-router-dom";
import Header from './components/Header';
import Favorite from './components/Favorite';
import './style/app.css';


export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              Hello Dev
            </Route>
            <Route exact path="/favorite">
              <Favorite/>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;
