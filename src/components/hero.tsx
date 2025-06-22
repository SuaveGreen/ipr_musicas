import { SaveMusic } from './saveMusic';
import iprLogo from '../assets/ipr-logo.png';
// import Tutorial from './tutorialNU';

export function Hero() {
  return (
    <div className="flex w-[99%] items-center tablet:w-[98%] monitor:px-[5vh]">
      <div className="flex justify-between w-full">
        <div className="ml-5">
          <img src={iprLogo} className="h-12" title='Logo IPR' />
        </div>
        {/* <div className="flex mr-3 pt-3 gap-8 ml-auto monitor:mr-9 text-nowrap">
          <Tutorial />
        </div> */}
        <div className="hidden tablet:flex mr-3 pt-3 gap-8 ml-auto monitor:mr-9 text-nowrap ">
          <SaveMusic />
        </div>
      </div>
    </div>
  )
}
