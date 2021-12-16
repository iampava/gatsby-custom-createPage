export default function Pokemon({ pageContext: { pokemon } }) {
  return (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{pokemon.name}</h1>
      <p> This is a {pokemon.type} pokemon.</p>
      <p> It's color is {pokemon.color}</p>
    </div>
  )
}