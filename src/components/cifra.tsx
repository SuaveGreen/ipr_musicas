import { ChordSheetParser } from "chordsheetjs";
import { musicas } from "./armazem";
import { letras } from "./letras";

interface CifraProps {
  musicaId: number;
}

function formatCifraToJSX(rawHtml: string) {
  const lines = rawHtml
    .replace(/<[^>]*>/g, "")
    .split("\n")
    .filter(Boolean);

  return (
    <div className="cifra font-mono whitespace-pre-wrap leading-relaxed pt-2 pb-5">
      {lines.map((line, i) => {
        // 🔹 Se for seção (ex: "(Refrão)", "(Intro)")
        if (/^\(.*\)$/.test(line.trim())) {
          return (
            <p
              key={i}
              className="text-yellow-200 text-left mt-4 mb-2 uppercase"
            >
              {line.replace(/[()]/g, "")}
            </p>
          );
        }

        // 🔹 Caso contrário, processa acordes []
        const parts = line.split(/(\[[^\]]+\])/g).filter(Boolean);
        return (
          <p key={i}>
            {parts.map((part, j) => {
              if (part.startsWith("[") && part.endsWith("]")) {
                const chord = part.slice(1, -1);
                return (
                  <span
                    key={j}
                    className="chord "
                    data-chord={chord}
                    aria-label={`Acorde ${chord}`}
                  />
                );
              } else {
                return (
                  <span key={j} className="word">
                    {part}
                  </span>
                );
              }
            })}
          </p>
        );
      })}
    </div>
  );
}

const Cifra: React.FC<CifraProps> = ({ musicaId }) => {
  const musica = musicas.find((m) => m.id === musicaId);
  const letra = letras[musicaId];

  if (!musica || !letra) {
    return <p>Música não encontrada.</p>;
  }

  const parser = new ChordSheetParser();
  const song = parser.parse(letra);

  const title = song.metadata?.title || musica.musica;
  const artist = song.metadata?.artist || musica.cantor;
  const key = song.metadata?.key || musica.tom;

  // Como o formatter padrão não ajuda, pegamos só o texto cru
  const rawText = letra;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
      {artist && <h3 className="text-lg text-[#ee7829ff] underline">{artist}</h3>}
      <h4 className="mb-4 italic">Tom: <span className="uppercase">{key}</span></h4>
      {formatCifraToJSX(rawText)}
    </div>
  );
};

export default Cifra;
