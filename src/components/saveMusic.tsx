import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';
import { useMusicContext } from './musicContext';
import { DragAndDrop, DndItem } from './dragAndDrop';
import { X, Trash2, SendHorizontal, ListX, Music } from 'lucide-react';
import Cifra from './cifra';
import { letras } from './letras';
// import { MusicaItem } from './types';
// import Cifra from './cifra';
// import { letras } from './letras';
// import LetraDialog from './letraDialog';
// import { musicas } from './armazem';
// import { Musica } from './musica';

export function SaveMusic() {
  const { musicList, removeMusic, clearList } = useMusicContext();
  const [orderedList, setOrderedList] = useState(musicList);

  // Sincroniza ordenação local quando a lista global muda
  useEffect(() => {
    setOrderedList(musicList);
  }, [musicList]);

    function temLetra(musicId: number): boolean {
      const letra = letras[musicId];
      return letra !== undefined && letra.trim().length > 0;
    }

  // Compartilha no WhatsApp com dia da semana e número do dia
    const shareOnWhatsApp = () => {
    const hoje = new Date();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const nomeDia = diasSemana[hoje.getDay()];
    const numeroDia = hoje.getDate();
    const header = `Hinos de hoje: *${nomeDia} ${numeroDia}*`
    

    const linhas = orderedList.map(
      (music) =>
        `${music.id}. *${music.musica}* ${music.cantor ? ` - _${music.cantor}_` : ''}`
    );
    const message = [header, '', ...linhas].join('\n');
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="hover:scale-105 duration-300 mb-4">
        <Dialog.Title>
          <span>Músicas salvas</span>
        </Dialog.Title>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content
          className="fixed inset-0 tablet:inset-auto tablet:left-1/2 tablet:top-1/2 \
            tablet:-translate-x-1/2 tablet:-translate-y-1/2 bg-[#181f2c] tablet:rounded-md \
            flex flex-col outline-none tablet:w-full tablet:h-[80vh] tablet:max-w-[640px]"
        >
          <Dialog.Close className="absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="m-3" />
          </Dialog.Close>

          <div className="p-5">
            <span className="text-lg text-slate-300">Músicas salvas</span>
          </div>

          <div className="overflow-y-auto  scrollbar scrollbar-thumb-gray-800 flex-1">
            <DragAndDrop
              items={orderedList.map((music) => ({ id: music.id, data: music } as DndItem<typeof music>))}
              onReorder={(newItems) => setOrderedList(newItems.map((i) => i.data))}
              renderItem={(music) => (
                <div className="flex items-center justify-between celular:mx-8 py-5 ">
                  <div className='mr-5'>
                    <span className='mr-5 flex text-wrap overflow-x-hidden'>{music.id}. {music.musica}</span>
                    <span className='mr-5'>{music.cantor}</span>
                  </div>
                  <div className='flex items-center justify-between space-x-3 tablet:space-x-7 notebook:space-x-12 '>
                    <div>
                      <span
                        className=" flex  justify-between space-x-4 tablet:space-x-9 notebook:space-x-14 "
                      >
                        {/* <div>
                          <LetraDialog key={Number(music.id)} music={musicItem} />
                        </div> */}
                        <div>
                          { temLetra(Number(music.id)) ? (
                            <Dialog.Root>
                              <Dialog.Trigger asChild>
                                <Music
                                  className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300'
                                />
                              </Dialog.Trigger>

                              <Dialog.Portal>
                                <Dialog.Overlay />
                                <Dialog.Content className="fixed inset-0 tablet:inset-auto tablet:left-1/2 tablet:top-1/2
                                    tablet:-translate-x-1/2 tablet:-translate-y-1/2 bg-withe tablet:rounded-md
                                    flex outline-none w-[90%] h-[90%] celular:w-[100%] celular:h-[100%] p-6 justify-center overflow-y-auto scrollbar scrollbar-thumb-gray-800 flex-1">

                                  <Dialog.Close className="absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100">
                                    <X className="m-3" />
                                  </Dialog.Close>
                                    <Cifra musicaId={Number(music.id)}/>
                                </Dialog.Content>
                              </Dialog.Portal>
                            </Dialog.Root>
                          ) : (
                            <Music className='hidden' />
                          )}
                        </div>
                        {/* <div>
                          { music.cantor ? (
                            <a href={music.cantor} target="_blank" rel="noopener noreferrer">
                              <FileMusic className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
                            </a>
                          ) : (
                            <a href={music.cantor} target="_blank">
                              <FileMusic className='hidden' />
                            </a>
                          )}
                        </div> */}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => removeMusic(music.id)}
                        className="text-red-500 p-1"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>

          <div className="flex p-5 pb-8 items-center justify-around">
            <div>
              {orderedList.length === 0 ? (
                <button
                  className="border-[1px] border-gray-700 text-gray-600 rounded-lg flex items-center justify-center hover:cursor-default w-28 h-10 tablet:w-36 tablet:h-12 duration-300"
                >
                  <ListX />
                </button>
              ) : (
                <button
                  onClick={clearList}
                  className="border-[1px] border-red-600 text-red-600 rounded-lg flex items-center justify-center hover:scale-105 hover:text-gray-300 hover:bg-red-600 hover:border-transparent duration-300 w-28 h-10 tablet:w-36 tablet:h-12"
                >
                  <ListX />
                </button>
              )}
            </div>
            <div>
              {orderedList.length === 0 ? (
                <button
                  className="border-[1px] border-gray-700 text-gray-600 rounded-lg flex items-center justify-center hover:cursor-default w-28 h-10 tablet:w-36 tablet:h-12 duration-300"
                >
                  <SendHorizontal />
                </button>
              ) : (
                <button
                  onClick={shareOnWhatsApp}
                  className="border-[1px] border-green-700 text-green-600 rounded-lg flex items-center justify-center hover:scale-105 hover:text-gray-300 hover:bg-green-700 hover:border-transparent duration-300 w-28 h-10 tablet:w-36 tablet:h-12"
                >
                  <SendHorizontal />
                </button>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
