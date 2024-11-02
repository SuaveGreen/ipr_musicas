import { Play, FileMusic, Save } from 'lucide-react';
import { useMusicContext } from './musicContext';

interface Musica {
  id: number
  musica: string
  cantor: string
  linkYoutube: string
}

export const Musica: React.FC<Musica> = ({ id, musica, cantor, linkYoutube }) => {
  const { addMusic } = useMusicContext();

  const handleSaveMusic = () => {
    addMusic({ id, musica, cantor, linkYoutube });
  };

  function transformarString(input: string): string {
    
    const stringSemEspacos = input.replace(/ /g, "-");
    const stringSemAcento = stringSemEspacos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return stringSemAcento.charAt(0).toLowerCase() + stringSemAcento.slice(1);
}

  const singer = transformarString(`${cantor}`);
  const musicName = transformarString(`${musica}`);

  const cifraclub = `https://www.cifraclub.com.br/${singer}/${musicName}/`

  return(
    <div className='mt-3 text-nowrap text-left'>
      <div className="grid grid-cols-6 gap-x-[20vh] ml-[8.9vh] py-[19px] ">
        <div className="pl-10 w-16">
          {id}
        </div>
        <div className="">
          {/* {props.musica} */}
          {musica}
        </div>
        <div className="px-5">
          {/* {props.cantor} */}
          {cantor}
        </div>

        <div className='grid grid-cols-3 gap-[20vh]'>
          <div className="pl-5">
            <a href={linkYoutube} target='_blank'>
              <Play className='size-4 hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300'/>
            </a>
          </div>
          <div className="pl-[6px]">
            <a href={cifraclub} target='_blank'>
              <FileMusic className='size-5 hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300'/>
            </a>
          </div>
          <div className="pl-2">
            <button>
              <Save onClick={handleSaveMusic} className='size-5 hover:scale-125 hover:cursor-pointer 
              hover:animate-pulse duration-300' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}
