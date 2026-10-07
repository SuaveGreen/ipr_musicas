import React, { useEffect, useState } from "react";
import { ChordSheetParser } from "chordsheetjs";
import { supabase } from "../lib/supabase"; // Ajuste o caminho para o seu cliente do Supabase
import { Loader2 } from "lucide-react";
import { letras } from "./letras"; // Fallback para letras.ts caso exista

interface CifraProps {
  musicaId: number | string;
}

interface MusicaData {
  id: number;
  musica: string;
  cantor: string;
  cifra?: string;
  tom?: string;
}

function formatCifraToJSX(rawHtml: string) {
  const lines = rawHtml
    .replace(/<[^>]*>/g, "")
    .split("\n")
    .filter(Boolean);

  return (
    <div className="cifra font-mono whitespace-pre-wrap leading-relaxed pt-2 pb-4">
      {lines.map((line, i) => {
        if (/^\(.*\)$/.test(line.trim())) {
          return (
            <p key={i} className="text-left mb-2 uppercase obs text-orange-600 font-bold">
              {line.replace(/[()]/g, "")}
            </p>
          );
        }

        if (/^\{.*\}$/.test(line.trim())) {
          return (
            <span key={i} className="text-sm font-sans italic flex text-wrap pb-3 text-gray-800 font-extralight">
              {line.replace(/[{}]/g, "")}
            </span>
          );
        }

        const parts = line.split(/(\[[^\]]+\])/g).filter(Boolean);
        return (
          <p key={i}>
            {parts.map((part, j) => {
              if (part.startsWith("[") && part.endsWith("]")) {
                const chord = part.slice(1, -1);
                return (
                  <span key={j} className="chord font-bold text-blue-600 mr-1" data-chord={chord}>
                    {chord}
                  </span>
                );
              } else {
                return (
                  <span key={j} className="word text-gray-900">
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
  const [musica, setMusica] = useState<MusicaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function carregarCifra() {
      setLoading(true);
      console.log("ID recebido no Cifra.tsx:", musicaId); // 👈

      const idNumerico = Number(musicaId);

      if (isNaN(idNumerico)) {
        console.error("ID inválido fornecido ao Cifra:", musicaId);
        setLoading(false);
        return;
      }

      // Busca a música pelo ID no Supabase
      const { data, error } = await supabase
        .from("musicas")
        .select("id, musica, cantor, cifra, tom")
        .eq("id", idNumerico)
        .maybeSingle(); // maybeSingle não lança erro de exceção se não encontrar nada

      console.log("Dados retornados do Supabase:", data); // 👈 
      console.log("Erro do Supabase (se houver):", error); // 👈 

      if (error) {
        console.error("Erro ao carregar a cifra do Supabase:", error);
      } else if (data) {
        setMusica(data);
      }

      setLoading(false);
    }

    if (musicaId !== undefined && musicaId !== null) {
      carregarCifra();
    }
  }, [musicaId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 gap-2 text-black">
        <Loader2 className="animate-spin text-blue-500" />
        <p>A carregar cifra...</p>
      </div>
    );
  }

  // 1. Tenta pegar a cifra do estado vindo do Supabase
  // 2. Se não houver no Supabase, tenta buscar no objeto estático letras.ts como fallback
  const idNum = Number(musicaId);
  const letra = musica?.cifra || (letras as Record<number, string>)[idNum];

  console.log("Musica retornada:", musica);
  console.log("Conteúdo da letra/cifra:", letra);

  if (!letra) {
    return (
      <div className="p-4 text-gray-700">
        <p className="font-semibold text-red-500">Cifra não encontrada para o ID #{String(musicaId)}.</p>
        <p className="text-xs text-gray-500 mt-1">
          Verifique se a coluna 'cifra' está preenchida na tabela do Supabase para esta música.
        </p>
      </div>
    );
  }

  // Processa a cifra com ChordSheetJS se o texto existir
  let title = musica?.musica || "";
  let artist = musica?.cantor || "";
  let key = musica?.tom || "N/A";

  try {
    const parser = new ChordSheetParser();
    const song = parser.parse(letra);
    title = song.metadata?.title || title;
    artist = song.metadata?.artist || artist;
    key = song.metadata?.key || key;
  } catch (e) {
    console.warn("Erro ao fazer parse da cifra com ChordSheetParser, exibindo texto bruto:", e);
  }

  return (
    <div className="text-black text-left w-full">
      {title && <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>}
      {artist && (
        <h3 className="text-lg font-normal text-wrap text-[#ee7829ff] underline mb-1">
          {artist}
        </h3>
      )}
      <h4 className="italic text-black mb-4">
        Tom: <span className="uppercase text-[#ee7829ff] font-bold">{key}</span>
      </h4>
      {formatCifraToJSX(letra)}
    </div>
  );
};

export default Cifra;