import React from 'react';

export default function SearchBeer({
  searchForBeer,
}) {
  let beerQuery = '';
  return (
  	<div className="Beer-search">
       <input onChange={(e) => {
       	 beerQuery = e.target.value;
       	 searchForBeer(beerQuery);
       }
      } type="text" placeholder="Type Beer Name Here..."/>

       <button onClick={() => searchForBeer(beerQuery)}>Search</button>
  	</div>
  	);
}
