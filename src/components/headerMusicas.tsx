export function HeroMusica() {
  return (
    <div className="flex gap-x-28 border-b-[1px] space-y-5 space-y-reverse pl-5">
      <div>
        <p>Número</p>
      </div>
      <div className="pr-4">
        <p>Música</p>
      </div>
      <div>
        <p>Cantor</p>
      </div>
      <div className='ml-[73px]' >
            <input type="search" name="" id="search-input" className="rounded-lg 
            outline-none text-white px-3 w-60 bg-transparent border-[1px]"
            placeholder='Digite o nome da Música' 
            />
        </div>
    </div>
  )
}