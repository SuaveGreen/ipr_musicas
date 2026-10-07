import React, { useState } from 'react';
import { supabase } from '../lib/supabase'; // Ajuste o caminho conforme o seu projeto
import { Plus, X, Loader2 } from 'lucide-react';
import { useToast } from './ToastProvider';

interface AdicionarMusicaModalProps {
  onMusicaAdicionada?: () => void; // Função para recarregar a lista após salvar
}

export const AdicionarMusicaModal: React.FC<AdicionarMusicaModalProps> = ({ onMusicaAdicionada }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const [musica, setMusica] = useState('');
  const [cantor, setCantor] = useState('');
  const [linkYoutube, setLinkYoutube] = useState('');
  const [cifra, setCifra] = useState('');

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!musica.trim() || !cantor.trim()) {
      showToast('Falha', 'Por favor, preencha pelo menos o Nome da Música e o Cantor.');
      return;
    }

    setLoading(true);

    // Insere a nova música no Supabase
    const { error } = await supabase.from('musicas').insert([
      {
        musica: musica.trim(),
        cantor: cantor.trim(),
        linkYoutube: linkYoutube.trim() || null,
        cifra: cifra.trim() || null,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error('Erro ao adicionar música:', error);
      showToast('Falha', 'Não foi possível salvar a música no banco de dados.');
    } else {
      showToast('Sucesso', `A música "${musica}" foi adicionada com sucesso!`);

      // Limpa os campos do formulário
      setMusica('');
      setCantor('');
      setLinkYoutube('');
      setCifra('');
      setIsOpen(false);

      // Recarrega a lista no componente pai
      if (onMusicaAdicionada) {
        onMusicaAdicionada();
      }
    }
  };

  return (
    <>
      {/* Botão de Abrir o Formulário */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors shadow"
      >
        <Plus className="size-5" />
        <span>Nova Música</span>
      </button>

      {/* Modal / Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#181f2c] text-white w-full max-w-md rounded-xl shadow-2xl border border-gray-700 overflow-hidden">

            {/* Cabeçalho */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Adicionar Nova Música</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSalvar} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Nome da Música <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Por Que Eu Te Amei"
                  value={musica}
                  onChange={(e) => setMusica(e.target.value)}
                  className="w-full bg-[#111622] border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Cantor / Banda <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ton Carfi"
                  value={cantor}
                  onChange={(e) => setCantor(e.target.value)}
                  className="w-full bg-[#111622] border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Link do YouTube (Opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={linkYoutube}
                  onChange={(e) => setLinkYoutube(e.target.value)}
                  className="w-full bg-[#111622] border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Cifra / Letra (Opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Cole a cifra ou letra com os acordes entre chaves/colchetes aqui..."
                  value={cifra}
                  onChange={(e) => setCifra(e.target.value)}
                  className="w-full bg-[#111622] border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-white font-mono text-sm"
                />
              </div>

              {/* Botões do Rodapé */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition-colors text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {loading && <Loader2 className="animate-spin size-4" />}
                  <span>Salvar Música</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
};