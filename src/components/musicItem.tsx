// import { useState, useEffect } from 'react';
// import { searchYoutube } from '../../src/api/youtube';

// interface MusicaItemProps {
//   cantor: string;
//   musica: string;
// }

// const MusicaItem: React.FC<MusicaItemProps> = ({ cantor, musica }) => {
//   const [videoId, setVideoId] = useState<string>('');

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const id = await searchYoutube(`${cantor} ${musica}`);
//       setVideoId(id);
//     };

//     fetchVideo();
//   }, [cantor, musica]);

//   return (
//     <div>
//       <p>{cantor} - {musica}</p>
//       {videoId && <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>}
//     </div>
//   );
// };

// export default MusicaItem;
