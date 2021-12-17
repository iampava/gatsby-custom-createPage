import React from 'react';

export default function Pokemon({ pageContext: { pokemon, day } }) {
  return (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{pokemon.name} / {day}</h1>
      <p> This is a {pokemon.type} pokemon.</p>
      <p> It's color is {pokemon.color}</p>
    </div>
  )
}