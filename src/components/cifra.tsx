import React, { useEffect, useRef } from 'react';
import { ChordProParser, HtmlTableFormatter } from 'chordsheetjs';
import { MusicaItem as MusicaItemType } from './types'; // Importa com alias opcional

interface Props {
  musicaData: MusicaItemType;
}

const Cifra: React.FC<Props> = ({ musicaData }) => {
  const { musica, cantor, tom = '', letra = '' } = musicaData;

  const chordProString = `
{title: ${musica}}
{artist: ${cantor}}
{key: ${tom}}
${letra}
  `;

  const cifraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parser = new ChordProParser();
    const song = parser.parse(chordProString);
    const formatter = new HtmlTableFormatter({
      css: {
        chord: 'text-red-500 font-bold', // Classe TailwindCSS para os acordes
      }
    });
    const output = formatter.format(song);

    // Adiciona título e artista manualmente, removendo duplicação do título
    const title = song.metadata.title ? `<h1 class="text-2xl font-bold">${song.metadata.title}</h1>` : '';
    const artist = song.metadata.artist ? `<h2 class="text-xl italic">${song.metadata.artist}</h2>` : '';
    const metadata = `<div class="mb-4">${title}${artist}</div>`;

    if (cifraRef.current) {
      cifraRef.current.innerHTML = metadata + output.replace(/<h1[^>]*>(.*?)<\/h1>/g, '');
    }
  }, [chordProString]);

  return <div ref={cifraRef} className="p-10 bg-gray-400 h-full rounded-lg font-mono text-xl shadow-md"></div>;
};

export default Cifra;
