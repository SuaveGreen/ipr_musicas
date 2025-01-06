import { SaveMusic } from './saveMusic';
import iprLogo from '../assets/ipr-logo.png';

export function Hero() {
  return (
    <div className="flex w-[99%] items-center md:w-[98%]">
      <div className="flex justify-between w-full">
        <div className="ml-5">
          <img src={iprLogo} className="h-12" title='Logo IPR' />
        </div>
        <div className="flex pt-3 gap-8 ml-auto text-nowrap">
          <SaveMusic />
        </div>
      </div>
    </div>
  )
}
