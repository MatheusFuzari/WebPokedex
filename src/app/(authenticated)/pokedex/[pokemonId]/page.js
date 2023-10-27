import { getPokemonById } from '../services/get-pokemon-by-id'

export default async function PokemonDetailPage({ params: { pokemonId } }) {
  const pokemon = await getPokemonById(pokemonId)
  return (
    <div>
      <main>
        <h1>Pokedex</h1>
        <h3>Pokemon:</h3>
        <ul>
          <li>{pokemon.id}</li>
          <li>{pokemon.name}</li>
          <img
            src={pokemon.sprites.front_default}
            className="object-cover w-100 h-100"
          ></img>
        </ul>
      </main>
    </div>
  )
}
