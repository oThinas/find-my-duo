import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export function Input(props: InputProps) {
  return <input {...props} autoComplete='off' className={`px-4 py-3 rounded text-sm bg-zinc-900 placeholder:text-zinc-500 focus-visible:outline-0 ${props.error ? 'ring-1 ring-error' : ''}`} />
}