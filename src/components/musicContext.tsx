import { createContext, useState, ReactNode, useContext } from "react";

interface Music {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
}

interface MusicContextProps {
  musicList: Music[];
  addMusic: (music: Music) => boolean;
  removeMusic: (id: number) => void;
  clearList: () => void;
}

const MusicContext = createContext<MusicContextProps | null>(null);

const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [musicList, setMusicList] = useState<Music[]>([]);

  const addMusic = (music: Music): boolean => {
    const exists = musicList.some(m => m.id === music.id);
    if (!exists) {
      setMusicList([...musicList, music]);
    }
    return exists;
  };

  const removeMusic = (id: number) => {
    setMusicList(musicList.filter(music => music.id !== id));
  };

  const clearList = () => {
    setMusicList([]);
  };

  return (
    <MusicContext.Provider value={{ musicList, addMusic, removeMusic, clearList }}>
      {children}
    </MusicContext.Provider>
  );
};

const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
};

export { MusicProvider, useMusicContext };
