import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'
import LogoImg from './assets/images/logo-home.svg'

export function App() {
  return(
    <main className='flex flex-col items-center max-w-[1344px] mx-auto my-20'>
      <img src={LogoImg} alt="Logo do Find my duo" className='select-none' draggable={false}/>

      <h1 className='mt-20 text-6xl text-white font-black'>
        Seu&nbsp;
        <span 
          className='text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text'
        >
          duo
        </span> 
        &nbsp;está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16" > {/* Games */}
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              League of Legends
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              Dota 2
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              Counter Strike
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              Apex Legends
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              Fortnite
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
            <strong className='block text-white font-bold'>
              World of Warcraft
            </strong>
            <span className='block text-zinc-300 text-sm'>
              4 anúncios
            </span>
          </div>
        </a>
      </div>

      <div className='self-stretch mt-8 pt-1 rounded-lg overflow-hidden
      bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]'> {/* Create ad */}
        <div className='flex items-center justify-between px-8 py-6 bg-[#2A2634]'>
          <div> {/* Text */}
            <strong className='block text-2xl text-white font-black'>
              Não encontrou seu duo?
            </strong>
            <span className='block text-zinc-400'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className='flex items-center gap-3 px-4 py-3 rounded-md text-white bg-violet-500 hover:bg-violet-600 transition-colors'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </main>
  )
}