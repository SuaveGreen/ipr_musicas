// import { useState } from "react"

// export function SearchBar() {
    
//     const [search, setSearch] = useState('')
//     const [musics, setMusics] = useState<Music[]>(() => {
//         const musicList = 
//     })

//     function handleSearch(event: ChangeEvent<HTMLInputElement>) {
//         const query = event.target.value

//         setSearch(query)
//     }

//     const filteredMusic = search !== ''
//         ? musics.filter(music => music.content.includes(search))
//         : musics
    
//     return(
//         <div className='relative' >
//             <input type="search" name="" id="search-input" className="rounded-lg 
//             outline-none text-white px-3 w-60 bg-transparent border-[1px]"
//             placeholder='Digite o nome da Música' onChange={handleSearch}
//             />
//         </div>
//     )
// }