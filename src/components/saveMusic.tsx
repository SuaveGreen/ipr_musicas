import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'lucide-react'

export function Save() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="hover:scale-105 duration-300">
        <span className=''>
          Musicas
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-[#181f2c] md:rounded-md flex flex-col outline-none'>
            <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100'>
              <X className='m-3'/>
            </Dialog.Close>

            <form className='flex-1 flex flex-col'>
              <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className='text-lg text-slate-300'>
                    Músicas salvas
                  </span>
              </div>
            </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}