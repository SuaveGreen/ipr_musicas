import { Hero } from './components/hero';
import { MusicProvider } from "./components/musicContext";
import ListaPaginada from './components/listaPaginada';

export function App() {
  return (
    <MusicProvider>
      <main className="px-48 pt-16 space-y-10 h-full">
        <Hero />
        <div className="border-neutral-400 h-[50.4vw] p-4">
          <ListaPaginada />
        </div>
      </main>
    </MusicProvider>
  )
}