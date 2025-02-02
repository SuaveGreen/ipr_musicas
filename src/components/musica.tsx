import { Play, FileMusic, Save,  } from 'lucide-react';
import { useMusicContext } from './musicContext';
import { useToast } from './ToastProvider';
// CaseLower
interface Musica {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
  // letra: string;
}

export const Musica: React.FC<Musica> = ({ id, musica, cantor, linkYoutube }) => {
  const { addMusic } = useMusicContext();
  const { showToast } = useToast();

  const handleSaveMusic = () => {
    const isDuplicate = addMusic({ id: id.toString(), musica, cantor });
    if (isDuplicate) {
      showToast("Falha", `A música "${musica}" já está salva.`);
    } else {
      showToast("Sucesso", `A música "${musica}" foi salva.`);
    }
  };

  function transformarString(input: string): string {
    const stringSemEspacos = input.replace(/ /g, "-");
    const stringSemAcento = stringSemEspacos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const stringSemSimbolos = stringSemAcento.replace(/[?!,.]/g, ""); // Remove ! e ?
    const stringMinuscula = stringSemSimbolos.toLowerCase();

    return stringMinuscula;
  }

  const singer = transformarString(cantor);
  const musicName = transformarString(musica);
  const cifraclub = `https://www.cifraclub.com.br/${singer}/${musicName}/`;
  // const cifra = '';

  return (
    <div className='mt-3 text-nowrap text-left '>
      <div className="grid grid-cols-1 gap-5 tablet:grid-cols-6 tabletx:w-[100%] tabletx:ml-4 py-[19px] tabletx:py-8 monitor:ml-[6vh]">
        <div className="hidden tablet:block pl-10 w-16 hover:cursor-default">
          {id}
        </div>
        <div className='hidden tablet:block overflow-hidden hover:cursor-default'>
          {musica}
        </div>
        <div className='flex space-x-5 tablet:hidden overflow-hidden'>
          <div>
            {id}
          </div>
          <div>
            {musica}
          </div>
        </div>
        <div className="overflow-hidden hover:cursor-default">
          {cantor}
        </div>
        <div className='grid grid-cols-4 tablet:ml-[3vh] tablet:gap-[8vh] notebook:gap-[20vh]'>
          <div className="mt-[2px] w-4 h-4">
            <button onClick={handleSaveMusic}>
              <Save className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
            </button>
          </div>
          <div className="mt-1 w-4 h-4">
            {linkYoutube ? (
              <a href={linkYoutube} target="_blank" rel="noopener noreferrer" className=''>
                <Play className='size-4 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
              </a>
            ) : (
              <a href={linkYoutube} target="_blank">
                <Play className='hidden' />
              </a>
            )}
          </div>
          <div className="w-4 h-4">
            {cantor ? (
              <a href={cifraclub} target="_blank" rel="noopener noreferrer">
                <FileMusic className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
              </a>
            ) : (
              <a href={cifraclub} target="_blank">
                <FileMusic className='hidden' />
              </a>
            )}
          </div>

          {/* <div className="w-4 h-4">
            {cifra ? (
              <span >
                <CaseLower />
              </span>
            ) : (
              <span className='hidden' >
                <CaseLower />
              </span>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
