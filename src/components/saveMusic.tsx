import * as Dialog from '@radix-ui/react-dialog';
import { useMusicContext } from "./musicContext";

import { X, Trash2, SendHorizontal, ListX } from 'lucide-react'

export function SaveMusic() {

  const { musicList, removeMusic, clearList } = useMusicContext();

  const shareOnWhatsApp = () => {
    const message = musicList.map(music => `${music.id} . ${music.musica} - ${music.cantor}`).join("\n");
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog.Root>
    <Dialog.Trigger className="hover:scale-105 duration-300">
        <Dialog.Title>
            <span className=''>
                Musicas 
            </span>
        </Dialog.Title>
    </Dialog.Trigger>

    <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className='fixed inset-0 tablet:inset-auto tablet:left-1/2 tablet:top-1/2 tablet:-translate-x-1/2 
                tablet:-translate-y-1/2 bg-[#181f2c] tablet:rounded-md flex flex-col outline-none 
                tablet:w-full tablet:h-[80vh] tablet:max-w-[640px]'>
            <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100'>
                <X className='m-3'/>
            </Dialog.Close> 
            <form className=''>
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className='text-lg text-slate-300'>
                        Músicas salvas
                    </span>
                </div>
            </form>
            <div className='overflow-y-auto scrollbar scrollbar-thumb-gray-800 h-full justify-between'>
                {musicList.map(music => (
                    <div key={music.id} className="px-12 py-5 flex items-center justify-between">
                        {music.id}. {music.musica}  |  {music.cantor}
                        <button onClick={() => removeMusic(music.id)} className="text-red-500 p-1 ml-2">
                            <Trash2/>
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex p-5 pb-8 items-center justify-around'>
                <div>
                { musicList.length === 0 ? (
                        <button
                            className="border-[1px] border-gray-700 text-gray-600 
                            rounded-lg flex items-center justify-center hover:cursor-default
                            w-28 h-10 tablet:w-36 tablet:h-12 duration-300"
                        > 
                            <ListX/>
                        </button>
                    ) : (
                        <button onClick={clearList} 
                            className="border-[1px] border-red-600 text-red-600 rounded-lg 
                            flex items-center justify-center hover:scale-105 hover:text-gray-300
                            hover:bg-red-600 hover:border-transparent duration-300
                            w-28 h-10 tablet:w-36 tablet:h-12"
                        >
                            <ListX/>
                        </button>
                    )}
                </div>
                <div>
                    { musicList.length === 0 ? (
                        <button
                            className="border-[1px] border-gray-700 text-gray-600 
                            rounded-lg flex items-center justify-center hover:cursor-default
                            w-28 h-10 tablet:w-36 tablet:h-12 duration-300"
                        > 
                            <SendHorizontal/>
                        </button>
                    ) : (
                        <button 
                            onClick={shareOnWhatsApp} 
                            className="border-[1px] border-green-700 text-green-600 
                            rounded-lg flex items-center justify-center hover:scale-105 
                            hover:text-gray-300 hover:bg-green-700 hover:border-transparent duration-300
                            w-28 h-10 tablet:w-36 tablet:h-12"
                        > 
                            <SendHorizontal/>
                        </button>
                    )}
                </div>
            </div>
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>

)}