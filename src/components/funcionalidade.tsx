// // Funcionalidade.tsx
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import React, { useState } from 'react';

// interface FuncionalidadeContentProps { 
//   onBack: () => void;
//   funcionalidade: number; }
  
//   const FuncionalidadeContent: React.FC<FuncionalidadeContentProps> = ({ funcionalidade }) => {
//     const conteudos = { 
//       0: [ { img: '/img1.png', text: 'Passo 1 para salvar.' }, 
//       { img: '/img2.png', text: 'Passo 2 para salvar.' }, 
//       { img: '/img3.png', text: 'Passo 3 para salvar.' }, 
//     ], 
//       1: [ { img: '/img4.png', text: 'Passo 1 para pesquisar música.' }, 
//         { img: '/img5.png', text: 'Passo 2 para pesquisar música.' }, 
//       ], 
//       // Adicione mais conteúdos conforme necessário
//   };

//   const [currentPage, setCurrentPage] = useState(0);
//   const pages = conteudos[funcionalidade];

//   return (
//     <div className='p-5'>
//       <button onClick={onBack} className=" text-gray-500 hover:scale-105 duration-300">
//         RETORNAR
//       </button> 
//       <div className="space-y-8"> 
//         {conteudos[funcionalidade].map((conteudo, index) => (
//         <div key={index} className="text-center">
//           <img src={conteudo.img} alt="Ilustração" className="mb-4" />
//             <p>{conteudo.text}</p>
//           </div> 
//         ))} 
//       </div>
//       <div className='flex p-5 pb-8 items-center justify-between fixed bottom-0 left-0 right-0'>
//         <div>
//           <ArrowLeft
//             className=" text-white rounded-lg hover:cursor-pointer
//             flex items-center justify-center hover:scale-110 hover:text-gray-400
//             w-28 h-10 tablet:w-32 tablet:h-8 duration-300"
//           />
//         </div>
//         <div>
//           <ArrowRight
//             className="text-white rounded-lg hover:cursor-pointer
//             flex items-center justify-center hover:scale-110 hover:text-gray-400
//             hover: duration-300 w-28 h-10 tablet:w-32 tablet:h-8"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Funcionalidade;
