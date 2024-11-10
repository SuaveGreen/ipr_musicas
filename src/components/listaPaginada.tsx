import React, { useState } from 'react';
import { Musica } from './musica';
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, Frown, ArrowDownUp, AArrowUp, ListOrdered } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

interface MusicaItem {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
}

const items: MusicaItem[] = [
    {id: 1, musica: 'Tá decidido', cantor: 'Damares', linkYoutube: ' '},
{id: 2, musica: 'Quero tanto agradecer', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 3, musica: 'Deus do Impossível', cantor: 'Diante do Trono', linkYoutube: ' '},

{id: 4, musica: 'Perdão e graça', cantor: 'Fernandinho', linkYoutube: ' '},

{id: 5, musica: 'Quanto amor', cantor: 'MUSIC NOT FOUND', linkYoutube: ' '},

{id: 6, musica: 'Oh! Por que duvidar', cantor: 'Voz da Verdade', linkYoutube: ' '},

{id: 7, musica: 'Chove, chove, chuva', cantor: 'MUSIC NOT FOUND', linkYoutube: ' '},

{id: 8, musica: 'Jesus meu guia é', cantor: 'Novo Tom', linkYoutube: ' '},

{id: 9, musica: 'Descansarei', cantor: 'André Valadão', linkYoutube: ' '},

{id: 10, musica: 'Tenho fome', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 11, musica: 'Eu te quero Senhor', cantor: 'David Quinlan', linkYoutube: ' '},

{id: 12, musica: 'Fogo de Deus', cantor: 'Mariana Valadão', linkYoutube: ' '},

{id: 13, musica: 'Deus enviou', cantor: 'Daniela Araújo', linkYoutube: ' '},

{id: 14, musica: 'Diante de Ti', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 15, musica: 'Rendição', cantor: 'Livres para Adorar', linkYoutube: ' '},

{id: 16, musica: 'Eu Te louvarei meu bom Jesus', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 17, musica: 'Bom estarmos aqui', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 18, musica: 'Dê-nos mãos limpas', cantor: 'Rosa de Saron', linkYoutube: ' '},

{id: 19, musica: 'Senho Te quero', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 20, musica: 'Poder para salvar', cantor: 'Hillsong United', linkYoutube: ' '},

{id: 21, musica: 'Lança sobre mim', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 22, musica: 'A cura', cantor: 'Cassiane', linkYoutube: ' '},

{id: 23, musica: 'O som da chuva', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 24, musica: 'Vem esta é a hora', cantor: 'Vineyard Music', linkYoutube: ' '},

{id: 25, musica: 'Jesus Te entronizamos', cantor: 'David Quinlan', linkYoutube: ' '},

{id: 26, musica: 'Grande é o Senhor', cantor: 'Fernandinho', linkYoutube: ' '},

{id: 27, musica: 'Pelo Senhor', cantor: 'Asaph Borba', linkYoutube: ' '},

{id: 28, musica: 'Adoração', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 29, musica: 'Louve e exalte ao Senhor', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 30, musica: 'Vento do Espírito', cantor: 'Liz Lanne', linkYoutube: ' '},

{id: 31, musica: 'Deixe-me tocar', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 32, musica: 'Meu coração', cantor: 'Ana Paula Valadão', linkYoutube: ' '},

{id: 33, musica: 'Vem cear', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 34, musica: 'Os guerreiros', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 35, musica: 'Te dou meu coração', cantor: 'Hillsong United', linkYoutube: ' '},

{id: 36, musica: 'Em espírito e em verdade', cantor: 'Nívea Soares', linkYoutube: ' '},

{id: 37, musica: 'Te louvarei', cantor: 'Diante do Trono', linkYoutube: ' '},

{id: 38, musica: 'Eu quero descer', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 39, musica: 'Me leva onde eu possa ouvir Tua voz', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 40, musica: 'A luz do Teu rosto', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 41, musica: 'Exaltai', cantor: 'Diante do Trono', linkYoutube: ' '},

{id: 42, musica: 'Os sonhos de Deus', cantor: 'Damares', linkYoutube: ' '},

{id: 43, musica: 'Não morrerei', cantor: 'Fernandinho', linkYoutube: ' '},

{id: 44, musica: 'Te amo ó Deus', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 45, musica: 'Eu navegarei', cantor: 'Aline Barros', linkYoutube: ' '},

{id: 46, musica: 'Terremoto', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 47, musica: 'Te amo tanto', cantor: 'Fernanda Brum', linkYoutube: ' '},

{id: 48, musica: 'Ainda que a figueira', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},

{id: 49, musica: 'Vem espírito de Deus', cantor: 'André Valadão', linkYoutube: ' '},

{id: 50, musica: 'Como é precioso irmão', cantor: 'CANTOR NOT FOUND', linkYoutube: ' '},
];

const ITEMS_PER_PAGE = 10;

const ListaPaginada: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchMusic, setSearchMusic] = useState('');
  const [sortOrder, setSortOrder] = useState<'id' | 'alphabetical'>('id');

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const removePunctuationAndAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  };
  
  const filteredItems = items.filter((item) => {
    const lowerSearchTerm = removePunctuationAndAccents(searchMusic.toLowerCase());
    return (
      removePunctuationAndAccents(item.musica.toLowerCase()).includes(lowerSearchTerm) ||
      removePunctuationAndAccents(item.cantor.toLowerCase()).includes(lowerSearchTerm) ||
      item.id.toString().includes(lowerSearchTerm)
    );
  });
  
  const foundItem = items.find((item) =>
    removePunctuationAndAccents(item.musica.toLowerCase()) === removePunctuationAndAccents(searchMusic.toLowerCase()) ||
    removePunctuationAndAccents(item.cantor.toLowerCase()) === removePunctuationAndAccents(searchMusic.toLowerCase()) ||
    item.id.toString() === searchMusic
  );
  
  
  
const sortedItems = [...filteredItems].sort((a, b) => {
  if (sortOrder === 'id') {
    return a.id - b.id;
  } else if (sortOrder === 'alphabetical') {
    return a.musica.localeCompare(b.musica);
  }
  return 0;
});

  const currentItems = sortedItems.slice(startIndex, endIndex);

  return (
    <div className='pb-20'>
      <div className="flex flex-wrap justify-between border-b-[1px] space-y-5 pl-5">
        {/* Número, Música e Cantor invisíveis apenas em dispositivos móveis */}
        <div className="hidden md:block w-full sm:w-auto text-center">
          <p>Número</p>
        </div>
        <div className="hidden md:block w-full sm:w-auto text-center pr-4">
          <p>Música</p>
        </div>
        <div className="hidden md:block w-full sm:w-auto text-center">
          <p>Cantor</p>
        </div>
        <div className="w-full sm:w-auto text-center">
          <input 
            type="search" 
            id="search-input" 
            className="rounded-lg outline-none bg-transparent px-2 md:px-3 w-40 md:w-60 border-[1px]" 
            placeholder='Digite o nome da Música'
            value={searchMusic}
            onChange={(e) => setSearchMusic(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex rounded-lg outline-none bg-transparent px-3 border-[1px] text-center md:block">
                <span className="hidden md:inline">Ordenar por</span> <ArrowDownUp className='size-3 mt-1.5 ml-2' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} className="bg-blue-200 rounded-md shadow-lg">
              <DropdownMenuItem className='bg-[#181f2c] p-1.5 border-b-[1px]' onSelect={() => setSortOrder('id')}>
                <ListOrdered />
                Ordenar por Número
              </DropdownMenuItem>
              <DropdownMenuItem className='bg-[#181f2c] p-1.5' onSelect={() => setSortOrder('alphabetical')}>
                <AArrowUp />
                Ordenar por Alfabética
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {foundItem ? (
        currentItems.some((item) => item.id === foundItem.id) ? (
          currentItems.map((item) => (
            <Musica key={item.id} {...item} />
          ))
        ) : (
          <Musica key={foundItem.id} {...foundItem} />
        )
      ) : (
        sortedItems.length === 0 ? (
          <div className='text-center py-28 border-b-[1px]'>
            <p className='text-lg'>A música não existe, ou você digitou errado.</p>
            <Frown className='ml-[78vh] mt-8' />
          </div>
        ) : (
          currentItems.map((item) => (
            <Musica key={item.id} {...item} />
          ))
        )
      )}

      {currentItems.length > 0 && (
        <div className="mt-4 flex justify-center border-t-[1px] pt-5">
          <ChevronsLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage - 5 <= 0 ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage - 5)}
          />
          <ChevronLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage === 1 ? 'invisible' : 'visible'
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
                className={`mx-1 px-2 py-1 text-lg hover:scale-125 hover:cursor-pointer duration-300 ${
                  currentPage === pageIndex ? 'text-white animate-pulse' : 'text-gray-600'
                }`}
              >
                {pageIndex}
              </span>
            );
          })}
          <ChevronRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage === totalPages ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage + 1)}
          />
          <ChevronsRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage + 4 >= totalPages ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage + 5)}
          />
        </div>
      )}
    </div>
  );

};

export default ListaPaginada;
