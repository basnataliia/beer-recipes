import React from 'react';
import { Link } from 'react-router';
import MaltItem from './malt-item';
import HopsItem from './hops-item';

export default function BeerIngredients({
  beer,
}) {

  return (
    <div>
      <div className="Beer-detail">
      <Link className="Back-link" to='/'>Return to list view</Link>
        <img className="Beer-detail-img" src={beer.image_url} alt={beer.name}/>
        <div className="Beer-details">
          <h1 className="Beer-detail-name">{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p className="Beer-brewed">First brewed in <span>{beer.first_brewed}</span></p>
          <p>{beer.description}</p>
          <h3>Ingredients</h3>
          <div className="Ingredients-details">
            <div className="Ingredient-item Malt">
              <h4>Malt</h4>
              <MaltItem malt={beer.ingredients.malt} />
            </div>
            <div className="Ingredient-item">
              <h4>Hops</h4>
              <HopsItem hops={beer.ingredients.hops} />
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}