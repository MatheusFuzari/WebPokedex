import React from 'react'
import OtherPokemon from '../components/allPokemons'
export default async function PokemonDetailPage({ params: { pokemonId } }) {
  return (
    <div>
      <main>
        <OtherPokemon currentPoke={pokemonId} />
      </main>
    </div>
  )
}
