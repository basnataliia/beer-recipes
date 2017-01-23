import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';
import Beers from './containers/beer-container';
import BeerDetail from './containers/beerDetail-container';

class App extends Component {
  render() {
    return (
     <Router history={browserHistory}>
      <Route path='/' component={Beers}/>
      <Route path="beers/:id" component={BeerDetail}/>
     </Router>
    );
  }
}

export default App;
