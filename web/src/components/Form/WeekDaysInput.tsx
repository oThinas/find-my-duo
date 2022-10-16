import { useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface WeekDaysInputProps {
  weekDays: (weekDays: string[]) => void
}

export function WeekDaysInput(props: WeekDaysInputProps) {
  const [weekDays, setWeekDays] = useState<string[]>([])
  useEffect(() => {
    if (weekDays.length > 7 && weekDays.includes('all')) {
      setWeekDays([])
    } else if (weekDays.includes('all')) {
      setWeekDays(['0', '1', '2', '3', '4', '5', '6'])
    }

    props.weekDays(weekDays)
  }, [weekDays])

  return (
    <ToggleGroup.Root type='multiple' className='grid grid-cols-4 gap-2' value={weekDays} onValueChange={setWeekDays}>
      <ToggleGroup.Item value='all' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.length >= 7 ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        All
      </ToggleGroup.Item>

      <ToggleGroup.Item value='0' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        D
      </ToggleGroup.Item>

      <ToggleGroup.Item value='1' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item value='2' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        T
      </ToggleGroup.Item>

      <ToggleGroup.Item value='3' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item value='4' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item value='5' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item value='6' className={
        `rounded w-8 h-8 bg-zinc-900' title='Domingo 
        ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`
      }>
        S
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}