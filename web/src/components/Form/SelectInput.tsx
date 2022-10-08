import { useEffect, useState } from 'react';
import axios from 'axios';
import { CaretDown, Check } from "phosphor-react";
import * as Select from '@radix-ui/react-select';

import { Game } from '../../interfaces/IGameProps';

interface SelectInputProps {
  selectedGame: (gameId: string) => void
}

export function SelectInput(props: SelectInputProps) {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data)
    })
  }, [])
  
  return(
    <Select.Root onValueChange={(gameId) => props.selectedGame(gameId)}>
      <Select.Trigger className='flex col-span-1 items-center justify-between px-4 py-3 rounded text-sm text-zinc-500 bg-zinc-900'>
        <Select.Value placeholder='Selectione o game que deseja jogar'/>

        <CaretDown size={24} className="color-zinc-300" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport className='rounded-lg my-auto px-6 py-4 text-white bg-zinc-900'>
            <Select.Group>
              {games.map(game => {
                return (
                  <Select.Item value={game.id} key={game.id} className='flex justify-between cursor-pointer rounded mb-1 p-1 hover:bg-violet-500 hover:text-white hover:border-none'>
                    <Select.ItemText>
                      {game.title}
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <Check size={24}/>
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}