import Link from 'next/link'
import PokedexPageCard from './components/otherPokemon'
export const metadata = {
  title: 'Pokedex'
}

export default async function PokedexPage() {
  return (
    <main>
      <PokedexPageCard />
    </main>
  )
}
