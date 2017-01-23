import React from 'react';

export default function SortBeer({
  beers,
  sortByName,
}) {
  return (
  	<div>
       <button className="Sort-beer" onClick={() => sortByName(beers)}>Sort By Name</button>
  	</div>
  	);
}
