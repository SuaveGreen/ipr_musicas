import { Save } from './saveMusic';
import iprLogo from '../assets/ipr-logo.png';

export function Hero() {
  return (
    <div className="flex">
      <div className="flex">
        <div className="ml-5">
          <div>
            <img src={iprLogo} className="h-12" title='Logo IPR' />
          </div>
        </div>
        <div className="flex pt-3 gap-8 ml-[74vh] text-nowrap">
          <div className='relative' >
              <input type="search" name="" id="search-input" className="rounded-lg 
                outline-none text-white px-3 w-60 bg-transparent border-[1px]"
                placeholder='Digite o nome da Música' 
              />
          </div>
          <div>
              <Save />
          </div>
          {/* <div>
            teste um
          </div> */}
          <div className="pr-0">
            teste 2
          </div>
        </div>
      </div>
    </div>
  )
}