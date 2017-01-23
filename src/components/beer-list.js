import React from 'react';
import BeerItem from './beer-item';

export default function BeerList({
  beers,
}) {
  return (
    <div className="Beers-container">
      {beers.map(beer => 
        <BeerItem
          key={beer.id} 
          beer={beer}
          />
      )}
    </div>  
  );
}
