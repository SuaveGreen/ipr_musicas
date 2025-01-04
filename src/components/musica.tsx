import { Play, FileMusic, Save } from 'lucide-react';
import { useMusicContext } from './musicContext';
import { useToast } from './ToastProvider';

interface Musica {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
}

export const Musica: React.FC<Musica> = ({ id, musica, cantor, linkYoutube }) => {
  const { addMusic } = useMusicContext();
  const { showToast } = useToast();

  const handleSaveMusic = () => {
    const exists = addMusic({ id, musica, cantor, linkYoutube });
    if (exists) {
      showToast("Falha", `A música "${musica}" já está salva.`);
    } else {
      showToast("Sucesso", `A música "${musica}" foi salva.`);
    }
  };

  function transformarString(input: string): string {
    const stringSemEspacos = input.replace(/ /g, "-");
    const stringSemAcento = stringSemEspacos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const stringSemSimbolos = stringSemAcento.replace(/[?!]/g, ""); // Remove ! e ?
    const stringMinuscula = stringSemSimbolos.toLowerCase();
    return stringMinuscula;
  }
  

const singer = transformarString(`${cantor}`);
const musicName = transformarString(`${musica}`);
const cifraclub = `https://www.cifraclub.com.br/${singer}/${musicName}/`;


  return (
    <div className='mt-3 text-nowrap text-left'>
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-6 md:gap-x-5 lg:gap-x-[20vh] ml-[8.9vh] py-[19px]">
        <div className="pl-10 w-16">
            {id}
        </div>
        <div>
            {musica}
        </div>
        <div className="px-5">
            {cantor}
        </div>
        <div className='grid grid-cols-3 gap-5 md:gap-[20vh]'>
            <div className="pl-5">
                <a href={linkYoutube} target='_blank' rel="noopener noreferrer">
                    <Play className='size-4 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300'/>
                </a>
            </div>
            <div className="pl-[6px]">
                <a href={cifraclub} target='_blank' rel="noopener noreferrer">
                    <FileMusic className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300'/>
                </a>
            </div>
            <div className="pl-2">
                <button onClick={handleSaveMusic}>
                    <Save className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
                </button>
            </div>
        </div>
    </div>
</div>

  );
};
