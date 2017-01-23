import React from 'react';
import { Link } from 'react-router';

export default function BeerItem({
  beer,
}) {

  return (
  	<div className="Beer-item">
  		<img className="Beer-img" src={beer.image_url} alt={beer.name}/>
  		<div className="Beer-details">
  			<Link to={'/beers/' + beer.id} className="Title LinkItem">{beer.name}</Link>
  			<p>{beer.tagline}</p>
  			<p className="Beer-brewed">First brewed in <span>{beer.first_brewed}</span></p>
  			<p>{beer.description}</p>
        <Link to={'/beers/' + beer.id} className="LinkItem">View the ingredients</Link>
  		</div>
  	</div>
  	);
}
