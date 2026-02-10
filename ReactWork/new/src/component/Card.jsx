import React, { useState } from 'react';

function Card(props) {
const [count, setcount]=useState(0);
  return (
    <div>
      <h4>{props.name}</h4>
      <button onclick={setcount(count+1)}>+</button>
      <button onclick={setcount(count-1)}>-</button>

    </div>
  )
}

void increaseCounter( )

export default Card