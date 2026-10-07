// src/types.ts
export interface MusicaItem {
  id: number | string;
  musica: string;
  cantor: string;
  cifra?: string;        // 👈 Certifique-se de ter essa linha
  linkYoutube?: string;
  tom?: string;
};

export interface Letra {
  letra?: string;
}

// src/types.ts
export interface MusicaProps {
  id: number | string;
  musica: string;
  cantor: string;
  cifra?: string;        // 👈 Certifique-se de ter essa linha
  linkYoutube?: string;
  tom?: string;
};

export interface Music {
  id: string;
  musica: string;
  cantor: string;
};