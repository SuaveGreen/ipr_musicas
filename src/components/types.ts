// src/types.ts
export interface MusicaItem {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
  tom?: string;
  letra?: string;
};

// src/types.ts
export interface MusicaProps {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
  letra?: string;
};

export interface Music {
  id: string;
  musica: string;
  cantor: string;
};