import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return(
    <div className='self-stretch mt-8 pt-1 rounded-lg overflow-hidden
      bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] mx-4'>
        <div className='flex items-center justify-between px-8 py-6 bg-[#2A2634]'>
          {/* Text */}
          <div> 
            <strong className='block text-2xl text-white font-black'>
              Não encontrou seu duo?
            </strong>
            
            <span className='block text-zinc-400'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <Dialog.Trigger className='flex items-center gap-3 px-4 py-3 rounded-md text-white bg-violet-500 hover:bg-violet-600 transition-colors focus-visible:outline-0'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}