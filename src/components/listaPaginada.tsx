// src/components/ListaPaginada.tsx
import React, { useState } from 'react';
import { Musica } from './musica'; // Importe o componente de música
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, Frown } from 'lucide-react';
// import  iconSad  from '../assets/emojiTriste.svg';

interface MusicaItem {
    id: number;
    musica: string;
    cantor: string;
    linkYoutube: string;
}

const items: MusicaItem[] = [
    // Seus itens da lista de músicas aqui

    {id: 1, musica: 'Nos braços do pai', cantor: 'Diante do trono', linkYoutube: 'https://www.youtube.com/watch?v=ysm27zozt9k'},
    {id: 2, musica: 'Ao unico', cantor: 'Aline barros', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 3, musica: 'Eu escolho deus', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 4, musica: 'Arde outra vez', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 5, musica: 'Pai eu não confio em mim', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 6, musica: 'Eu escolho deus', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=xpXGBmAS6fQ' },
    {id: 7, musica: 'A resposta', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=-3KZhUi-6FY' },
    {id: 8, musica: 'Salmo de davi', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=hePHqdmaXxk'},
        

    // Exemplo: { id: 1, musica: 'Nome da Música', cantor: 'Nome do Cantor', linkYoutube: 'URL do YouTube' }
];

const ITEMS_PER_PAGE = 10;

const ListaPaginada: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchMusic, setSearchMusic] = useState('');

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

    const foundItem = items.find((item) =>
        item.musica.toLowerCase() === searchMusic.toLowerCase() ||
        item.cantor.toLowerCase() === searchMusic.toLowerCase() ||
        item.id.toString() === searchMusic
    );

    const currentItems = filteredItems.slice(startIndex, endIndex);
    
    return (
        <div className='pb-20'>
            <div className="flex justify-around border-b-[1px] space-y-5 space-y-reverse pl-5">
                <div>
                    <p>Número</p>
                </div>
                <div className="pr-4">
                    <p>Música</p>
                </div>
                <div>
                    <p>Cantor</p>
                </div>
                <div className='ml-[73px]' >
                    <input type="search" name="" id="search-input" className="rounded-lg 
                    outline-none text-white px-3 w-60 bg-transparent border-[1px]"
                    placeholder='Digite o nome da Música'
                    value={searchMusic}
                    onChange={(e) => setSearchMusic(e.target.value)}
                    />
                </div>
            </div>

            {/* ... (código anterior) ... */}

        {foundItem ? (
            currentItems.some((item) => item.id === foundItem.id) ? (
                currentItems.map((item) => (
                    <Musica key={foundItem.id} {...item} />
                ))
                    ) : (
                        <Musica key={foundItem.id} {...foundItem} />
                    )
            ) : (
                filteredItems.length === 0 ? (
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

            {currentItems.length >= 1 ? (
                <div className="mt-4 flex justify-center border-t-[1px] pt-5">
                <ChevronsLeft
                    className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                            hover:animate-pulse duration-300 ${
                        currentPage - 5 <= 0
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage - 5)}
                />
                <ChevronLeft
                    className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                            hover:animate-pulse duration-300 ${
                        currentPage === + 1
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage - 1)}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`mx-1 px-2 py-1 text-lg hover:scale-125 
                                    hover:cursor-pointer 
                                    duration-300 ${
                                currentPage === index + 1
                                    ? 'text-blue-600 '
                                    : 'text-gray-200 '
                            }`}
                        >
                            {index + 1}
                        </span>
                ))}
                <ChevronRight
                    className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                            hover:animate-pulse duration-300 ${
                        currentPage === totalPages
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage + 1)}
                />
                <ChevronsRight
                    className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                            hover:animate-pulse duration-300 ${
                        currentPage + 4 >= totalPages
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage + 5)}
                />
            </div>
            ): (
                <></>
            )}

        </div>
    );
};

export default ListaPaginada;


// const SearchBar: React.FC = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const filteredItems = items.filter((item) =>
//         item.musica.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Digite o nome da música"
//                 className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//         </div>
//     );
// };

