import { FormEvent, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, GameController } from "phosphor-react";

import { Input } from "./Input";
import { SelectInput } from './SelectInput';
import { WeekDaysInput } from './WeekDaysInput';

export function Form() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  
  function createAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    console.log(data);
    console.log(weekDays)
    console.log(useVoiceChannel);
  }
  
  return (
    <form className='flex flex-col gap-4 my-8' onSubmit={createAd}>
      {/* game input */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='game' className='font-semibold'>
          Qual o game?
        </label>

        <SelectInput />
      </div>

      {/* nickname input */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>
          Seu nome (ou nickname)
        </label>
        <Input id='name' name='name' placeholder='Como te chamam dentro do game? Noob?' />
      </div>

      {/* years playing + discord input */}
      <div className='grid grid-cols-2 gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='yearsPlaying'>
            Joga a quantos anos?
          </label>
          <Input type='number' id='yearsPlaying' name='yearsPlaying' placeholder='Tudo bem se for ZERO'/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='discord'>
            Qual seu Discord?
          </label>
          <Input id='discord' name='discord' placeholder='Usuário#0000' />
        </div>
      </div>

      {/* week days + hours start + hours end */}
      <div className='flex gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='weekDays'>
            Quando costuma jogar?
          </label>

          <WeekDaysInput weekDays={setWeekDays}/>
        </div>

        <div className='flex flex-1 flex-col gap-2'>
          <label htmlFor='hoursStart'>
            Qual horário do dia?
          </label>

          <div className='grid grid-cols-2 gap-2'>
            <Input type='time' id='hoursStart' name='hoursStart' placeholder='De'/>
            <Input type='time' id='hoursEnd' name='hoursEnd' placeholder='Até'/>
          </div>
        </div>
      </div>

      {/* checkbox */}
      <label className='flex items-center gap-2 mt-2 text-sm'>
        <Checkbox.Root checked={useVoiceChannel}
          onCheckedChange={(checked) => {
            if (checked === true)
              setUseVoiceChannel(true)
            else
              setUseVoiceChannel(false)
          }} 
          className='rounded w-6 h-6 bg-zinc-900'
        >
          <Checkbox.Indicator>
            <Check className='mx-auto w-4 h-4 text-emerald-400'/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        Costumo me conectar ao chat de voz
      </label>

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