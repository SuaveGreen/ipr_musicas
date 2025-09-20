// import * as Dialog from '@radix-ui/react-dialog';
// import { Music, X } from 'lucide-react';
// import { MusicaItem } from './armazem'; // ajuste o caminho conforme necessário
// import { letras } from './letras';
// import Cifra from './cifra';

// const LetraDialog = ({ music }: { music: MusicaItem }) => {
//   function temLetra(musicId: number): boolean {
//     const letra = letras[musicId];
//     return letra !== undefined && letra.trim().length > 0;
//   }

//   if (!temLetra(music.id)) {
//     return <Music className='hidden' />;
//   }

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <Music className='size-5 hover:scale-125 hover:cursor-pointer hover:animate-pulse duration-300' />
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay />
//         <Dialog.Content
//           className="fixed inset-0 tablet:inset-auto tablet:left-1/2 tablet:top-1/2
//           tablet:-translate-x-1/2 tablet:-translate-y-1/2 bg-[#181f2c] tablet:rounded-md
//           flex outline-none w-[90%] h-[90%] celular:w-[100%] celular:h-[100%] p-6 justify-center overflow-y-auto scrollbar scrollbar-thumb-gray-800 flex-1"
//         >
//           <Dialog.Close className="absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100">
//             <X className="m-3" />
//           </Dialog.Close>
//           <div className='w-full justify-center'>
//             <Cifra musicaId={music.id} />
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default LetraDialog;