import { FormEvent, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, GameController } from "phosphor-react";

import { Input } from "./Input";
import { SelectInput } from './SelectInput';
import { WeekDaysInput } from './WeekDaysInput';
import { ModalContext } from '../../contexts/ModalContext';

interface IFormData { 
  name?: any; 
  yearsPlaying?: any; 
  hoursStart?: any; 
  hoursEnd?: any; 
  discord?: any; 
  [x: string]: FormDataEntryValue;
}

export function Form() {
  const [selectedGameId, setSelectedGameId] = useState('')
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const [isDiscordValid, setIsDiscordValid] = useState(true)
  
  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!selectedGameId) {
      toast.error('Selecione um jogo', {
        iconTheme: {
          primary: '#e73f5d',
          secondary: 'white',
        },
        style: {
          fontFamily: 'Inter, sans-serif;',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#2a2634'
        }
      })
      setSelectedGameId('invalid')
      return
    }
    
    const discord = data.discord.toString()
    const regex = /#[0-9]{4}$/
    if (!regex.test(discord)) {
      toast.error('Discord inválido', {
        iconTheme: {
          primary: '#e73f5d',
          secondary: 'white',
        },
        style: {
          fontFamily: 'Inter, sans-serif;',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#2a2634'
        }
      })
      setIsDiscordValid(false)
      return
    }

    if (weekDays.length === 0) {
      toast.error('Selecione no mínimo um dia da semana', {
        iconTheme: {
          primary: '#e73f5d',
          secondary: 'white',
        },
        style: {
          fontFamily: 'Inter, sans-serif;',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#2a2634'
        }
      })

      return
    }

    toast.promise(makeResquest(data), {
      loading: 'Criando anúncio',
      success: 'Anúncio criado com sucesso',
      error: 'Erro do servidor ao criar um anúncio'
    })
  }

  const { toggleModalOpenState } = useContext(ModalContext)


  async function makeResquest(data: IFormData) {
    await axios.post(`http://localhost:3000/games/${selectedGameId}/ads`, {
      name: data.name,
      yearsPlaying: Number(data.yearsPlaying),
      weekDays: weekDays.map(Number),
      hoursStart: data.hoursStart,
      hoursEnd: data.hoursEnd,
      discord: data.discord,
      useVoiceChannel: useVoiceChannel
    }).then(() => {
      toggleModalOpenState()
      setTimeout(() => {
        location.reload()
      }, 2500);
    })

  }
  
  return (
    <form className='flex flex-col gap-4 my-8 font-semibold' onSubmit={handleCreateAd}>
      {/* game input */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='game'>
          Qual o game?
        </label>

        <SelectInput selectedGame={setSelectedGameId} error={selectedGameId === 'invalid'}/>
      </div>

      {/* nickname input */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>
          Seu nome (ou nickname)
        </label>
        <Input id='name' name='name' placeholder='Como te chamam dentro do game? Noob?' required/>
      </div>

      {/* years playing + discord input */}
      <div className='grid grid-cols-2 gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='yearsPlaying'>
            Joga a quantos anos?
          </label>
          <Input type='number' id='yearsPlaying' name='yearsPlaying' placeholder='Tudo bem se for ZERO' required/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='discord'>
            Qual seu Discord?
          </label>
          <Input id='discord' name='discord' placeholder='Usuário#0000' required error={!isDiscordValid}/>
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
            <Input type='time' id='hoursStart' name='hoursStart' placeholder='De' required/>
            <Input type='time' id='hoursEnd' name='hoursEnd' placeholder='Até' required/>
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