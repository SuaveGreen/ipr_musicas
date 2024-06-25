// src/components/ListaPaginada.tsx
import React, { useState } from 'react';
import { Musica } from './musica'; // Importe o componente de música
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft  } from 'lucide-react';

interface MusicaItem {
    id: number;
    musica: string;
    cantor: string;
    linkYoutube: string;
}

const items: MusicaItem[] = [
    // Seus itens da lista de músicas aqui

    {id: 1, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 2, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 3, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 4, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 5, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 6, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 7, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 8, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 9, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 10, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 11, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 12, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 13, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 14, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 15, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 16, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 17, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 18, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 19, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 20, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 21, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 22, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 23, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 24, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},
    {id: 25, musica: 'Paixão de adolescente', cantor: 'Thalles roberto', linkYoutube: 'https://www.youtube.com/watch?v=ljUhhNeVrCU'},

    // Exemplo: { id: 1, musica: 'Nome da Música', cantor: 'Nome do Cantor', linkYoutube: 'URL do YouTube', linkCifra: 'URL da Cifra' }
];

const ITEMS_PER_PAGE = 10;

const ListaPaginada: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = items.slice(startIndex, endIndex);

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {currentItems.map((item) => (
                <Musica key={item.id} {...item} />
            ))}

            <div className="mt-4 flex justify-center border-t-[1px] pt-5">
                <ChevronsLeft
                    className={`mt-[7px] ${
                        currentPage - 5 <= 0
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage - 5)}
                />
                <ChevronLeft
                    className={`mt-[7px] ${
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
                            className={`mx-1 px-2 py-1 text-lg ${
                                currentPage === index + 1
                                    ? 'text-blue-600 '
                                    : 'text-gray-200 '
                            }`}
                        >
                            {index + 1}
                        </span>
                ))}
                <ChevronRight
                    className={`mt-[7px] ${
                        currentPage === totalPages
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage + 1)}
                />
                <ChevronsRight
                    className={`mt-[7px] ${
                        currentPage + 4 >= totalPages
                            ? 'invisible '
                            : 'visible'
                    }`}
                    onClick={() => goToPage(currentPage + 5)}
                />
            </div>
        </div>
    );
};

export default ListaPaginada;
