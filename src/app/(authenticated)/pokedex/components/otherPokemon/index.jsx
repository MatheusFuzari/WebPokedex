'use client';
import React, { useCallback, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link'
import { getPokemon } from '../../services/get-pokemon';
export default function PokedexPageCard() {
  const [poke, setPoke] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const pokemon = await getPokemon();
      setPoke(pokemon)
    })()
  }, [])
  console.log(poke)
  return (
    <div>
      <ul>
        <li key={poke.id}>
          <Link href={`pokedex/${poke.id}`}>{poke.name}</Link>
        </li>
      </ul>
    </div>
  )
}
