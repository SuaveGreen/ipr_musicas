import React, { useState, useEffect } from 'react';
import { Musica } from './musica';
import { supabase } from '../lib/supabase'; // Conexão com o Supabase
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, Frown, ArrowDownUp, AArrowUp, ListOrdered, Loader2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { SaveMusic } from './saveMusic';

const ITEMS_PER_PAGE = 10;

interface MusicaItem {
  id: number;
  musica: string;
  cantor: string;
  cifra?: string;
  linkYoutube?: string;
}

const ListaPaginada: React.FC = () => {
  const [musicas, setMusicas] = useState<MusicaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchMusic, setSearchMusic] = useState('');
  const [sortOrder, setSortOrder] = useState<'id' | 'alphabetical'>('id');

  // Buscar músicas no Supabase sempre que mudar a página, pesquisa ou ordenação
  useEffect(() => {
    async function fetchMusicas() {
      setLoading(true);

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE - 1;

      // Inicia a query no Supabase
      // No ListaPaginada.tsx
      let query = supabase
        .from('musicas')
        .select('id, musica, cantor, cifra, linkYoutube', { count: 'exact' }); // 👈 "cifra" tem de estar aqui

      // Se houver pesquisa digitada no input
      if (searchMusic.trim() !== '') {
        const term = searchMusic.trim();

        // Se o utilizador digitou um número, pesquisa diretamente pelo ID
        if (!isNaN(Number(term))) {
          query = query.eq('id', Number(term));
        } else {
          // Pesquisa no nome da música ou do cantor
          query = query.or(`musica.ilike.%${term}%,cantor.ilike.%${term}%`);
        }
      }

      // Aplica a ordenação
      if (sortOrder === 'alphabetical') {
        query = query.order('musica', { ascending: true });
      } else {
        query = query.order('id', { ascending: true });
      }

      // Aplica o intervalo de paginação
      query = query.range(startIndex, endIndex);

      const { data, count, error } = await query;

      if (error) {
        console.error('Erro ao buscar músicas do Supabase:', error);
        setMusicas([]);
        setTotalItems(0);
      } else {
        setMusicas(data || []);
        setTotalItems(count || 0);
      }

      setLoading(false);
    }

    fetchMusicas();
  }, [currentPage, searchMusic, sortOrder]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className=''>
      <div className="flex tablet:justify-around border-b-[1px] space-y-10 monitor:ml-[-5vh] celular:sticky celular:pb-2 celular:top-0 celular:bg-[#181f2c] celular:shadow">
        {/* Número, Música e Cantor invisíveis apenas em dispositivos móveis */}
        <div className="hidden tablet:block w-full celular:w-auto pt-[34px] hover:cursor-default">
          <p>Número</p>
        </div>
        <div className="hidden tablet:block w-full celular:w-auto text-center pr-4 hover:cursor-default">
          <p>Música</p>
        </div>
        <div className="hidden tablet:block w-full celular:w-auto text-center hover:cursor-default">
          <p>Cantor</p>
        </div>

        <div className="w-56 text-center justify-between pr-8">
          <input
            type="search"
            id="search-input"
            className="rounded-lg outline-none bg-transparent pl-2 tablet:px-3 tablet:w-60 w-full border-[1px]"
            placeholder='Digite o nome da Música/Cantor'
            value={searchMusic}
            onChange={(e) => {
              setSearchMusic(e.target.value);
              setCurrentPage(1); // Resetar para a primeira página ao buscar
            }}
          />
        </div>

        <div className="w-auto text-center pr-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex rounded-lg outline-none bg-transparent px-2 pr-4 h-[25px] border-[1px] text-center mb-4">
                <span className="hidden tablet:inline">Ordenar por</span> <ArrowDownUp className='size-3 mt-1.5 ml-2' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} className="shadow-lg">
              <DropdownMenuItem className='bg-[#181f2c] p-1.5 border-b-[1px] rounded-t-md hover:cursor-pointer' onSelect={() => { setSortOrder('id'); setCurrentPage(1); }}>
                <ListOrdered className="mr-2 inline" />
                Ordem Numérica
              </DropdownMenuItem>
              <DropdownMenuItem className='bg-[#181f2c] p-1.5 rounded-b-md hover:cursor-pointer' onSelect={() => { setSortOrder('alphabetical'); setCurrentPage(1); }}>
                <AArrowUp className="mr-2 inline" />
                Ordem Alfabética
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex tablet:hidden text-nowrap text-sm tablet:text-base">
          <SaveMusic />
        </div>
      </div>

      {loading ? (
        <div className='text-center py-28 border-b-[1px] flex flex-col items-center justify-center gap-4'>
          <Loader2 className='animate-spin size-8 text-blue-500' />
          <p className='text-lg'>Carregando do banco de dados...</p>
        </div>
      ) : musicas.length === 0 ? (
        <div className='text-center py-28 border-b-[1px]'>
          <p className='text-lg'>A música não existe, ou você digitou errado.</p>
          <Frown className='w-full mt-8' />
        </div>
      ) : (
        musicas.map((item) => (
          <Musica key={item.id} {...item} />
        ))
      )}

      {!loading && musicas.length > 0 && (
        <div className="mt-4 flex justify-center border-t-[1px] pt-5">
          <ChevronsLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${currentPage - 5 <= 0 ? 'invisible' : 'visible'
              }`}
            onClick={() => goToPage(currentPage - 5)}
          />
          <ChevronLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${currentPage === 1 ? 'invisible' : 'visible'
              }`}
            onClick={() => goToPage(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => {
            const pageIndex = index + 1;
            if (pageIndex < currentPage - 2 || pageIndex > currentPage + 2) {
              return null;
            }
            return (
              <span
                key={index}
                onClick={() => goToPage(pageIndex)}
                className={`mx-1 px-2 py-1 text-lg hover:scale-125 hover:cursor-pointer duration-300 ${currentPage === pageIndex ? 'text-white animate-pulse' : 'text-gray-600'
                  }`}
              >
                {pageIndex}
              </span>
            );
          })}
          <ChevronRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${currentPage === totalPages ? 'invisible' : 'visible'
              }`}
            onClick={() => goToPage(currentPage + 1)}
          />
          <ChevronsRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${currentPage + 4 >= totalPages ? 'invisible' : 'visible'
              }`}
            onClick={() => goToPage(currentPage + 5)}
          />
        </div>
      )}
    </div>
  );
};

export default ListaPaginada;