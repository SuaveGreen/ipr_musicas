import { Hero } from './components/hero';
import { MusicProvider } from "./components/musicContext";
import { ToastProvider } from './components/ToastProvider';
import ListaPaginada from './components/listaPaginada';
import './index.css'

export function App() {
  return (
    <MusicProvider>
      <ToastProvider>
        <main className="px-4 celular:px-8 tablet:px-16 tabletx:px-24 notebook:px-48 pt-8 tablet:pt-12 
            tabletx:pt-16 space-y-8 tablet:space-y-10 max-h-full
            celular:bg-neutral-500 tablet:bg-red-400 tabletx:bg-yellow-700 notebook:bg-orange-500 monitor:bg-green-800
            ">
          <Hero />

          {/* celular:bg-neutral-50 tablet:bg-red-600 tabletx:bg-yellow-400 notebook:bg-orange-500 monitor:bg-green-500 */}

          <div className="border-neutral-400 h-full">
            <ListaPaginada />
          </div>
        </main>
      </ToastProvider>
    </MusicProvider>
  )
}
