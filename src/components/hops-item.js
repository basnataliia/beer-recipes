import React from 'react';

export default function HopsItem({
  hops,
}) {
  return (
  	<div>
        {hops.map(h => 
            <div className="Ingredient-item-detail Hops-item" key={h.name}>
              <span>{h.name}: </span>
              <span>{h.amount.value} </span>
              <span>{h.amount.unit}</span>
            </div>
        )}
  	</div>
  	);
}