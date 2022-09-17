import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

import { Game } from './interfaces/IGameProps'

import './styles/main.css'
import LogoImg from './assets/images/logo-home.svg'

export function App() {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])
  
  return(
    <main className='flex flex-col items-center max-w-[1344px] mx-auto my-20'>
      <img src={LogoImg} alt='Logo do Find my duo' className='select-none' draggable={false}/>

      <h1 className='mt-20 text-6xl text-white font-black'>
        Seu&nbsp;
        <span 
          className='text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text'
        >
          duo
        </span> 
        &nbsp;está aqui
      </h1>

      {/* Games */}
      <div className='grid grid-cols-6 gap-6 mt-16' >
        {games.map(game => {
          return <GameBanner bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} key={game.id}/>
        })}
      </div>

      {/* Modal create ad*/}
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </main>
  )
}