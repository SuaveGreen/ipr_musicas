import { Hero } from './components/hero';
import { MusicProvider } from "./components/musicContext";
import { ToastProvider } from './components/ToastProvider';
import ListaPaginada from './components/listaPaginada';
import './index.css'

export function App() {
  return (
    <MusicProvider>
      <ToastProvider>
        <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 pt-8 md:pt-12 
            lg:pt-16 space-y-8 md:space-y-10 h-full">
          <Hero />
          <div className="border-neutral-400 h-auto md:h-[50.4vw] p-4">
            <ListaPaginada />
          </div>
        </main>
      </ToastProvider>
    </MusicProvider>
  )
}
