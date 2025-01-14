// // Tutorial.tsx
// import React, { useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { CircleHelp, X, } from 'lucide-react';
// import Funcionalidade from './funcionalidade';

// const Tutorial: React.FC = () => {
//   const [selectedFuncionalidade, setSelectedFuncionalidade] = useState<string | null>(null);

//   const funcionalidades = [
//     { id: '1', title: 'Como salvar musica'},
//     { id: '1', title: 'Como salvar musica'},
//     { id: '1', title: 'Como salvar musica'},
//     // Adicione mais funcionalidades conforme necessário
//   ];

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger className="cursor-pointer hover:scale-105 duration-300">
//         <Dialog.Title>
//           <span>
//             <CircleHelp/>
//           </span>
//         </Dialog.Title>
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50" />
//         <Dialog.Content className='fixed inset-0 tablet:inset-auto tablet:left-1/2 tablet:top-1/2 tablet:-translate-x-1/2 
//             tablet:-translate-y-1/2 bg-[#181f2c] tablet:rounded-md flex flex-col outline-none 
//             tablet:w-full tablet:h-[80vh] tablet:max-w-[640px]'>
//           <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100'>
//               <X className='m-3'/>
//           </Dialog.Close> 
//               <div className="flex flex-1 flex-col gap-3 p-5">
//                   <span className='text-lg text-slate-300'>
//                       Como funciona:
//                   </span>
//               </div>

//           <div className='overflow-y-auto scrollbar p-5 scrollbar-thumb-gray-800 h-full justify-between'>    
//           {funcionalidades.map((func) => ( 
//             <div key={func.id}> 
//               <span onClick={() => setSelectedFuncionalidade(func.id)} 
//                 className={` text-slate-300
//                 ${selectedFuncionalidade === func.id && ''}`} > 
//                 {func.title} 
//               </span> 
//             </div> 
//           ))}
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default Tutorial;