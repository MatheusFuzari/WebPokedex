import React from 'react'
import OtherPokemon from '../components/otherPokemon'
export default async function PokemonDetailPage({ params: { pokemonId } }) {
  return (
    <div>
      <main>
        <h1>Pokedex</h1>
        <h3>Pokemon:</h3>
        <OtherPokemon currentPoke={pokemonId}/>
      </main>
    </div>
  )
}
