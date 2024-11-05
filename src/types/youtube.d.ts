// src/types/youtube.d.ts
declare module '../api/youtube' {
  export const searchYoutube: (query: string) => Promise<string>;
}
