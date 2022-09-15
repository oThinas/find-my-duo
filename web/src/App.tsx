import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'
import LogoImg from './assets/images/logo-home.svg'
import { Input } from './components/Form/input'

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

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

        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/60'/>

          <Dialog.Content 
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] px-10 py-8 rounded-lg 
            shadow-lg shadow-black/25
            text-white bg-[#2A2634]'
          >
            <Dialog.Title className='text-3xl font-black'>
              Publique um anúncio
            </Dialog.Title>

            <form className='flex flex-col gap-4 my-8'>
              {/* game input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='game' className='font-semibold'>
                  Qual o game?
                </label>
                <Input id='game' placeholder='Selecione o game que deseja jogar'/>
              </div>

              {/* nickname input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>
                  Seu nome (ou nickname)
                </label>
                <Input id='name' placeholder='Como te chamam dentro do game? Noob?' />
              </div>

              {/* years playing + discord input */}
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='yearsPlaying'>
                    Joga a quantos anos?
                  </label>
                  <Input type='number' id='yearsPlaying' placeholder='Tudo bem se for ZERO'/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='discord'>
                    Qual seu Discord?
                  </label>
                  <Input id='discord' placeholder='Usuário#0000' />
                </div>
              </div>

              {/* week days + hours start + hours end */}
              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='weekDays'>
                    Quando costuma jogar?
                  </label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button className='rounded w-8 h-8 bg-zinc-900' title='Todos os dias'>
                      All
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Domingo'>
                      D
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Segunda'>
                      S
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Terça'>
                      T
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Quarta'>
                      Q
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Quinta'>
                      Q
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Sexta'>
                      S
                    </button>

                    <button className='rounded w-8 h-8 bg-zinc-900' title='Sábado'>
                      S
                    </button>
                  </div>
                </div>

                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='hoursStart'>
                    Qual horário do dia?
                  </label>

                  <div className='grid grid-cols-2 gap-2'>
                    <Input type='time' id='hoursStart' placeholder='De'/>
                    <Input type='time' id='hoursEnd' placeholder='Até'/>
                  </div>
                </div>
              </div>

              {/* checkbox */} {/* TODO: Checkbox do Radix para estilizar livremente */}
              <div className='flex gap-2 mt-2 text-sm'>
                <Input type='checkbox' />
                Costumo me conectar ao chat de voz
              </div>

              {/* buttons */}
              <footer className='flex gap-4 justify-end mt-4'>
                <Dialog.Close type='button' className='h-12 px-5 rounded-md font-semibold bg-zinc-500 hover:bg-zinc-600 transition-colors'>
                  Cancelar
                </Dialog.Close>

                <button type='submit' className='flex gap-3 items-center h-12 px-5 rounded-md font-semibold bg-violet-500 hover:bg-violet-600 transition-colors'>
                  <GameController size={24}/>
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}