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

// Adicione sua lista de músicas aqui
// Exemplo: { id: 1, musica: 'Nome da Música', cantor: 'Nome do Cantor', linkYoutube: 'URL do YouTube' },
const items: MusicaItem[] = [
    {id: 1, musica: 'Nos Braços do Pai', cantor: 'Diante do Trono', linkYoutube: 'https://www.youtube.com/watch?v=ysm27zozt9k'},
    {id: 2, musica: 'Ao Único', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 3, musica: 'Eu Escolho Deus', cantor: 'Thalles Roberto', linkYoutube: 'https://www.youtube.com/watch?v=xpXGBmAS6fQ'},
    {id: 4, musica: 'Arde Outra Vez', cantor: 'Thalles Roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 5, musica: 'Pai Eu Não Confio em Mim', cantor: 'Thalles Roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 6, musica: 'A Resposta', cantor: 'Thalles Roberto', linkYoutube: 'https://www.youtube.com/watch?v=-3KZhUi-6FY'},
    {id: 7, musica: 'Salmo de Davi', cantor: 'Thalles Roberto', linkYoutube: 'https://www.youtube.com/watch?v=hePHqdmaXxk'},
    {id: 8, musica: 'Raridade', cantor: 'Anderson Freire', linkYoutube: 'https://www.youtube.com/watch?v=0T_BXNyS-Es'},
    {id: 9, musica: 'Ninguém Explica Deus', cantor: 'Preto no Branco', linkYoutube: 'https://www.youtube.com/watch?v=ZZpoFpjzi48'},
    {id: 10, musica: 'Ousado Amor', cantor: 'Isaias Saad', linkYoutube: 'https://www.youtube.com/watch?v=CoTsvINefws'},
    {id: 11, musica: 'Lugar Secreto', cantor: 'Gabriela Rocha', linkYoutube: 'https://www.youtube.com/watch?v=Ff6C7lI67o4'},
    {id: 12, musica: 'Santo Espírito', cantor: 'Gabriela Rocha', linkYoutube: 'https://www.youtube.com/watch?v=FVyWlLKp0ZE'},
    {id: 13, musica: 'Agnus Dei', cantor: 'Michael W. Smith', linkYoutube: 'https://www.youtube.com/watch?v=HPBmFwBSGb0'},
    {id: 14, musica: 'Ninguém Explica Deus', cantor: 'Preto no Branco', linkYoutube: 'https://www.youtube.com/watch?v=zzr7sHqOtrk'},
    {id: 15, musica: 'Aquilo Que Parece Impossível', cantor: 'André Valadão', linkYoutube: 'https://www.youtube.com/watch?v=ZpWyFPsKW0c'},
    {id: 16, musica: 'Fiel a Mim', cantor: 'Eyshila', linkYoutube: 'https://www.youtube.com/watch?v=f9xLE44sgu0'},
    {id: 17, musica: 'Creio Que Tu És a Cura', cantor: 'Gabriela Rocha', linkYoutube: 'https://www.youtube.com/watch?v=dX16CvpWzeE'},
    {id: 18, musica: 'Ele Vem', cantor: 'David Quinlan', linkYoutube: 'https://www.youtube.com/watch?v=FH0V8OSdtC8'},
    {id: 19, musica: 'A Ele a Glória', cantor: 'Fernandinho', linkYoutube: 'https://www.youtube.com/watch?v=HJBy0OjDZc4'},
    {id: 20, musica: 'Deus Cuida de Mim', cantor: 'Kleber Lucas', linkYoutube: 'https://www.youtube.com/watch?v=E7nlPGCh7u4'},
    {id: 21, musica: 'Nada Além do Sangue', cantor: 'Fernandinho', linkYoutube: 'https://www.youtube.com/watch?v=T_L53x5Vx1E'},
    {id: 22, musica: 'Faz um Milagre em Mim', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=qTfrzRo26uA'},
    {id: 23, musica: 'Deus de Promessas', cantor: 'Davi Sacer', linkYoutube: 'https://www.youtube.com/watch?v=DH6e4GnJ8Ys'},
    {id: 24, musica: 'Grandes Coisas', cantor: 'Fernandinho', linkYoutube: 'https://www.youtube.com/watch?v=aIhSzNfxx8g'},
    {id: 25, musica: 'Te Agradeço', cantor: 'Diante do Trono', linkYoutube: 'https://www.youtube.com/watch?v=ocDgcwE-HtQ'},
    {id: 26, musica: 'Preciso de Ti', cantor: 'Diante do Trono', linkYoutube: 'https://www.youtube.com/watch?v=MzGoH80e4II'},
    {id: 27, musica: 'Deus do Impossível', cantor: 'Diante do Trono', linkYoutube: 'https://www.youtube.com/watch?v=WmcsO7aaBh0'},
    {id: 28, musica: 'Espírito Santo', cantor: 'Fernandinho', linkYoutube: 'https://www.youtube.com/watch?v=BVAv_FrrEjY'},
    {id: 29, musica: 'Pra Tocar no Manto', cantor: 'Damares', linkYoutube: 'https://www.youtube.com/watch?v=m-LHVflcFGs'},
    {id: 30, musica: 'Essência de Adorador', cantor: 'Diante do Trono', linkYoutube: 'https://www.youtube.com/watch?v=sXxhSB8XeSE'},
    { id: 31, musica: 'Culto do Calvário', cantor: 'Anderson Freire', linkYoutube: 'https://www.youtube.com/watch?v=XZV6-POb9l0' },
    { id: 32, musica: 'O Que Tua Glória Fez Comigo', cantor: 'Fernanda Brum', linkYoutube: 'https://www.youtube.com/watch?v=3eeQ9cS5Mtg' },
    { id: 33, musica: 'Como Águia', cantor: 'Bruna Karla', linkYoutube: 'https://www.youtube.com/watch?v=HOLe9VaZv6M' },
    { id: 34, musica: 'Guerra Fria', cantor: 'Léa Mendonça', linkYoutube: 'https://www.youtube.com/watch?v=FYYQAFU_BkU' },
    { id: 35, musica: 'A Voz De Quem Adora', cantor: 'Gislaine e Mylena', linkYoutube: 'https://www.youtube.com/watch?v=7U-EriHBQ7M' },
    { id: 36, musica: 'Ressurreto', cantor: 'Jairo Bonfim', linkYoutube: 'https://www.youtube.com/watch?v=ux9Op3z_rCg' },
    { id: 37, musica: 'Rendido Estou', cantor: 'Aline Barros, Fernandinho e Bruna Karla', linkYoutube: 'https://www.youtube.com/watch?v=J7W2go3iKno' },
    { id: 38, musica: 'Desafio No Deserto', cantor: 'Michelle Nascimento', linkYoutube: 'https://www.youtube.com/watch?v=DZz8s-X8_f8' },
    { id: 39, musica: 'Volte A Sonhar', cantor: 'Elaine Martins', linkYoutube: 'https://www.youtube.com/watch?v=xnbtxG5N_1s' },
    { id: 40, musica: 'A Carta', cantor: 'Cassiane', linkYoutube: 'https://www.youtube.com/watch?v=dplJNpVu0eo' },
    { id: 41, musica: 'Deus Fiel', cantor: 'Ministério Sâmella e Daniel', linkYoutube: 'https://www.youtube.com/watch?v=3HMseI9W4w8' },
    { id: 42, musica: 'A Grande Pesca', cantor: 'Beatriz', linkYoutube: 'https://www.youtube.com/watch?v=O1zpFe8l0Nc' },
    { id: 43, musica: 'Deus De Detalhes', cantor: 'Pr. Lucas', linkYoutube: 'https://www.youtube.com/watch?v=O5Q4CDW5p8I' },
    { id: 44, musica: 'A Volta Por Cima', cantor: 'Flordelis', linkYoutube: 'https://www.youtube.com/watch?v=W8lSc3XGl3M' },
    { id: 45, musica: 'Essência Da Adoração', cantor: 'DN1', linkYoutube: 'https://www.youtube.com/watch?v=9F4moj3vB3A' },
    { id: 46, musica: 'Quero Almas', cantor: 'Ariely Bonatti', linkYoutube: 'https://www.youtube.com/watch?v=7Kw2s-e23oo' },
    { id: 47, musica: 'Deus é Deus', cantor: 'Delino Marçal', linkYoutube: 'https://www.youtube.com/watch?v=5w-F41T9KyI' },
    { id: 48, musica: 'Levanta', cantor: 'Rayssa e Ravel', linkYoutube: 'https://www.youtube.com/watch?v=HcS_N7uJSDE' },
    { id: 49, musica: 'Cicatrizes', cantor: 'Bruna Karla', linkYoutube: 'https://www.youtube.com/watch?v=dr5MWkFziTA' },
    { id: 50, musica: 'Só Mais Um Pouco', cantor: 'Geraldo Guimarães', linkYoutube: 'https://www.youtube.com/watch?v=yY0XAP7dDSA' },
    { id: 51, musica: 'Santificação', cantor: 'Elaine Martins', linkYoutube: 'https://www.youtube.com/watch?v=ULH4ht8EXYQ' },
    { id: 52, musica: 'Lugar da Adoração', cantor: 'Ministério Nova Jerusalém', linkYoutube: 'https://www.youtube.com/watch?v=zVi82F_ihBA' },
    { id: 53, musica: 'Profetizo', cantor: 'Regis Danese', linkYoutube: 'https://www.youtube.com/watch?v=91UePb09xKk' },
    { id: 54, musica: 'Minha Oferta', cantor: 'Fernanda Brum', linkYoutube: 'https://www.youtube.com/watch?v=7TkfLaXgtB8' },
    { id: 55, musica: 'Janelas da Alma', cantor: 'Gisele Nascimento', linkYoutube: 'https://www.youtube.com/watch?v=SA74b4hXo8Q' },
    { id: 56, musica: 'Há Poder', cantor: 'Ministério Apascentar de Louvor', linkYoutube: 'https://www.youtube.com/watch?v=G_YVRJt3f9s' },
    { id: 57, musica: 'Nada Temerei', cantor: 'Igreja Batista Atitude', linkYoutube: 'https://www.youtube.com/watch?v=iHpEslJ2Z2E' },
    { id: 58, musica: 'Então É Só Clamar', cantor: 'Quatro Por Um', linkYoutube: 'https://www.youtube.com/watch?v=2tM6lb4juYY' },
    { id: 59, musica: 'Raridade', cantor: 'Anderson Freire', linkYoutube: 'https://www.youtube.com/watch?v=5M6jNY4LIu4' },
    { id: 60, musica: 'Não Vou Desistir', cantor: 'Wilian Nascimento', linkYoutube: 'https://www.youtube.com/watch?v=CltjqF1aLmg' },
    { id: 61, musica: 'Te Amarei, Senhor', cantor: 'Padre Zezinho', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 62, musica: 'A Batalha é do Senhor', cantor: 'Toque No Altar', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 63, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 64, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 65, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 66, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 67, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 68, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 69, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 70, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 71, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 72, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 73, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 74, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 75, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 76, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 77, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 78, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 79, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 80, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 81, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 82, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 83, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 84, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 85, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 86, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 87, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 88, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 89, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 90, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 91, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 92, musica: 'Oração pela Vida', cantor: 'Ana Nóbrega', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 93, musica: 'Deus do Impossível', cantor: 'Régis Danese', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
{ id: 94, musica: 'Meu Grande Amor', cantor: 'Aline Barros', linkYoutube: 'https://www.youtube.com/watch?v=5nIhttHt0uk' },
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

    const filteredItems = items.filter((item) => {
        const lowerSearchTerm = searchMusic.toLowerCase();
        return (
        item.musica.toLowerCase().includes(lowerSearchTerm) ||
        item.cantor.toLowerCase().includes(lowerSearchTerm) ||
        item.id.toString().includes(lowerSearchTerm)
        );
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        if (sortOrder === 'id') {
        return a.id - b.id;
        } else if (sortOrder === 'alphabetical') {
        return a.musica.localeCompare(b.musica);
        }
        return 0;
    });

    const foundItem = items.find((item) =>
        item.musica.toLowerCase() === searchMusic.toLowerCase() ||
        item.cantor.toLowerCase() === searchMusic.toLowerCase() ||
        item.id.toString() === searchMusic
    );

    const currentItems = sortedItems.slice(startIndex, endIndex);

    return (
        <div className='pb-20'>
    <div className="flex flex-wrap justify-around border-b-[1px] space-y-5 pl-5">
        <div className="w-full sm:w-auto text-center">
            <p>Número</p>
        </div>
        <div className="w-full sm:w-auto text-center pr-4">
            <p>Música</p>
        </div>
        <div className="w-full sm:w-auto text-center">
            <p>Cantor</p>
        </div>
        <div className="w-full sm:w-auto text-center ml-0 sm:ml-[73px]">
            <input type="search" id="search-input" className="rounded-lg outline-none bg-transparent px-3 w-60 border-[1px]"
                placeholder='Digite o nome da Música'
                value={searchMusic}
                onChange={(e) => setSearchMusic(e.target.value)}
            />
        </div>
        <div className="w-full sm:w-auto text-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex rounded-lg outline-none bg-transparent px-3 border-[1px] text-center">
                        Ordenar por <ArrowDownUp className='size-3 mt-1.5 ml-2' />
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
                className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${
                    currentPage - 5 <= 0 ? 'invisible' : 'visible'
                }`}
                onClick={() => goToPage(currentPage - 5)}
            />
            <ChevronLeft
                className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${
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
                className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${
                    currentPage === totalPages ? 'invisible' : 'visible'
                }`}
                onClick={() => goToPage(currentPage + 1)}
            />
            <ChevronsRight
                className={`mt-[7px] hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300 ${
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
