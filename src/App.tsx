import { Hero } from './components/hero';
import { MusicProvider } from "./components/musicContext";
import { ToastProvider } from './components/ToastProvider';
import ListaPaginada from './components/listaPaginada';
import './index.css'
import { Footer } from './components/footer';
import AppIcon from './components/appIcon';

export function App() {
  return (
    <MusicProvider>
      <ToastProvider>
        <main className="px-4 celular:px-8 tablet:px-16 tabletx:px-24 notebook:px-48 pt-8 tablet:pt-12 
            tabletx:pt-16 max-h-full">
          <AppIcon defaultIcon="/icon-192x192.png" activeIcon="/icon-192x192-active.png" />
          <Hero />
          <div className="border-neutral-400 h-full">
            <ListaPaginada />
          </div>
          <Footer/>
        </main>
      </ToastProvider>
    </MusicProvider>
  )
}
