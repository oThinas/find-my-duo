import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from "phosphor-react";
import { Input } from "./Input";

export function Form() {
  return (
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
  )
}