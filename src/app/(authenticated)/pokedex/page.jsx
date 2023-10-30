import Link from 'next/link'
import { getPokemon } from './services/get-pokemon'
import OtherPokemon from './components/otherPokemon'
export const metadata = {
  title: 'Pokedex'
}

export default async function PokedexPage() {
  const pokemons = await getPokemon()
  return (
    <main>
      <h1>Pokedex</h1>
      <h3 className="text-red-400">Pokemons:</h3>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Link href={`/pokedex/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
