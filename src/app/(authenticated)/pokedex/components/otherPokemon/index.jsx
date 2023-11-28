'use client';
import React, { useCallback, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { getPokemonSprite } from '../../services/get-sprites';
export default function PokedexPageCard() {
  const [poke, setPoke] = React.useState([]);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      const pokemon = await getPokemonSprite(page);
      setPoke(pokemon);
    })()
  }, [page]);
  if (poke.length === 0) {
    return (
      <p>Carregando...</p>
    )
  } else if (poke[0].id !== (page + 1)) {
    return (
      <p>Carregando...</p>
    )
  }
  return (
    <div className='bg-gray-900'>
      <div className='flex items-center justify-between flex-wrap p-6 bg-gray-900'>
        <button onClick={() => { page >= 20 ? setPage(page - 20) : null }} className='bg-red-500 p-2 rounded-md text-white hover:bg-red-900 hover:text-slate-100 transition ease-in-out delay-75'>Previous Page</button>
        <p className='text-white text-lg'>Page: {page == 0 ? "1" : (page / 20) + 1}</p>
        <button onClick={() => { setPage(page + 20) }} className='bg-red-500 p-2 rounded-md text-white hover:bg-red-900 hover:text-slate-100 transition ease-in-out delay-75'>Next Page</button>
      </div>
      <div className='grid grid-cols-5 gap-5 p-5 bg-gray-900'>
        {poke.map(x => (
          <Link href={`pokedex/${x.id}`}>
            <div className='flex flex-col bg-blue-950 h-56 items-center justify-center rounded-lg'>
              <div className='w-11/12 h-3/4 bg-slate-100 rounded-t-md'>
                <img className='m-auto w-36 h-36' src={`${x.sprites}`}></img>
              </div>
              <p className='text-sky-400 text-lg'>{x.name.charAt(0).toUpperCase() + x.name.slice(1)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
