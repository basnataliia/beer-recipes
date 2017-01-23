import React, { Component } from 'react';
import $ from 'jquery';
import BeerIngredients from '../components/beer-ingredients';

 export default class BeerDetail extends Component {
	BEER_URL_BY_ID = (beerID) => `https://api.punkapi.com/v2/beers?ids=${beerID}`;
	constructor() {
	    super();

	    this.state = {
	      beer: [],
	    };
	 }

	//calling componentWillMount instead of calling componentDidMount, 
	//beacause I want to set the state before the rendering occurs
	componentWillMount() {
		let beerID = this.props.params.id;
		$.get(this.BEER_URL_BY_ID(beerID))
		.then(response => {
	      this.setState({
	        beer: response
	      });  
	    });
	}

    render() {
    	if(!this.state.beer.length){
    		return null;
    	}
        return(
        	<div>
        		<BeerIngredients beer={this.state.beer[0]}/>
        	</div>
        );
    }
}
