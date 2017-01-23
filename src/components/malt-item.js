import React from 'react';

export default function MaltItem({
  malt,
}) {
  return (
  	<div>
        {malt.map(m => 
            <div className="Ingredient-item-detail" key={m.name}>
              <span>{m.name}: </span>
              <span>{m.amount.value} </span>
              <span>{m.amount.unit}</span>
            </div>
        )}
  	</div>
  	);
}