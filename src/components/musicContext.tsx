// musicContext.ts
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { saveMusicToLocalStorage, getMusicFromLocalStorage } from './storage';

interface MusicaItem {
  letra?: string;
  id: string;
  musica: string;
  cantor: string;
}

interface MusicContextType {
  musicList: MusicaItem[];
  addMusic: (music: MusicaItem) => boolean;
  removeMusic: (musicId: string) => void;
  clearList: () => void;
}

interface MusicProviderProps {
  children: ReactNode;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [musicList, setMusicList] = useState<MusicaItem[]>([]);

  useEffect(() => {
    const savedMusic = getMusicFromLocalStorage();
    setMusicList(savedMusic);
  }, []);

  const addMusic = (music: MusicaItem) => {
    const isDuplicate = musicList.some(item => item.id === music.id);
    if (isDuplicate) {
      return true;
    }

    const updatedMusicList = [...musicList, music];
    setMusicList(updatedMusicList);
    saveMusicToLocalStorage(updatedMusicList);
    // showToast('Sucesso', 'Música salva com sucesso!');
    return false;
  };

  const removeMusic = (musicId: string) => {
    const updatedMusicList = musicList.filter((music) => music.id !== musicId);
    setMusicList(updatedMusicList);
    saveMusicToLocalStorage(updatedMusicList);
  };

  const clearList = () => {
    setMusicList([]);
    saveMusicToLocalStorage([]);
  };

  return (
    <MusicContext.Provider value={{ musicList, addMusic, removeMusic, clearList }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};
