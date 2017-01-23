import React, { Component } from 'react';
import $ from 'jquery';
import Beers from '../components/beer-list';
import SearchBeer from '../components/search-beer';
import SortBeer from '../components/sort-beer';

export default class BeerContainer extends Component {
  BEER_LIST_URL_GENERATOR = () => `https://api.punkapi.com/v2/beers`;
  BEER_SEARCH_URL_GENERATOR = (beer) => `https://api.punkapi.com/v2/beers?beer_name=${beer}`;

  constructor() {
    super();

    this.state = {
      beers: [],
      selectedBeer: 'no current beer',
      beerQuery : '',
    };

     this.searchForBeer = this.searchForBeer.bind(this);
     this.sortByName = this.sortByName.bind(this);
  }


  componentDidMount() {
    $.get(this.BEER_LIST_URL_GENERATOR())
    .then(response => {
      this.setState({
        beers: response
      });
    });
  }

  searchForBeer(beerString) {
    if(!beerString.length) {
      this.componentDidMount();
    }
    else{
      $.get(this.BEER_SEARCH_URL_GENERATOR(beerString))
        .then(result => this.setState({beers: result}));
    }
  }

  sortByName(beers) {
    beers.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })

    this.setState({
        beers: beers
      });
  }

  render() {
    if(!this.state.beers.length){
        return null;
    }

    return (
      <div>
        <h2 style={{textAlign:'center'}}>Brewdog Beer Recipes</h2>
        <SearchBeer searchForBeer={this.searchForBeer} />
        <SortBeer sortByName={this.sortByName} beers={this.state.beers}/>
        <Beers beers={this.state.beers} />
        {this.props.children}
      </div>
    );
  }
}
