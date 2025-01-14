// storage.ts
interface Music {
  id: string;
  musica: string;
  cantor: string;
}

export const saveMusicToLocalStorage = (musicList: Music[]) => {
  localStorage.setItem('savedMusicList', JSON.stringify(musicList));
};

export const getMusicFromLocalStorage = (): Music[] => {
  const savedMusicList = localStorage.getItem('savedMusicList');
  return savedMusicList ? JSON.parse(savedMusicList) : [];
};
