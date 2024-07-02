// import { Musica } from './components/musica';
// import { HeroMusica } from './components/headerMusicas';
// import { useState } from 'react';
import { Hero } from './components/hero';
import ListaPaginada from './components/listaPaginada';

export function App() {


  return (
    <main className="px-48 pt-16 space-y-10 h-full">
      <Hero />
      <div className="border-neutral-400 h-[50.4vw] p-4">
        <div className='mt-[2vh]'>
          <ListaPaginada />
        </div>
      </div>
    </main>
  )
}