// import { Musica } from './components/musica';
import { HeroMusica } from './components/heroMusicas';
import { Hero } from './components/hero';
import ListaPaginada from './components/listaPaginada';

export function App() {

  return (
    <main className="px-48 pt-16 space-y-10 pb-[100px]">
      <Hero />
      <div className="border-neutral-400 h-[50.4vw] p-4">
        <HeroMusica />
        <div className='mt-[2vh]'>
          <ListaPaginada />
        </div>
      </div>
    </main>
  )
}
