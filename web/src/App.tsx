import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

import { Game } from './interfaces/IGameProps'

import './styles/main.css'
import LogoImg from './assets/images/logo-home.svg'
import { ModalContext } from './contexts/ModalContext';

export function App() {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data)
    })
  }, [])

  const [isMobile, setIsMobile] = useState(false);
  function checkMobile() {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    checkMobile()
  }, [])
  window.addEventListener('resize', checkMobile)

  const { isModalOpen, toggleModalOpenState } = useContext(ModalContext)
  console.log('rest', isModalOpen)
  
  return(
    <main className='flex flex-col items-center max-w-[1344px] h-screen mx-auto my-20'>
      <img src={LogoImg} alt='Logo do Find my duo' className='select-none' draggable={false}/>

      <h1 className='mt-20 text-4xl md:text-6xl text-white font-black'>
        Seu&nbsp;
        <span 
          className='text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text'
          >
          duo
        </span> 
        &nbsp;está aqui
      </h1>

      {
        isMobile ? 
        <p className='m-20 text-2xl text-white font-black text-center'>
          Para acessar o&nbsp;
          <span className='text-[#9572FC]'>
            Find my Duo 
          </span>
          &nbsp;por um dispositivo móvel, baixe o aplicativo clicando no botão abaixo.
          <a href="https://expo.dev/artifacts/eas/m45wLep3WaLapngybFyc2C.apk" download>
            <div className='bg-[#9572FC] text-white font-bold text-2xl rounded-md px-10 py-4 mt-10'>
              Baixar
            </div>
          </a>
        </p> :
        <>
        {/* Games */}
        <div className='grid grid-cols-6 gap-6 mt-16 mx-4' >
          {games.map(game => {
            return <GameBanner bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} key={game.id}/>
          })}
        </div>

        {/* Modal create ad*/}
        <Dialog.Root open={isModalOpen} onOpenChange={toggleModalOpenState}>
          <CreateAdBanner />

          <CreateAdModal />
        </Dialog.Root>
       </>
      }
      
    </main>
  )
}