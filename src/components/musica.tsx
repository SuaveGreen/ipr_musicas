import { Play, FileMusic, Save } from 'lucide-react';

interface Musica {
  id: number
  musica: string
  cantor?: string
  linkYoutube: string
}

export function Musica(props: Musica) {

  function transformarString(input: string): string {
    
    const stringSemEspacos = input.replace(/ /g, "-");
    const stringSemAcento = stringSemEspacos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return stringSemAcento.charAt(0).toLowerCase() + stringSemAcento.slice(1);
}

  const singer = transformarString(`${props.cantor}`);
  const musicName = transformarString(`${props.musica}`);

  const cifraclub = `https://www.cifraclub.com.br/${singer}/${musicName}/`

  return(
    <div className='grid grid-cols-2 mt-3 gap-52 text-nowrap text-left'>
      <div className=" grid grid-cols-3 gap-40 space-x-[-30px]  py-[19px] text-nowrap text-left">
        <div className="pl-10 w-16">
          {props.id}
        </div>
        <div className="">
          {props.musica}
          {/* {musicName} */}
        </div>
        <div className="px-5">
          {props.cantor}
          {/* {singer} */}
        </div>
      </div>
      <div className='grid grid-cols-3 py-[19px] text-nowrap text-left"'>
        <div className="pl-5">
          <a href={props.linkYoutube} target='_blank'>
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
          <Save className='size-5 hover:scale-125 hover:cursor-pointer 
            hover:animate-pulse duration-300' />
        </div>
      </div>
    </div>
  )

}